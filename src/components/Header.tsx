'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Container, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

const navItems = [
  { label: 'Herramientas', href: '#tools' },
  { label: 'Contacto', href: '#contacto' }, // Added Contacto button
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll handler with offset
  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const yOffset = href === '#contacto' ? 150 : -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="header"
      id="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 8,
        bgcolor: solid ? 'rgba(53,56,73,0.95)' : 'transparent',
        transition: 'background-color 0.2s ease-in-out',
        px: { xs: '1em', sm: '3em' }, // Increased horizontal padding
        height: { xs: '3.5em', sm: '3.5em' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ m: 0, p: 0 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Spread logo and nav
            width: '100%',
            opacity: solid ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {/* Logo on left */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
            <Image
              src="/images/logo.png"
              alt="VOCES"
              width={60}
              height={30}
              style={{
                verticalAlign: 'middle',
                filter: 'invert(1) brightness(2)',
                flexShrink: 0,
              }}
              priority
            />
          </Link>
          {/* Navbar - Desktop on right */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.label}
                className={raleway.className}
                component="a"
                href={item.href}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                sx={{
                  color: '#fff',
                  fontWeight: 500,
                  fontSize: '0.75em',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  '&:hover': { color: '#b3b6c7' },
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
          {/* Hamburger - Mobile */}
          <IconButton
            sx={{ display: { xs: 'flex', sm: 'none' }, color: '#fff' }}
            onClick={() => setDrawerOpen(true)}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>
      {/* Drawer for mobile nav */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: '#353849',
            color: '#fff',
            width: 220,
            pt: 2,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItemButton key={item.label} onClick={() => handleNavClick(item.href)}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  className: raleway.className,
                  sx: {
                    fontWeight: 500,
                    fontSize: '1em',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
