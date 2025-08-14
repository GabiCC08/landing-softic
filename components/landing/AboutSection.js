'use client';

import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { EmojiObjects, Group, StarOutline } from '@mui/icons-material';

const cards = [
  {
    Icon: EmojiObjects,
    title: 'Soluciones Personalizadas y Escalables',
    text: 'Tecnología flexible que crece contigo y optimiza tus procesos sin complicaciones.',
  },
  {
    Icon: Group,
    title: 'Expertos Multidisciplinarios',
    text: 'Un equipo profesional que integra desarrollo, integración y soporte para soluciones completas.',
  },
  {
    Icon: StarOutline,
    title: 'Acompañamiento Cercano y Continuo',
    text: 'Soporte y asesoría constante para que tu negocio evolucione con el ritmo del mercado.',
  },
];

export default function AboutSection() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const motionProps = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  return (
    <Box
      component="section"
      id="about-section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #D62F1F, #F47621, #FDB678)',
      }}
    >
      <Box sx={{ position: 'absolute', top: 0, width: '100%', zIndex: -1 }}>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        >
          <path
            fill="var(--color-bg-default)"
            d="M0,224L40,197.3C80,171,160,117,240,128C320,139,400,213,480,250.7C560,288,640,288,720,266.7C800,245,880,203,960,170.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </Box>

      <Box
        sx={{
          px: { xs: 4, md: 20 }, // menos padding en xs
          py: { xs: 6, md: 10 },
          borderRadius: {
            xs: '0 0 30% 30% / 0 0 8% 8%',
            md: '0 0 50% 50% / 0 0 10% 10%',
          },
          backgroundColor: 'var(--color-bg-default)',
        }}
      >
        <motion.div {...motionProps}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              mb: 4,
              color: '#fff',
            }}
          >
            Conoce Sobre Nosotros
          </Typography>
        </motion.div>

        <motion.div {...motionProps} transition={{ duration: 0.6, delay: 0.2 }}>
          <Typography
            variant="body1"
            sx={{
              maxWidth: 800,
              margin: '0 auto',
              textAlign: 'center',
              mb: 6,
            }}
          >
            Somos una microempresa especializada en soluciones tecnológicas a
            medida que impulsan la eficiencia y el crecimiento de tu negocio.
            Ofrecemos proyectos ágiles, sin interrupciones, adaptados a tus
            necesidades reales.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {cards.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              {...motionProps}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <Box
                sx={{
                  textAlign: 'center',
                  p: { xs: 2, md: 4 }, // menos padding en móvil
                  borderRadius: 4,
                  backgroundColor: '#fff',
                  boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                  height: '100%',
                }}
              >
                <Icon
                  sx={{
                    color: 'var(--color-primary)',
                    fontSize: { xs: '2rem', md: '3rem' }, // icono más pequeño en móvil
                    mb: 2,
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    fontFamily: 'var(--font-family-base)',
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-family-base)',
                  }}
                >
                  {text}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
