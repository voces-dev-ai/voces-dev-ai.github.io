'use client';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';

export default function Features() {
  return (
    <Box
      component="section"
      id="one"
      sx={{
        position: 'relative',
        bgcolor: '#4c5c96',     // color de la sección siguiente en el ZIP
        color: '#fff',
        py: 8,
        // BLOQUE DIAGONAL SUPERIOR
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-6.5em',        // empalma con el -6.5em del banner
          left: 0,
          right: 0,
          height: '6.5em',
          bgcolor: '#4c5c96',
          transform: 'skewY(-4deg)',
          transformOrigin: '100% 0',
        },
        // DIAGONAL INFERIOR (opcional, para el siguiente bloque)
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-6.5em',
          left: 0,
          right: 0,
          height: '6.5em',
          bgcolor: '#4c5c96',
          transform: 'skewY(4deg)',
          transformOrigin: '0 100%',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {[1,2,3].map((k) => (
            <Grid item xs={12} md={4} key={k}>
              <Card sx={{ bgcolor: 'rgba(255,255,255,.06)', backdropFilter: 'blur(2px)' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>Título {k}</Typography>
                  <Typography sx={{ mt: 1, opacity: .95 }}>
                    Texto de ejemplo alineado al estilo.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
