import { Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 16, textAlign: 'center' }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="overline" color="primary.main" sx={{ fontWeight: 750 }}>404</Typography>
        <Typography variant="h4" component="h1">Page not found</Typography>
        <Typography color="text.secondary">
          The page you requested does not exist or may have moved.
        </Typography>
        <Button component={Link} to="/" variant="contained">Return home</Button>
      </Stack>
    </Container>
  );
}

export default NoPage;
