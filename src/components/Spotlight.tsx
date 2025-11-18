'use client'; 

import { Box, Typography, Grid } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TranslateIcon from '@mui/icons-material/Translate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Spotlight() {
  return (
    <Box
      id="valores" 
      sx={{
        position: 'relative',
        bgcolor: '#3f4e85',
        pt: { xs: 0.5, md: 1 },
        pb: { xs: 6, md: 15 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          top: { xs: -49, md: -99 },
          height: { xs: 50, md: 100 },
          backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%233f4e85%3B' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          zIndex: 3,
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 1, 
          maxWidth: '60em',
          mx: 'auto',
          px: { xs: 3, sm: 4, md: 2 },
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          className={raleway.className}
          sx={{
            fontFamily: raleway.style.fontFamily,
            textAlign: 'center',
            fontSize: { xs: '1.2em', md: '1.4em' }, 
            textTransform: 'uppercase',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#fff',
            mb: 2.5,
          }}
        >
          Nuestros Valores Fundamentales
        </Typography>

        {/* Values Grid */}
        <Grid container spacing={{ xs: 4, md: 5 }} justifyContent="center">
          {/* Value 1: Co-creación con Comunidades */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <PeopleIcon 
                  sx={{ 
                    fontSize: { xs: 40, md: 44 },
                    color: '#5a9fd4',
                  }} 
                />
              </Box>
              <Typography
                className={raleway.className}
                sx={{
                  fontFamily: raleway.style.fontFamily,
                  fontSize: { xs: '0.95em', md: '1em' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  mb: 2,
                }}
              >
                Tecnología Co-Creada con Comunidades
              </Typography>
              <Typography
                className={raleway.className}
                sx={{
                  fontFamily: raleway.style.fontFamily,
                  fontSize: { xs: '0.8em', md: '0.85em' },
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                Desarrollamos herramientas digitales junto a comunidades indígenas para fortalecer lengua, identidad y autonomía cultural.
              </Typography>
            </Box>
          </Grid>

          {/* Value 2: Lenguas que Viven en la Tecnología */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <TranslateIcon 
                  sx={{ 
                    fontSize: { xs: 40, md: 44 },
                    color: '#5a9fd4',
                  }} 
                />
              </Box>
              <Typography
                className={raleway.className}
                sx={{
                  fontFamily: raleway.style.fontFamily,
                  fontSize: { xs: '0.95em', md: '1em' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  mb: 2,
                }}
              >
                Lenguas que Viven en la Tecnología
              </Typography>
              <Typography
                className={raleway.className}
                sx={{
                  fontFamily: raleway.style.fontFamily,
                  fontSize: { xs: '0.8em', md: '0.85em' },
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                Creamos traducción automática, transcripción y herramientas educativas que proyectan las lenguas originarias hacia el futuro digital.
              </Typography>
            </Box>
          </Grid>

          {/* Value 3: Respeto, Identidad y Futuro */}
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <FavoriteIcon 
                  sx={{ 
                    fontSize: { xs: 40, md: 44 },
                    color: '#5a9fd4',
                  }} 
                />
              </Box>
              <Typography
                className={raleway.className}
                sx={{
                  fontFamily: raleway.style.fontFamily,
                  fontSize: { xs: '0.95em', md: '1em' },
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  mb: 2,
                }}
              >
                Respeto, Identidad y Futuro
              </Typography>
              <Typography
                className={raleway.className}
                sx={{
                  fontFamily: raleway.style.fontFamily,
                  fontSize: { xs: '0.8em', md: '0.85em' },
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                Fortalecemos la identidad cultural mediante tecnologías interculturales que potencian cada lengua y comunidad.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}