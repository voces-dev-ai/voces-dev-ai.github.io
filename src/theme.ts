import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0A84FF' },   // pon el color del ZIP aquí
    secondary: { main: '#111111' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#111111' }
  },
  typography: {
    fontFamily: 'Inter, system-ui, Arial, sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: { borderRadius: 12 }
});
export default theme;
