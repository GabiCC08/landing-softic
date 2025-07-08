import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SearchIcon from '@mui/icons-material/Search';
import SpeedIcon from '@mui/icons-material/Speed';
import FilterListIcon from '@mui/icons-material/FilterList';

const translations = {
  es: {
    hero: {
      title1: [
        { text: 'Impulsamos tu negocio a través de ', color: 'primary' },
        { text: 'soluciones tecnológicas ', color: 'secondary' },
      ],
      subtitle1: 'hechas a la medida, con enfoque en eficiencia y resultados.',
      button: 'Agendar Consulta',
      featuresTitle: '¿Por qué elegirnos?',
      features: [
        {
          icon: (
            <SearchIcon
              sx={{ color: 'var(--color-primary)', fontSize: '2rem' }}
            />
          ),
          title: 'Diagnóstico sin compromiso',
          description:
            'Analizamos tu situación actual y te mostramos el camino más corto para automatizar y escalar.',
        },
        {
          icon: (
            <FilterListIcon
              sx={{ color: 'var(--color-primary)', fontSize: '2rem' }}
            />
          ),
          title: 'Implementación rápida',
          description:
            'En pocas semanas puedes tener una solución operativa, sin detener tu negocio ni hacer grandes inversiones.',
        },
        {
          icon: (
            <SpeedIcon
              sx={{ color: 'var(--color-primary)', fontSize: '2rem' }}
            />
          ),
          title: 'Soporte humano, siempre',
          description:
            'Sabemos que la tecnología no lo es todo. Por eso estamos disponibles cuando más lo necesitas.',
        },
      ],
    },
  },
};

function HeroVideo() {
  const theme = useTheme();
  const isVerySmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box
      sx={{
        width: '100%',
        aspectRatio: isVerySmall ? '4 / 3' : '16 / 9',
        mt: 6,
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0px 8px 30px rgba(0,0,0,0.1)',
      }}
    >
      <Box
        component="video"
        id="hero-video-section"
        src="/muestra.mp4"
        poster="/muestra.png"
        controls
        playsInline
        aria-label="Video de presentación"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />
    </Box>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        p: 3,
        backgroundColor: 'var(--color-bg-default)',
        borderRadius: '12px',
        boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0px 8px 30px rgba(0,0,0,0.15)',
        },
      }}
    >
      <Box sx={{ mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'var(--color-text-secondary)' }}>
        {description}
      </Typography>
    </Box>
  );
}

export default function HeroSection({ language = 'es' }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const t = translations[language]?.hero || translations.es.hero;

  const handleAgendarConsulta = () => {
    const contactSection = document.getElementById('footer-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderParts = (titleParts) =>
    titleParts.map((part, idx) => {
      const colorStyle =
        part.color === 'primary'
          ? 'var(--color-primary)'
          : part.color === 'secondary'
          ? 'var(--color-secondary)'
          : 'var(--color-text-primary)';

      return (
        <span key={idx} style={{ color: colorStyle, fontWeight: 'bold' }}>
          {part.text}
        </span>
      );
    });

  const sharedButtonStyle = {
    textTransform: 'none',
    borderRadius: '30px',
    fontWeight: 600,
    px: 5,
    py: 1.5,
    fontSize: { xs: '1rem', sm: '1.1rem' },
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 15px rgba(0,0,0,0.2)',
    },
  };

  const heroPrimaryButtonStyle = {
    ...sharedButtonStyle,
    background:
      'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
    color: 'var(--color-bg-default)',
  };

  return (
    <Box
      id="hero-section"
      component="section"
      sx={{
        backgroundImage: 'url("/imagenes/hero.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '1200px', paddingTop: '150px' }}>
        {/* Fila principal: texto + video */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          {/* Texto */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                component="h1"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  mb: 3,
                  lineHeight: 1.2,
                  color: 'var(--color-text-primary)',
                }}
              >
                {renderParts(t.title1)}
              </Typography>

              <Typography variant="body1" sx={{ mb: 4 }}>
                {t.subtitle1}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexDirection: isMobile ? 'column' : 'row',
                }}
              >
                <Button
                  onClick={handleAgendarConsulta}
                  sx={heroPrimaryButtonStyle}
                  startIcon={<TravelExploreIcon />}
                >
                  {t.button}
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Video */}
          <Box sx={{ flex: 1 }}>
            <HeroVideo />
          </Box>
        </Box>

        {/* Sección de características */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 4,
              color: 'var(--color-text-primary)',
            }}
          >
            {t.featuresTitle}
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
              gap: 4,
            }}
          >
            {t.features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
