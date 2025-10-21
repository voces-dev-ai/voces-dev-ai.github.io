'use client';
import Image from 'next/image';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { forwardRef, useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, Button, Drawer, List, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type NavItem = { label: string; href: string };

// Wrapper tipado para MUI `component`
type NextMuiLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & NextLinkProps;
const NextMuiLink = forwardRef<HTMLAnchorElement, NextMuiLinkProps>(function NextMuiLink(props, ref) {
  const { href, ...other } = props;
  return <NextLink ref={ref} href={href} {...other} />;
});

const items: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
];

export default function ResponsiveNav() {
  const [open, setOpen] = useState(false);
  const [elev, setElev] = useState(0);

  useEffect(() => {
    const onScroll = () => setElev(window.scrollY > 8 ? 2 : 0);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AppBar color="inherit" elevation={elev} position="fixed"
      sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper', color: '#000' }}>
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo */}
        <NextLink href="/" aria-label="Voces CNIA">
          <Box sx={{ position:'relative', width:{ xs:120, md:160 }, height:50 }}>
            <Image src="/logo_peque.svg" alt="Voces CNIA" fill style={{ objectFit:'contain' }} />
          </Box>
        </NextLink>

        <Box sx={{ flexGrow: 1 }} />

        {/* Desktop menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {items.map((it) => (
            <Button
              key={it.href}
              href={it.href}
              component={NextMuiLink}
              sx={{
                color: '#000',
                fontWeight: 700,
                letterSpacing: 0.3,
                textTransform: 'none',
                position: 'relative',
                px: 0.5,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0, bottom: -6,
                  width: 0, height: 2,
                  bgcolor: 'primary.main',
                  transition: 'width .2s',
                },
                '&:hover::after': { width: '100%' },
              }}
            >
              {it.label.toUpperCase()}
            </Button>
          ))}
        </Box>

        {/* Mobile burger */}
        <IconButton sx={{ display: { xs: 'inline-flex', md: 'none' } }} onClick={() => setOpen(true)} aria-label="menú">
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Drawer móvil */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <List sx={{ py: 0 }}>
            {items.map((it) => (
              <ListItemButton
                key={it.href}
                component={NextMuiLink}
                href={it.href}
                onClick={() => setOpen(false)}
                sx={{ borderRadius: 2, mb: 1, fontWeight: 700 }}
              >
                {it.label}
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            variant="contained"
            href="#contacto"
            component={NextMuiLink}
            onClick={() => setOpen(false)}
            sx={{ mt: 1, borderRadius: 2, textTransform: 'none', fontWeight: 700 }}
          >
            Contáctanos
          </Button>
        </Box>
      </Drawer>

      {/* Smooth scroll global */}
      <style>{`html{scroll-behavior:smooth}`}</style>
    </AppBar>
  );
}
