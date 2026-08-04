import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

const navItems = [
  { label: 'Home', to: '/portfolio/' },
  { label: 'Experience', to: '/portfolio/experience' },
  { label: 'Projects', to: '/portfolio/projects' },
  { label: 'Education', to: '/portfolio/education' },
];

function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(246, 248, 251, 0.9)',
        color: 'text.primary',
        borderBottom: '1px solid rgba(20, 32, 51, 0.08)',
        backdropFilter: 'blur(14px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 68, gap: 2 }}>
          <Typography
            component={NavLink}
            to="/portfolio/"
            variant="h6"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mr: 'auto',
            }}
          >
            Jaejin Cha
          </Typography>

          <Box sx={{ display: 'flex', gap: { xs: 0.25, sm: 1 }, flexWrap: 'wrap' }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end={item.to === '/portfolio/'}
                sx={{
                  color: 'text.secondary',
                  px: { xs: 1, sm: 1.5 },
                  '&.active': {
                    color: 'primary.main',
                    bgcolor: 'primary.light',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
