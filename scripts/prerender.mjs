import http from "node:http";
import path from "node:path";
import {
  readFile,
  writeFile,
  mkdir,
  stat,
} from "node:fs/promises";
import puppeteer from "puppeteer";

const buildDir = path.resolve("build");

/*
 * These correspond to your React Router routes:
 *
 * /
 * /experience
 * /projects
 * /education
 */
const routes = [
  "/",
  "/experience",
  "/projects",
  "/education",
];

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

/*
 * Save the ORIGINAL React build shell.
 *
 * This is important because while we're prerendering multiple routes,
 * every route should start from the original CRA index.html rather
 * than from a page we've already prerendered.
 */
const originalIndexHtml = await readFile(
  path.join(buildDir, "index.html"),
  "utf8"
);

const server = http.createServer(async (req, res) => {
  try {
    const requestUrl = new URL(
      req.url ?? "/",
      "http://127.0.0.1"
    );

    const pathname = decodeURIComponent(requestUrl.pathname);

    /*
     * If the browser is requesting a real static asset such as:
     *
     * /static/js/main.js
     * /static/css/main.css
     * /favicon.ico
     *
     * serve that file.
     */
    if (path.extname(pathname)) {
      const relativePath = pathname.replace(/^\/+/, "");
      const filePath = path.join(buildDir, relativePath);

      try {
        const fileStat = await stat(filePath);

        if (!fileStat.isFile()) {
          throw new Error("Not a file");
        }

        const content = await readFile(filePath);
        const extension = path.extname(filePath).toLowerCase();

        res.writeHead(200, {
          "Content-Type":
            mimeTypes[extension] ??
            "application/octet-stream",
        });

        res.end(content);
        return;
      } catch {
        res.writeHead(404);
        res.end("Not found");
        return;
      }
    }

    /*
     * For React routes such as:
     *
     * /
     * /experience
     * /projects
     *
     * always start with the original React index.html.
     */
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    res.end(originalIndexHtml);
  } catch (error) {
    console.error(error);

    res.writeHead(500);
    res.end("Internal server error");
  }
});

let browser;

try {
  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();

  if (!address || typeof address === "string") {
    throw new Error("Could not determine local server port.");
  }

  const baseUrl =
    `http://127.0.0.1:${address.port}`;

  console.log(`Prerender server: ${baseUrl}`);

  browser = await puppeteer.launch({
    headless: true,
  });

  for (const route of routes) {
    const page = await browser.newPage();

    try {
      const url = `${baseUrl}${route}`;

      console.log(`Prerendering ${route}...`);

      await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      /*
       * Wait until React has rendered Layout.
       */
      await page.waitForSelector(
        "[data-prerender-ready]",
        {
          timeout: 15000,
        }
      );

      /*
       * Get the complete rendered DOM.
       */
      const html = await page.content();

      let outputPath;

      if (route === "/") {
        outputPath = path.join(
          buildDir,
          "index.html"
        );
      } else {
        const routeDirectory = path.join(
          buildDir,
          route.replace(/^\/+/, "")
        );

        await mkdir(routeDirectory, {
          recursive: true,
        });

        outputPath = path.join(
          routeDirectory,
          "index.html"
        );
      }

      await writeFile(
        outputPath,
        html,
        "utf8"
      );

      console.log(
        `✓ ${route} -> ${path.relative(
          process.cwd(),
          outputPath
        )}`
      );
    } finally {
      await page.close();
    }
  }

  console.log("");
  console.log("Prerender complete.");
} finally {
  if (browser) {
    await browser.close();
  }

  server.close();
}