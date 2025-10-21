'use client';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100]
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Voces CNIA. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/contacto" color="inherit" underline="hover">
              Contacto
            </Link>
            <Link href="https://github.com/voces-dev-ai" color="inherit" underline="hover" target="_blank">
              GitHub
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}