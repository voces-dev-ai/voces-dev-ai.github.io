'use client';

import {
  Box, Typography, Grid, Button,
  FormControl, FormLabel, OutlinedInput, Stack, Avatar, Link, Alert
} from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Raleway } from 'next/font/google';
import { useForm, ValidationError } from '@formspree/react';

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
  const [state, handleSubmit] = useForm("mnnleyyq");

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
        {/* Tittle */}
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
            gridTemplateColumns: { xs: '1fr', md: '50% 1fr' },
            alignItems: 'start',
            rowGap: 6,
          }}
        >
          {/* Form's column */}
          <Box
            sx={{
              justifySelf: { xs: 'center', md: 'center' },
              order: { xs: 1, md: 1 },
              overflow: 'hidden',
              display: 'inline-block',
              position: 'relative',
              margin: '0 4em 2em 0',
            }}
          >
            {state.succeeded ? (
              <Alert
                severity="success"
                sx={{
                  bgcolor: 'rgba(76, 175, 80, 0.2)',
                  color: '#fff',
                  border: '1px solid rgba(76, 175, 80, 0.5)',
                  '& .MuiAlert-icon': { color: '#4caf50' }
                }}
              >
                ¡Gracias por contactarnos! Te responderemos pronto.
              </Alert>
            ) : (
              <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                <FormControl variant="outlined" fullWidth>
                  <FormLabel htmlFor="name" sx={labelSx}>Nombre</FormLabel>
                  <OutlinedInput
                    id="name"
                    name="name"
                    sx={inputSx}
                    required
                  />
                  <ValidationError
                    prefix="Nombre"
                    field="name"
                    errors={state.errors}
                    style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '-12px', marginBottom: '8px' }}
                  />
                </FormControl>

                <FormControl variant="outlined" fullWidth>
                  <FormLabel htmlFor="email" sx={labelSx}>Correo electrónico</FormLabel>
                  <OutlinedInput
                    id="email"
                    type="email"
                    name="email"
                    sx={inputSx}
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '-12px', marginBottom: '8px' }}
                  />
                </FormControl>

                <FormControl variant="outlined" fullWidth>
                  <FormLabel htmlFor="message" sx={labelSx}>Mensaje</FormLabel>
                  <OutlinedInput
                    id="message"
                    name="message"
                    multiline
                    minRows={4}
                    sx={inputSx}
                    required
                  />
                  <ValidationError
                    prefix="Mensaje"
                    field="message"
                    errors={state.errors}
                    style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '-12px', marginBottom: '8px' }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  disabled={state.submitting}
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
                    '&:disabled': {
                      opacity: 0.6,
                      cursor: 'not-allowed'
                    },
                  }}
                >
                  {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </Box>
            )}
          </Box>

          {/* Text's Column */}
          <Box
            sx={{
              width: '100%',
              color: '#fff',
              textAlign: { xs: 'center', md: 'right' },
              order: { xs: 2, md: 2 },
              ml: { xs: 'auto', md: '1' },
              mr: { xs: 'auto', md: '3' },
              mb: 3,
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
                <Box className={raleway.className} sx={{ height: '100%', fontFamily: 'raleway.style.fontFamily', textAlign: 'left', fontSize: '0.8em', lineHeight: 1.5 }}>
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