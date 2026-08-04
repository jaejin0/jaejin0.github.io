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
      main: '#2d57a4',
      dark: '#1f3d75',
      light: '#e7eefb',
    },
    secondary: {
      main: '#0f766e',
    },
    background: {
      default: '#f6f8fb',
      paper: '#ffffff',
    },
    text: {
      primary: '#142033',
      secondary: '#5f6b7a',
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h3: {
      fontWeight: 780,
      fontSize: 'clamp(2.2rem, 6vw, 4.25rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.035em',
    },
    h4: {
      fontWeight: 750,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 650,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(20, 32, 51, 0.08)',
          boxShadow: '0 14px 36px rgba(35, 55, 90, 0.07)',
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
