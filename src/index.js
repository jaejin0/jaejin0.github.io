import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#28539a',
      dark: '#1d3b70',
      light: '#e9f0fb',
    },
    secondary: {
      main: '#0f766e',
    },
    background: {
      default: '#f7f9fc',
      paper: '#ffffff',
    },
    text: {
      primary: '#142033',
      secondary: '#5d6978',
    },
    divider: 'rgba(20, 32, 51, 0.10)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h3: {
      fontWeight: 790,
      fontSize: 'clamp(2.25rem, 5.7vw, 4.2rem)',
      lineHeight: 1.06,
      letterSpacing: '-0.038em',
    },
    h4: {
      fontWeight: 760,
      letterSpacing: '-0.025em',
    },
    h5: {
      fontWeight: 730,
      letterSpacing: '-0.015em',
    },
    h6: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 680,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(20, 32, 51, 0.08)',
          boxShadow: '0 12px 34px rgba(35, 55, 90, 0.065)',
          transition: 'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 18px 44px rgba(35, 55, 90, 0.11)',
            borderColor: 'rgba(40, 83, 154, 0.18)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
