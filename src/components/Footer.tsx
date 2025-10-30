'use client';

import {
  Box, Typography, Grid, Button,
  FormControl, FormLabel, OutlinedInput, Stack, Avatar, Link
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

const labelSx = {
  color: '#ffffffff',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  fontSize: '0.8em',
  mb: 1,
};


const inputSx = {
  bgcolor: 'rgba(255, 255, 255, 0.025)',
  border: 'solid 1px rgba(115, 119, 125, 0.1) !important',
  bordewidth: '1px',
  color: '#fff',
  borderRadius: '3px',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.35)' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.6)' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
  '& .MuiOutlinedInput-input': { py: 1.5, px: 2 },
  mb: 3.5,
};

export default function ContactSection() {
  return (
    <Box
      id="contacto"
      sx={{
        position: 'relative',
        py: { xs: 10, md: 18 },
        px: { xs: 3, sm: 6, md: 10 },
        color: '#fff',
        backgroundImage: 'url(/images/bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          top: { xs: 0, md: 0 },
          height: { xs: 50, md: 100 },
          backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='100,0 0,100 0,0' style='fill:%232e3141%3B' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          zIndex: 3,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          opacity: 0.8,
          backgroundColor: '#2e3141',
          zIndex: 1,
        },
        '& > *': { position: 'relative', zIndex: 2 },
      }}
    >
      <Box sx={{ maxWidth: '60em', mx: 'auto' }}>
        {/* Título */}
        <Typography
          variant="h6"
          sx={{
            letterSpacing: '0.1em',
            fontWeight: 700,
            textTransform: 'uppercase',
            borderBottom: '1px solid rgba(255,255,255,0.15)',
            pb: 2,
            mb: 4,
            mt: 14,
          }}
        >
          Contáctanos
        </Typography>

        {/* Intro */}
        <Typography
          className={raleway.className}
          sx={{
            mt: 1, mb: 4, color: 'white',
            fontFamily: raleway.style.fontFamily,
            fontWeight: 300, fontSize: '1rem', lineHeight: 1.7,
            maxWidth: { md: '60em' },
          }}
        >
          ¿Te interesa colaborar o saber más sobre nuestro trabajo con lenguas y comunidades indígenas?
          Escríbenos. Estamos siempre abiertos al diálogo y a nuevas alianzas para ampliar el impacto de Voces.
        </Typography>

        {/* Contenedor "inner" con ancho fijo/responsivo y centrado */}
        <Box
          className="inner" // Mantener className para posible referencia o debug
          sx={{
            position: 'relative',
            zIndex: 1, // Por encima de las diagonales
            //width: '70em', // Ancho fijo deseado (880px si 1em = 16px)
            maxWidth: '60em', // Se adapta a pantallas más pequeñas
            mx: 'auto', // Centra horizontalmente
            // Añade padding horizontal en pantallas pequeñas para que el contenido no se pegue a los bordes
            px: { xs: 3, sm: 4, md: 0 }, // sx=2 (16px), sm=3 (24px)
            py: { xs: 3, md: 0 }, // Añade padding vertical al inner si es necesario para separar de las diagonales en móviles
            display: 'grid',
            // Orden de las columnas: en md, imagen a la derecha; en xs, apiladas (texto arriba, imagen abajo)
            gridTemplateColumns: { xs: '1fr', md: '50% 1fr' },
            alignItems: 'start', // Alinea verticalmente los items en el centro
            //columnGap: { xs: 4, md: 6 }, // Espacio entre columnas
            rowGap: 6, // Espacio entre filas (cuando se apilan en xs)
            // `padding: 3em 0 1em 0;` del CSS global
            // Ya cubierto por py de la Box principal y px/py de esta inner Box
            // `text-align: right;` del CSS global. Esto se debe aplicar a las columnas individuales
          }}
        >
          {/* Columna de la Form (se moverá a la derecha en md, arriba en xs por el orden) */}
          {/* Usamos un Box para envolver la imagen y darle los estilos de círculo y tamaño */}
          <Box
            sx={{
              justifySelf: { xs: 'center', md: 'center' }, // Centra en xs, alinea a la derecha en md
              order: { xs: 1, md: 1 }, // Cambia el orden: imagen 2da en xs, 1ra en md
              //borderRadius: '50%',
              overflow: 'hidden',
              // `margin: 0 0 2em 3em;` del CSS global. Se convierte en un `mr` para dejar espacio al texto
              display: 'inline-block',
              position: 'relative',
              margin: '0 4em 2em 0', 
              // El `padding: 0;` y `border: 0;` ya son manejados por MUI Box por defecto
            }}
          >
            <Box component="form" noValidate autoComplete="off">
              <FormControl variant="outlined" fullWidth>
                <FormLabel sx={labelSx}>Nombre</FormLabel>
                <OutlinedInput sx={inputSx} />
              </FormControl>

              <FormControl variant="outlined" fullWidth>
                <FormLabel sx={labelSx}>Correo electrónico</FormLabel>
                <OutlinedInput type="email" sx={inputSx} />
              </FormControl>

              <FormControl variant="outlined" fullWidth>
                <FormLabel sx={labelSx}>Mensaje</FormLabel>
                <OutlinedInput multiline minRows={4} sx={inputSx} />
              </FormControl>

              <Button
                variant="outlined"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.025)',
                  border: 'solid 2px rgba(115, 119, 125, 0.6) !important',
                  bordewidth: '1px',
                  color: '#fff',
                  borderRadius: '4px',
                  mt: 1,
                  letterSpacing: '0.1em',
                  lineHeight: 3,
                  px: 4,
                  textTransform: 'uppercase',
                  '&:hover': { borderColor: '#fff', background: 'rgba(255,255,255,0.08)' },
                }}
              >
                Enviar mensaje
              </Button>
            </Box>
          </Box>
  
          {/* Columna del Texto */}
          <Box
            sx={{
              width: '100%',
              color: '#fff',
              textAlign: { xs: 'center', md: 'right' }, // Centra en xs, derecha en md
              order: { xs: 2, md: 2 }, // Cambia el orden: texto 1ro en xs, 2do en md
              ml: { xs: 'auto', md: '1' }, // Centra el bloque de título/línea en móviles, quita el centrado en desktop
              mr: { xs: 'auto', md: '3' }, // Centra el bloque de título/línea en móviles, quita el centrado en desktop
              mb: 3, // AJUSTE FINAL: Margen inferior para separar del párrafo
            }}
          >
            <Stack spacing={2.5}>
              <Stack direction="row" spacing={2} alignItems="start">
                <Avatar
                  sx={{
                    width: 35, height: 35,
                    bgcolor: 'rgba(255, 255, 255, 0)',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <HomeRoundedIcon />
                </Avatar>
                <Box className={raleway.className} sx={{height:'100%', fontFamily: 'raleway.style.fontFamily', textAlign:'left', fontSize: '0.8em', lineHeight: 1.5}}>
                  <Typography sx={{ fontWeight: '200 !important' }}>
                    Proyecto Voces
                  </Typography>
                  <Typography sx={{ fontWeight: '200 !important' }}>
                    Centro Nacional de Inteligencia Artificial (CENIA)
                  </Typography>
                  <Typography sx={{ fontWeight: '200 !important' }}>
                    Estudios Aplicados de Antropología UC (EEAA_UC)
                  </Typography>
                  <Typography sx={{ fontWeight: '200 !important' }}>
                    Santiago, Chile
                  </Typography>
                </Box>
              </Stack>

              {/* puedes añadir más bloques con otros íconos si deseas */}
            </Stack>

          </Box>
            
        </Box>
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            py: 2,
            mt: 8,
            textAlign: 'left',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.9rem',
            alignItems: 'end',
          }}
        >
          <Typography variant="body2" sx={{ display: 'inline', mr: 1 }}>
            © 2025 Voces. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" sx={{ display: 'inline', mx: 1 }}>
            |
          </Typography>
          <Typography variant="body2" sx={{ display: 'inline' }}>
            <Link
              href="https://cenia.cl/"
              underline="hover"
              sx={{ color: 'rgba(255,255,255,0.6)' }}
              target="_blank"
              rel="noopener"
            >
              CENIA
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
