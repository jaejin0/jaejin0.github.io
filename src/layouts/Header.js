import { NavLink } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

const navItems = [
  { label: 'Home', to: '/portfolio/' },
  { label: 'Experience', to: '/portfolio/experience' },
  { label: 'Projects', to: '/portfolio/projects' },
  { label: 'Education', to: '/portfolio/education' },
];

const resumeHref = `${process.env.PUBLIC_URL || ''}/Jaejin_Cha_Resume.pdf`;

function Header() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(247, 249, 252, 0.90)',
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(14px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 68,
            py: { xs: 1, md: 0 },
            gap: 1.25,
            flexWrap: { xs: 'wrap', md: 'nowrap' },
          }}
        >
          <Typography
            component={NavLink}
            to="/portfolio/"
            variant="h6"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              fontWeight: 820,
              letterSpacing: '-0.025em',
              mr: 'auto',
            }}
          >
            Jaejin Cha
          </Typography>

          <Box
            component="nav"
            aria-label="Primary navigation"
            sx={{ display: 'flex', gap: { xs: 0.1, sm: 0.6 }, alignItems: 'center', flexWrap: 'wrap' }}
          >
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end={item.to === '/portfolio/'}
                size="small"
                sx={{
                  color: 'text.secondary',
                  px: { xs: 0.85, sm: 1.25 },
                  '&.active': {
                    color: 'primary.main',
                    bgcolor: 'primary.light',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              component="a"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              sx={{ ml: { xs: 0, sm: 0.5 } }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
