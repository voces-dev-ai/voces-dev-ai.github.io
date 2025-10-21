'use client';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, IconButton, Box, Button, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/contacto', label: 'Contacto' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar>
          <Box sx={{ display:'flex', alignItems:'center', gap:1, flexGrow:1 }}>
            <img src="/logo_peque.svg" width={150} alt="logo" />
          </Box>
          <Box sx={{ display: { xs:'none', md:'flex' }, gap:1 }}>
            {links.map(l => (
              <Button key={l.href} component={Link} href={l.href}>{l.label}</Button>
            ))}
          </Box>
          <IconButton sx={{ display:{ xs:'inline-flex', md:'none' }}} onClick={() => setOpen(true)}><MenuIcon/></IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width:260 }} role="presentation" onClick={() => setOpen(false)}>
          <List>
            {links.map(l => (
              <ListItemButton key={l.href} component={Link} href={l.href}>
                <ListItemText primary={l.label}/>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
