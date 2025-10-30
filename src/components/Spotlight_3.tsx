'use client'; // Necesario si usas Next.js App Router y quieres funcionalidad de cliente o interactividad

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });
export default function Spotlight() {
  return (
    // La Box principal con fondo, padding y diagonales
    <Box
      id="one" // Mantener el ID para posibles referencias externas, aunque los estilos los maneja sx
      sx={{
        position: 'relative',
        bgcolor: '#3f4e85',
        pt: { xs: 2, md: 6 }, // Padding vertical responsivo
        pb: { xs: 4, md: 10 }, // Padding vertical responsivo
        height: "324 px",
        // DIAGONAL SUPERIOR
        '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            top: { xs: -50, md: -99 },
            height: { xs: 50, md: 100 },
            backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%233f4e85%3B' /%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            zIndex: 3,
        },
        // DIAGONAL INFERIOR
/*         '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          bottom: { xs: -70, md: -90 },
          height: { xs: 120, md: 160 },
          bgcolor: '#4c5c96',
          transform: 'skewY(-5deg)',
          transformOrigin: '100% 0',
          zIndex: 0,
        }, */
      }}
    >
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
          gridTemplateColumns: { xs: '1fr', sm: 'minmax(350px, 70%) 1fr', md: '70% 1fr' },
          alignItems: 'center', // Alinea verticalmente los items en el centro
          //columnGap: { xs: 4, md: 6 }, // Espacio entre columnas
          rowGap: 6, // Espacio entre filas (cuando se apilan en xs)
          // `padding: 3em 0 1em 0;` del CSS global
          // Ya cubierto por py de la Box principal y px/py de esta inner Box
          // `text-align: right;` del CSS global. Esto se debe aplicar a las columnas individuales
        }}
      >
        {/* Columna de la Imagen (se moverá a la derecha en md, arriba en xs por el orden) */}
        {/* Usamos un Box para envolver la imagen y darle los estilos de círculo y tamaño */}
        <Box
          sx={{
            justifySelf: { xs: 'center', md: 'end' }, // Centra en xs, alinea a la derecha en md
            order: { xs: 2, ms: 2, md: 2 }, // Cambia el orden: imagen 2da en xs, 1ra en md
            //borderRadius: '50%',
            overflow: 'hidden',
            // `margin: 0 0 2em 3em;` del CSS global. Se convierte en un `mr` para dejar espacio al texto
            display: 'inline-block',
            position: 'relative',
            borderRadius: '100%',
            width: '16em',
            margin: '0 0 2em 2em', 
            // El `padding: 0;` y `border: 0;` ya son manejados por MUI Box por defecto
          }}
        >
          <Image
            src="/images/pic03.png"
            alt="Co-creación tecnológica"
            width={704} // Ancho intrínseco de la imagen para optimización
            height={704} // Alto intrínseco de la imagen para optimización
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Para que la imagen rellene el círculo
            priority // Carga con alta prioridad
          />
        </Box>

        {/* Columna del Texto */}
        <Box
          sx={{
            width: '100%',
            color: '#fff',
            // `text-align: right;` del CSS global aplicado aquí
            textAlign: { xs: 'center', md: 'right' }, // Centra en xs, derecha en md
            order: { xs: 1, ms:1, md: 1 }, // Cambia el orden: texto 1ro en xs, 2do en md
            ml: { xs: 'auto', md: '1' }, // Centra el bloque de título/línea en móviles, quita el centrado en desktop
            mr: { xs: 'auto', md: '3' }, // Centra el bloque de título/línea en móviles, quita el centrado en desktop
            mb: 3, // AJUSTE FINAL: Margen inferior para separar del párrafo
          }}
        >
          <Typography
            variant="h4" // Usa una variante de tipografía de MUI
            sx={{
              fontSize: { xs: '1.2em', md: '1.4em' }, // CAMBIO: Ajusta el tamaño de la fuente para el título
              textTransform: 'uppercase',
              fontWeight: 700,
              textAlign: 'right',
              letterSpacing: '2.08px',
              lineHeight: '34.32px', // CAMBIO: Un poco más compacto si es necesario
            }}
          >
            RESPETO IDENTIDAD Y FUTURO
          </Typography>

          {/* Línea tenue bajo el título */}
          <Box sx={{ my: 2, height: 2, bgcolor: 'rgba(255,255,255,0.125)' }} />

          <Typography   className={raleway.className} sx={{color: 'white', fontFamily: 'raleway.style.fontFamily', fontWeight:150, fontSize: '1em', lineHeight: 1.5,// Esto ya está bastante bien para la altura del box de texto
              // fontSize: { xs: '1rem', md: '1.125rem' } // Si quieres el párrafo también más pequeño, puedes usar esto
            }}>
              Nos sentimos orgullosos de contribuir al fortalecimiento de la identidad cultural mediante tecnologías diseñadas desde una perspectiva intercultural. En Voces, creamos herramientas para potenciar las posibilidades de cada lengua y comunidad.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}