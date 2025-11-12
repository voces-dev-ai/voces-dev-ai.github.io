'use client';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Spotlight() {
  const tools = [
    {
      title: 'Traducción Automática',
      description:
        'Desarrollamos motores de traducción que permiten traducir desde y hacia lenguas indígenas, con respeto por sus estructuras y expresiones culturales.',
      image: '/images/pic04.png',
    },
    {
      title: 'Soporte para Voz',
      description:
        'Desarrollamos herramientas que permiten transcribir y generar voz en lenguas indígenas, considerando la importancia de la oralidad en comunidades.',
      image: '/images/pic05.jpg',
    },
    {
      title: 'Acceso Comunitario',
      description:
        'Impulsamos el acceso a herramientas tecnológicas en comunidades, con interfaces accesibles y contenido culturalmente relevante.',
      image: '/images/pic06.jpg',
    },
    {
      title: 'Lectores Digitales',
      description:
        'Creamos lectores digitales en lenguas originarias, incluyendo historias, textos escolares y relatos orales digitalizados.',
      image: '/images/pic07.jpg',
    },
    {
      title: 'Talleres y capacitaciones',
      description:
        'Realizamos talleres en comunidades, donde enseñamos el uso de herramientas tecnológicas con enfoque intercultural.',
      image: '/images/pic08.jpg',
    },
    {
      title: 'Archivo oral y escrito',
      description:
        'Registramos relatos, cantos, testimonios y textos en lengua originaria, creando archivos digitales accesibles y protegidos por las propias comunidades.',
      image: '/images/pic09.jpg',
    },
  ];

  return (
    <Box
      id="one"
      sx={{
        position: 'relative',
        bgcolor: '#2e3141',
        zIndex: 1,
        py: { xs: 8, md: 8 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          top: { xs: -50, md: -99 },
          height: { xs: 50, md: 100 },
          backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='100,100 0,100 0,0' style='fill:%232e3141%3B' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          zIndex: 3,
        },
      }}
    >
      <Box
        id="tools"
        sx={{
          bgcolor: '#2e3141',
          color: '#fff',
          pt: { xs: 2, md: 2 },
          mb: { xs: 2, md: 6 },
          width: '100%',
          maxWidth: '60em',
          mx: 'auto',
          zIndex: 1,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            pb: 4,
            textAlign: 'left',
            fontSize: { xs: '1.2em', md: '1.4em' },
          }}
        >
          Herramientas para revitalizar lenguas
        </Typography>

        <Typography
          align="center"
          sx={{
            fontWeight: 200,
            fontSize: '1.25rem',
            textAlign: 'left',
            mt: 2,
            mx: 'auto',
            opacity: 0.9,
            lineHeight: 1.75,
          }}
        >
          </Typography>

        <Typography   className={raleway.className} sx={{color: 'white', fontFamily: 'raleway.style.fontFamily', fontWeight:150, fontSize: '1em', lineHeight: 1.5,// Esto ya está bastante bien para la altura del box de texto
        }}>
          Nuestro trabajo se basa en el respeto profundo por las comunidades, con soluciones
          desarrolladas junto a hablantes, autoridades locales y autoridades ancestrales.
          Estas son algunas de nuestras líneas de acción:
        </Typography>

        {/* GRID FLUIDO */}
        <Box
          sx={{
            mt: 6,
            display: 'grid',
            gap: 6,
            justifyContent: 'center',
            justifyItems: 'center',
            gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(320px, 1fr))',
            },
            maxWidth: '60em',
            mx: 'auto',
          }}
        >
          {tools.map((tool, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: '#353849',
                boxShadow: 'none',
                overflow: 'hidden',
                height: '100%',
                maxWidth: {ms:200, md:500},
                borderRadius: '3pt',
                mx: 'auto',
              }}

            >
              <Image
                src={tool.image}
                alt={tool.title}
                width={0}
                height={0}
                style={{
                  borderRadius: 0,
                  width: '100%',
                  height: '16em',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <CardContent>
                <Typography
                  className={raleway.className}
                  maxWidth={500}
                  variant="subtitle1"
                  fontWeight={700}
                  textTransform="uppercase"
                  mb={1}
                  color="#fff"
                  letterSpacing="0.05em"
                  fontSize="1em"
                  marginX={3}
                  borderBottom="1px solid rgba(255, 255, 255, 0.15)"
                  marginY={2}
                  pb={2}
                  fontFamily= 'raleway.style.fontFamily'
                >
                  {tool.title}
                </Typography>
                <Typography
                  className={raleway.className}
                  sx={{
                    fontSize: '1em',
                    fontFamily: 'raleway.style.fontFamily',
                    lineHeight: 1.75,
                    fontWeight: 200,
                    mt: 2,
                    mx: 2,
                    pb: 3,
                    color: '#fff',
                  }}
                >
                  {tool.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
