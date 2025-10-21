import type { Metadata } from 'next';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { theme } from './theme';
import NavBar from './ui/NavBar';

export const metadata: Metadata = { title: 'Proyecto', description: 'Sitio' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <Container sx={{ py:4 }}>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
