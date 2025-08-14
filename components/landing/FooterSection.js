'use client';

import React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function FooterSection() {
  const theme = useTheme();
  const MotionBox = motion(Box);

  return (
    <Box
      component="footer"
      id="footer-section"
      sx={{
        backgroundImage: 'url("/imagenes/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        py: { xs: 6, md: 8 }, // padding reducido
        boxSizing: 'border-box',
      }}
    >
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        mb={4} // margen inferior
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'var(--color-primary)',
          }}
        >
          Conversemos
        </Typography>
      </MotionBox>

      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Formulario */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          flex={1}
        >
          <Box
            sx={{
              bg: '#fff',
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 'bold',
                color: 'var(--color-secondary)',
              }}
            >
              Envíanos un mensaje
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Mensaje"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: 4,
                  textTransform: 'none',
                  bg: theme.palette.primary.main,
                }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </MotionBox>

        {/* Contacto directo */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          flex={1}
        >
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 'bold', color: 'var(--color-secondary)' }}
          >
            Contáctanos Directamente
          </Typography>
          {[
            {
              icon: <EmailIcon />,
              text: (
                <Link href="mailto:softic.ec@gmail.com">
                  softic.ec@gmail.com
                </Link>
              ),
            },
            { icon: <PhoneIcon />, text: '+593 999 999 999' },
            { icon: <LocationOnIcon />, text: '170501 Quito, Ecuador' },
          ].map((item, i) => (
            <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {React.cloneElement(item.icon, {
                sx: { color: theme.palette.primary.main, mr: 1 },
              })}
              <Typography variant="body1" color="text.secondary">
                {item.text}
              </Typography>
            </Box>
          ))}
        </MotionBox>
      </Box>

      {/* Derechos */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 6,
          color: 'var(--color-secondary)',
          fontSize: '0.9rem',
        }}
      >
        © {new Date().getFullYear()} SofticEC. Todos los derechos reservados.
      </Box>
    </Box>
  );
}
