import React, { useState, useEffect } from 'react';
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
  const [isTop, setIsTop] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Escucha del scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY <= 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleScroll = (id) => {
    const yOffset = -62;
    const element = document.getElementById(id);
    if (element) {
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
        bgcolor: isTop ? '#ffffff' : 'rgba(255,255,255,0.9)',
        boxShadow: isTop ? 'none' : '0 4px 10px rgba(0,0,0,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1100,
        transition: 'background-color 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/imagenes/1x/logo-1r.png"
        alt="Logo SoftiC"
        sx={{
          height: '100px',
          filter:
            '  drop-shadow(0 0 2px white) drop-shadow(0 0 4px white) drop-shadow(0 0 6px white) drop-shadow(0 0 8px white)',
        }}
      />

      {!isMobile && (
        <Box sx={{ display: 'flex', gap: 4 }}>
          {navItems.map((item) => (
            <Box
              key={item.label}
              onClick={() => handleScroll(item.href.replace('#', ''))}
              sx={{
                cursor: 'pointer',
                ...commonLinkStyles,
                filter:
                  'drop-shadow(0 0 2px white) drop-shadow(0 0 4px white) drop-shadow(0 0 6px white)',
              }}
            >
              {item.label}
            </Box>
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
            <Box
              key={item.label}
              onClick={() => {
                handleScroll(item.href.replace('#', ''));
                setOpen(false);
              }}
              sx={{ cursor: 'pointer', ...commonLinkStyles, mb: 2 }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
