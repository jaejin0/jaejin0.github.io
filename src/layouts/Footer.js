import { Box, Container, Link, Stack, Typography } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 10, py: 5, borderTop: '1px solid rgba(20, 32, 51, 0.08)' }}>
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
          <Stack direction="row" spacing={2}>
            <Link href="mailto:jaejin0109@gmail.com" underline="hover">Email</Link>
            <Link href="https://www.linkedin.com/in/jaejincha/" target="_blank" rel="noreferrer" underline="hover">LinkedIn</Link>
            <Link href="https://github.com/jaejin0" target="_blank" rel="noreferrer" underline="hover">GitHub</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
