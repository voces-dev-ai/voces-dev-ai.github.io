'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Spotlight() {
  return (
    // main box
    <Box
      id="one" 
      sx={{
        position: 'relative',
        bgcolor: 'rgb(69, 85, 141)',
        py: { xs: 5, md: 10 }, 
        // UPPER DIAGONAL
        '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        top: { xs: 0, md: 0 },
        height: { xs: 50, md: 100 },
        backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='100,100 100,0 0,0' style='fill:%234c5c96%3B' /%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        zIndex: 3,
        },
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
          py: { xs: 3, md: 4 }, 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'minmax(350px, 40%) 1fr', md: '30% 1fr' },
          alignItems: 'center',
          rowGap: 6, 
        }}
      >
        {/* Image's column */}
        <Box
          sx={{
            justifySelf: { xs: 'center', md: 'end' },
            order: { xs: 1, ms: 'minmax(350px, 1)', md: 1 },
            overflow: 'hidden',
            display: 'inline-block',
            position: 'relative',
            borderRadius: '100%',
            width: '16em',
            margin: '0 2em 2em 0', 
          }}
        >
          <Image
            src="/images/pic02.png"
            alt="Co-creación tecnológica"
            width={704}
            height={704}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority 
          />
        </Box>

        {/* Text's Column*/}
        <Box
          sx={{
            width: '100%',
            color: '#fff',
            textAlign: { xs: 'center', md: 'right' },
            order: { xs: 2,ms:2, md: 2 }, 
            maxWidth: { xs: '100%', md: '80em' }, 
            ml: { xs: 'auto', md: '1' },
            mr: { xs: 'auto', md: '3' },
            mb: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.2em', md: '1.4em' },
              textTransform: 'uppercase',
              fontWeight: 700,
              textAlign: 'left',
              letterSpacing: '2.08px',
              lineHeight: '34.32px',
            }}
          >
            LENGUAS QUE VIVEN EN LA TECNOLOGÍA
          </Typography>

          {/* line shadow under tittle */}
          <Box sx={{ my: 2, height: 2, bgcolor: 'rgba(255,255,255,0.125)' }} />

          <Typography   className={raleway.className} sx={{textAlign: 'left', color: 'white', fontFamily: 'raleway.style.fontFamily', fontWeight:150, fontSize: '1em', lineHeight: 1.5,// Esto ya está bastante bien para la altura del box de texto
            }}>
              Creamos herramientas de traducción automática, transcripción, herramientas educativas y más, adaptadas a las realidades lingüísticas y culturales de los pueblos originarios. Estas tecnologías no solo preservan lenguas, sino que las proyectan hacia el futuro digital.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}