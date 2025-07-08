'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CampaignIcon from '@mui/icons-material/Campaign';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export default function ServicesSection() {
  const servicesData = [
    {
      icon: (
        <LocalHospitalIcon
          fontSize="large"
          sx={{ color: 'var(--color-primary)' }}
        />
      ),
      title: 'Diseño UI/UX',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: (
        <CampaignIcon fontSize="large" sx={{ color: 'var(--color-primary)' }} />
      ),
      title: 'Publicidad Digital',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      icon: (
        <AssessmentIcon
          fontSize="large"
          sx={{ color: 'var(--color-primary)' }}
        />
      ),
      title: 'SEO para Clínicas',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      icon: (
        <PrecisionManufacturingIcon
          fontSize="large"
          sx={{ color: 'var(--color-primary)' }}
        />
      ),
      title: 'Automatización de Procesos',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 4,
            color: 'var(--color-primary)',
          }}
        >
          Nuestros Servicios
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: 800,
            margin: '0 auto',
            textAlign: 'center',
            mb: 6,
            color: 'var(--color-text-secondary)',
            fontSize: '1.1rem',
          }}
        >
          Descubre cómo podemos ayudarte a destacar en el mundo digital y
          conectar con los pacientes ideales para tu especialidad.
        </Typography>
      </motion.div>

      {/* Contenedor flex para servicios */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 3, md: 6 },
        }}
      >
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                flex: '1 1 250px',
                maxWidth: 280,
                textAlign: 'center',
                p: 4,
                backgroundColor: 'var(--color-bg-default)',
                borderRadius: 4,
                boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                },
                color: 'var(--color-text-primary)',
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  color: 'var(--color-primary-dark)',
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'var(--color-text-secondary)' }}
              >
                {service.description}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
