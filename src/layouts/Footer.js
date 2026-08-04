import { Box, Container, Link, Stack, Typography } from '@mui/material';

const resumeHref = `${process.env.PUBLIC_URL || ''}/Jaejin_Cha_Resume.pdf`;

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 10, py: 5, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Typography color="text.secondary" variant="body2">
            © {new Date().getFullYear()} Jaejin Cha. Built with React and Material UI.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Link href="mailto:jaejin0109@gmail.com" underline="hover">Email</Link>
            <Link href="https://www.linkedin.com/in/jaejincha/" target="_blank" rel="noreferrer" underline="hover">LinkedIn</Link>
            <Link href="https://github.com/jaejin0" target="_blank" rel="noreferrer" underline="hover">GitHub</Link>
            <Link href={resumeHref} target="_blank" rel="noreferrer" underline="hover">Resume</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
