'use client';

import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import { keyframes } from '@emotion/react';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

// animation that move the backgroundd 
const moveBackground = keyframes`
  from {
    background-position: 0px center;
  }
  to {
    background-position: 1000px center;
  }
`;

export default function Hero() {
  return (
    <Box
      id="banner"
      sx={{
        color: '#fff',
        textAlign: 'left',
        pt: { xs: '5em', md: '10em', lg: '10em' },
        pb: { xs: '4.25em', md: '4.75em', lg: '10em' },
        backgroundColor: '#2e3141',
        backgroundImage: `linear-gradient(to top, rgba(46,49,65,0.5), rgba(46,49,65,0)), url("/images/bg.png")`,
        backgroundSize: 'auto, cover',
        backgroundPosition: '0px center',
        backgroundRepeat: 'repeat-x',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.1)', 
          zIndex: 0,
        },
        '& > *': {
          position: 'relative',
          zIndex: 0,
        },
        marginLeft: 0,
        animation: `${moveBackground} 15s linear infinite`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Box
          className="inner"
          sx={{
            paddingLeft: { xs: 0, md: '100px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Box
            className="logo"
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'left' },
              pb: 1,
              width: '100%',
            }}
          >
            <Image
              src="/images/logo.png"
              alt="VOCES"
              width={220}
              height={80}
              style={{
                height: 'auto',
                filter: 'invert(1) brightness(2)',
                maxWidth: '100%',
              }}
              priority
            />
          </Box>
          <Typography
            className={raleway.className}
            component="p"
            sx={{
              fontSize: { xs: '1.1em', md: '1em' },
              fontWeight: 700,
              letterSpacing: '0.12em',
              lineHeight: 2,
              textTransform: 'uppercase',
              marginTop: '0.5em',
              width: { xs: '100%', md: 'auto' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            TECNOLOGÍA EN TU PROPIA LENGUA
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
