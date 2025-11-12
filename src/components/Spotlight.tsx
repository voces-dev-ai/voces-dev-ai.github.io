'use client'; // Necesario si usas Next.js App Router y quieres funcionalidad de cliente o interactividad

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
    // La Box principal con fondo, padding y diagonales
    <Box
      id="one" // Mantener el ID para posibles referencias externas, aunque los estilos los maneja sx
      sx={{
        position: 'relative',
        bgcolor: '#4c5c96',
        pt: { xs: 0, md: 4 }, // Padding vertical responsivo
        pb: { xs: 0, md: 0 }, // Padding vertical responsivo
        // DIAGONAL SUPERIOR
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
            justifySelf: { xs: 'center', md: 'center' }, // Centra en xs, alinea a la derecha en md
            order: { xs: 2, ms: 2, md: 2 }, // Cambia el orden: imagen 2da en xs, 1ra en md
            //width: { xs: '260px' }, // CAMBIO: Más pequeña en md, quizás un poco más grande en xs si lo deseas
            //height: { xs: '20em', md: '16em' }, // CAMBIO: Altura acorde al nuevo ancho
            //borderRadius: '50%',
            overflow: 'hidden',
            // El `padding: 0;` y `border: 0;` ya son manejados por MUI Box por defecto
            display: 'inline-block',
            position: 'relative',
            borderRadius: '100%',
            width: '16em', // CAMBIO: Más pequeña en md, quizás un poco más grande en xs si lo deseas
            margin: '0 0 2em 2em',  
          }}
        >
          <Image
            src="/images/pic01.png"
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
            textAlign: { xs: 'center', ms: 'right', md: 'left' }, // Centra en xs, derecha en md
            order: { xs:1, ms: 1, md: 1 }, // Cambia el orden: texto 1ro en xs, 2do en md
            ml: { xs: 'auto', md: '1' }, // Centra el bloque de título/línea en móviles, quita el centrado en desktop
            mr: { xs: 'auto', md: '3' }, // Centra el bloque de título/línea en móviles, quita el centrado en desktop
            mb: 3, // AJUSTE FINAL: Margen inferior para separar del párrafo

          }}
        >
          <Typography
            variant="h4" // Usa una variante de tipografía de MUI
            className={raleway.className}
            sx={{
              fontFamily: 'raleway.style.fontFamily',
              textAlign: { xs: 'right', ms: 'right', md: 'left' },
              fontSize: { xs: '1.2em', md: '1.4em' }, // CAMBIO: Ajusta el tamaño de la fuente para el título
              textTransform: 'uppercase',
              fontWeight: 700,
              letterSpacing: '2.08px',
              lineHeight: '34.32px', // CAMBIO: Un poco más compacto si es necesario
            }}
          >
            TECNOLOGÍA CO-CREADA CON COMUNIDADES prueba
          </Typography>

          {/* Línea tenue bajo el título */}
          <Box sx={{ my: 2, height: 2, bgcolor: 'rgba(255,255,255,0.125)' }} />

          <Typography   className={raleway.className} sx={{textAlign: { xs: 'right', ms: 'right', md: 'left' }, color: 'white', fontFamily: 'raleway.style.fontFamily', fontWeight:150, fontSize: '1em', lineHeight: 1.5,// Esto ya está bastante bien para la altura del box de texto
              // fontSize: { xs: '1rem', md: '1.125rem' } // Si quieres el párrafo también más pequeño, puedes usar esto
            }}>
            En Voces, desarrollamos herramientas digitales junto a comunidades
            indígenas de América Latina, el Caribe y las islas del Pacífico.
            Nos enfocamos en el desarrollo tecnológico como vía para fortalecer
            la lengua, la identidad y la autonomía cultural de los pueblos
            originarios.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}