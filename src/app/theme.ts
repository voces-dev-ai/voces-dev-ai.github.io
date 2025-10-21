'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0B5FFF' },
    secondary: { main: '#00C2A8' },
    background: { default: '#fafafa', paper: '#fff' },
  },
  typography: { fontFamily: ['Inter','system-ui','Roboto','Arial'].join(',') },
  shape: { borderRadius: 12 },
});
