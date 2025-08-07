'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocalHospital as LocalHospitalIcon,
  Campaign as CampaignIcon,
  Assessment as AssessmentIcon,
  PrecisionManufacturing as PrecisionManufacturingIcon,
} from '@mui/icons-material';

const servicesData = [
  {
    Icon: LocalHospitalIcon,
    title: 'Diseño UI/UX',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    Icon: CampaignIcon,
    title: 'Publicidad Digital',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    Icon: AssessmentIcon,
    title: 'SEO para Clínicas',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    Icon: PrecisionManufacturingIcon,
    title: 'Automatización de Procesos',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const MotionBox = motion(Box);

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services-section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 6 },
        background:
          'linear-gradient(135deg, var(--color-bg-light) 0%, var(--color-bg-default) 100%)',
        zIndex: 1,
      }}
    >
      {/* Título */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        mb={4}
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
          Nuestros Servicios
        </Typography>
      </MotionBox>

      {/* Subtítulo */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        mb={6}
        maxWidth={800}
        mx="auto"
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontSize: '1.1rem',
          }}
        >
          Descubre cómo podemos ayudarte a destacar en el mundo digital y
          conectar con los pacientes ideales para tu especialidad.
        </Typography>
      </MotionBox>

      {/* Lista de servicios */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 3, md: 6 },
        }}
      >
        {servicesData.map(({ Icon, title, description }, idx) => (
          <MotionBox
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            flex="1 1 250px"
            maxWidth={280}
            textAlign="center"
            p={4}
            bgcolor="var(--color-bg-default)"
            borderRadius={4}
            boxShadow="0px 4px 20px rgba(0,0,0,0.04)"
            sx={{
              transition: 'transform 0.3s',
              '&:hover': { transform: 'translateY(-8px)' },
              color: 'var(--color-text-primary)',
              minHeight: 280,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Icon fontSize="large" sx={{ color: 'var(--color-primary)' }} />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 1,
                color: 'var(--color-primary-dark)',
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'var(--color-text-secondary)' }}
            >
              {description}
            </Typography>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
