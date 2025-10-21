'use client';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Page() {
  return (
    <Box sx={{ py:6 }}>
      <Typography variant="h2" sx={{ mb:2 }}>Proyecto Voces CNIA</Typography>
      <Typography sx={{ mb:3, maxWidth:720 }}>
        Plataforma con secciones de Inicio, Proyectos, Equipo y Contacto. Construida con Next.js + MUI y exportada a GitHub Pages.
      </Typography>
      <Button component={Link} href="/proyectos" variant="contained">Ver Proyectos</Button>
    </Box>
  );
}
