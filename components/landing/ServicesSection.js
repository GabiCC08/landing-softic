'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocalHospital as LogisticsIcon,
  Campaign as LandingIcon,
  Assessment as AppsIcon,
} from '@mui/icons-material';

const servicesData = [
  {
    Icon: LogisticsIcon,
    title: 'Sistema de Logística Inteligente',
    description:
      'Gestiona y optimiza tus entregas con seguimiento en tiempo real, control del trayecto y monitoreo del avance de cada envío. Ideal para pequeñas y medianas empresas que buscan eficiencia y confiabilidad, sin complicaciones técnicas.',
  },
  {
    Icon: LandingIcon,
    title: 'Desarrollo de Landing Pages Profesionales',
    description:
      'Creamos páginas informativas de alto impacto que comunican claramente tu propuesta de valor, generan confianza en tus clientes y potencian tu presencia digital. Diseñado para emprendedores que quieren destacar con tecnología, sin invertir grandes recursos.',
  },
  {
    Icon: AppsIcon,
    title: 'Desarrollo de Aplicaciones y Sistemas Robustos',
    description:
      'Diseñamos aplicaciones móviles y sistemas complejos, escalables y seguros, adaptados a empresas en crecimiento o consolidadas que necesitan automatizar procesos críticos, optimizar la gestión de personal, inventario y operaciones, y mantener la eficiencia a gran escala.',
  },
];

const MotionBox = motion(Box);

export default function ServicesSection() {
  return (
    <Box
      component="section"
      id="services-section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        background:
          'linear-gradient(135deg, var(--color-bg-light), var(--color-bg-default))',
      }}
    >
      {/* Título */}
      <MotionBox
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        mb={3}
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
      {/* <MotionBox
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
          Impulsamos tu negocio con soluciones tecnológicas diseñadas para
          crecer contigo. Desde logística eficiente hasta aplicaciones móviles
          robustas, tenemos todo para llevar tu emprendimiento al siguiente
          nivel.
        </Typography>
      </MotionBox> */}

      {/* Cards de servicios */}
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
            maxWidth={300}
            textAlign="center"
            p={{ xs: 3, md: 4 }}
            bgcolor="var(--color-bg-default)"
            borderRadius={4}
            boxShadow="0px 4px 20px rgba(0,0,0,0.25)"
            sx={{
              transition: 'transform 0.3s',
              '&:hover': { transform: 'translateY(-8px)' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center', // <- esto centra icon, título y texto
              minHeight: 280,
            }}
          >
            <Icon
              fontSize="large"
              sx={{ color: 'var(--color-primary)', mb: 2 }}
            />
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
