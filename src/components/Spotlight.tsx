'use client'; 

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Source_Sans_3 } from 'next/font/google';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], // opcional
});


export default function Spotlight() {
  return (
    // Main box 
    <Box
      id="one" 
      sx={{
        position: 'relative',
        bgcolor: '#4c5c96',
        pt: { xs: 0, md: 4 }, 
        pb: { xs: 0, md: 0 },
        //UPPER DIAGONAL
        '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        top: { xs: -49, md: -99 },
        height: { xs: 50, md: 100 },
        backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%234c5c96%3B' /%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        zIndex: 3,
        }
      }}
    >
      {/* containner "inner" with widht fixed and responsive*/}
      <Box
        className="inner" 
        sx={{
          position: 'relative',
          zIndex: 1, 
          maxWidth: '60em',
          mx: 'auto',
          px: { xs: 3, sm: 4, md: 0 }, 
          py: { xs: 3, md: 0 }, 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 30%' },
          alignItems: 'center', 
          gap: { xs: 4, md: 6 }, 
        }}
      >
        {/* Text's columns */}
        <Box
          sx={{
            width: '100%',
            color: '#fff',
            textAlign: { xs: 'center', md: 'left' }, 
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            variant="h4"
            className={raleway.className}
            sx={{
              fontFamily: 'raleway.style.fontFamily',
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '1.2em', md: '1.4em' }, 
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '2.08px',
              lineHeight: '34.32px',
            }}
          >
            TECNOLOGÍA CO-CREADA CON COMUNIDADES
          </Typography>

          <Box sx={{ my: 2, height: 2, bgcolor: 'rgba(255,255,255,0.125)' }} />

          <Typography className={raleway.className} sx={{
            textAlign: { xs: 'center', md: 'justify' }, 
            color: 'white', 
            fontFamily: 'raleway.style.fontFamily', 
            fontWeight: 150, 
            fontSize: '1em', 
            lineHeight: 1.5,
          }}>
            En Voces, desarrollamos herramientas digitales junto a comunidades
            indígenas de América Latina, el Caribe y las islas del Pacífico.
            Nos enfocamos en el desarrollo tecnológico como vía para fortalecer
            la lengua, la identidad y la autonomía cultural de los pueblos
            originarios.
          </Typography>
        </Box>

        {/* Image's column */}
        <Box
          sx={{
            justifySelf: { xs: 'center', md: 'center' }, 
            order: { xs: 1, md: 2 },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            borderRadius: '100%',
            width: '16em',
            height: '16em',
          }}
        >
          <Image
            src="/images/pic01.png"
            alt="Co-creación tecnológica"
            width={704} 
            height={704} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority 
          />
        </Box>
      </Box>
    </Box>
  );
}