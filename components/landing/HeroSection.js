import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SpeedIcon from '@mui/icons-material/Speed';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: (
      <SearchIcon sx={{ color: 'var(--color-primary)', fontSize: '2rem' }} />
    ),
    title: 'Diagnóstico sin compromiso',
    description:
      'Detectamos oportunidades reales para digitalizar y escalar tu negocio.',
  },
  {
    icon: (
      <FilterListIcon
        sx={{ color: 'var(--color-primary)', fontSize: '2rem' }}
      />
    ),
    title: 'Implementación rápida',
    description:
      'Creamos soluciones a medida, operativas en semanas, sin frenar tu negocio.',
  },
  {
    icon: (
      <SpeedIcon sx={{ color: 'var(--color-primary)', fontSize: '2rem' }} />
    ),
    title: 'Acompañamiento personalizado',
    description:
      'Te atendemos personas reales, siempre que lo necesites, sin complicaciones.',
  },
];

const motionProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};

function HeroVideo() {
  return (
    <Box
      component="iframe"
      src="https://www.youtube.com/embed/u25nYLn3toE?autoplay=1&mute=1&playsinline=1"
      title="Video de presentación"
      allow="autoplay; encrypted-media"
      allowFullScreen
      sx={{
        width: '100%',
        height: '300px',
        border: 0,
        borderRadius: '16px',
        boxShadow: 3,
      }}
    />
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <motion.div {...motionProps}>
      <Box
        sx={{
          textAlign: 'center',
          p: 3,
          borderRadius: 2,
          boxShadow: 1,
          backgroundColor: '#fff',
          '&:hover': {
            boxShadow: 4,
            transform: 'translateY(-5px)',
          },
          transition: 'all 0.3s',
          height: '100%',
        }}
      >
        <Box>{icon}</Box>
        <Typography
          mb={2}
          variant="body1"
          fontWeight={600}
          color="var(--color-secondary)"
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer-section');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="section"
      id="hero-section"
      sx={{
        backgroundImage: 'url("/imagenes/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
        pt: 20,
        px: 5,
        pb: 5,
        boxSizing: 'border-box',
      }}
    >
      <Box
        maxWidth="lg"
        mx="auto"
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={5}
        alignItems="center"
      >
        <Box flex={1}>
          <motion.div {...motionProps}>
            <Typography variant="h4" fontWeight={800} gutterBottom>
              <Box component="span" color="var(--color-primary)">
                Tecnología que entiende{' '}
              </Box>
              <Box component="span" color="var(--color-secondary)">
                al emprendedor ecuatoriano
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="body1" mb={3}>
              Te guiamos paso a paso para digitalizar tu negocio sin
              complicaciones ni grandes inversiones.
            </Typography>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="contained"
              onClick={scrollToFooter}
              startIcon={<TravelExploreIcon />}
              sx={{
                textTransform: 'none',
                borderRadius: '20px',
                px: 4,
                py: 1.75,
                background: '#EB602F',
                color: '#fff',
                fontWeight: 600,
                '&:hover': {
                  boxShadow: 4,
                  transform: 'scale(1.05)',
                },
              }}
            >
              Agendar Consulta
            </Button>
          </motion.div>
        </Box>

        <Box flex={1}>
          <HeroVideo />
        </Box>
      </Box>

      <motion.div {...motionProps} transition={{ duration: 0.6, delay: 0.4 }}>
        <Typography
          variant="h5"
          textAlign="center"
          fontWeight="bold"
          mb={4}
          mt={6}
        >
          ¿Por qué elegirnos?
        </Typography>
      </motion.div>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }}
        gap={4}
      >
        {FEATURES.map((feature, i) => (
          <FeatureItem key={i} {...feature} />
        ))}
      </Box>
    </Box>
  );
}
