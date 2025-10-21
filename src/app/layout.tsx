import type { Metadata } from 'next';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import { theme } from './theme';
import ResponsiveNav from '@/components/ResponsiveNav';

export const metadata: Metadata = { title: 'Voces-CNIA', description: 'Traducción, ASR y herramientas abiertas para lenguas indigenas en riesgo' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ResponsiveNav />
          <Container sx={{ py:4 }}>{children}</Container>
          </ThemeProvider>
      </body>
    </html>
  );
}
