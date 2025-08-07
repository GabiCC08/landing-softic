import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Link,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Inicio', href: '#hero-section' },
  { label: 'Nosotros', href: '#about-section' },
  { label: 'Servicios', href: '#services-section' },
  { label: 'FAQ', href: '#faq-section' },
  { label: 'Contacto', href: '#footer-section' },
];

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const commonLinkStyles = {
    textDecoration: 'none',
    color: '#102346',
    fontWeight: 600,
    fontSize: '1.2rem',
    fontFamily: '"Poppins", sans-serif',
    transition: 'all 0.3s',
    '&:hover': {
      color: '#EB602F',
      transform: 'translateX(4px)',
    },
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
        px: 4,
        bgcolor: 'rgba(255,255,255,0.95)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1100,
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/imagenes/1x/logo-1r.png"
        alt="Logo SoftiC"
        sx={{ height: '100px' }}
      />

      {/* Enlaces de navegación */}
      {!isMobile && (
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} sx={commonLinkStyles}>
              {item.label}
            </Link>
          ))}
        </Box>
      )}

      {/* Botón de menú móvil */}
      {isMobile && (
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      )}

      {/* Drawer móvil */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            height: '100%',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ alignSelf: 'flex-end' }}>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              sx={{ ...commonLinkStyles, mb: 2 }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
