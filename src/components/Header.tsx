'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Box
      component="header"
      id="header"
      sx={{
        position: 'fixed',
        top: 0,
        mx: 'auto',
        left: 0,
        width: '100%',
        zIndex: 8,
        height: '3.5em',
        lineHeight: '3.5em',
        bgcolor: solid ? 'rgba(53,56,73,0.95)' : 'transparent',
        transition: 'background-color 0.2s ease-in-out',
        px: '1.25em',
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ m: 0, p: 0 }}>
        <Typography
          className={raleway.className}
          component="h1"
          sx={{
            mt:2,
            mb:2,
            fontSize: '1em',
            textTransform: 'uppercase',
            fontWeight: 700,
            fontFamily: 'raleway.style.fontFamily',
            color: solid ? '#fff' : '#fff',
            opacity: solid ? 1 : 0,
            transform: solid ? 'translateY(0)' : 'translateY(-100px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          <Link href="/" style={{ border: 0, display: 'inline-flex', alignItems: 'center'}}>
            <Image
              src="/images/logo.png"
              alt="VOCES"
              width={64}
              height={32}
              style={{ verticalAlign: 'middle', marginRight: 10, filter: 'invert(1) brightness(2)',}}
              priority
            />
            Tecnología en tu propia lengua
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
