'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

export default function Banner() {
  return (
    <Box 
      sx={{ 
        bgcolor: 'primary.main',
        color: 'white',
        py: 8,
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Image
            src="/images/logo.png"
            alt="VOCES"
            width={220}
            height={220}
            style={{ 
              filter: 'invert(1) brightness(2)',
              objectFit: 'contain'
            }}
          />
        </Box>
        <Typography variant="h4" component="h1">
          Tecnología en tu propia Lengua
        </Typography>
      </Container>
    </Box>
  );
}