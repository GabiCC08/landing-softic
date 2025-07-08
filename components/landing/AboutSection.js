'use client';

import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupIcon from '@mui/icons-material/Group';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

export default function AboutSection() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      id="about-section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pb: { xs: 8, md: 10 },
        backgroundColor: 'var(--color-bg-default)', // fondo blanco puro
      }}
    >
      {/* Fondo curvo superior (SVG) */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        >
          <path
            fill="var(--color-bg-default)" // blanco puro
            d="M0,224L40,197.3C80,171,160,117,240,128C320,139,400,213,480,250.7C560,288,640,288,720,266.7C800,245,880,203,960,170.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </Box>

      <Box
        sx={{
          pt: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
          pb: { xs: 6, md: 10 },
          borderRadius: '0 0 50% 50% / 0 0 10% 10%', // curva inferior suave
          backgroundColor: 'var(--color-bg-default)',
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
              color: 'var(--color-primary)', // rojo-naranja principal
              fontFamily: 'var(--font-family-base)',
            }}
          >
            Conoce Sobre Nosotros
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
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              mb: 6,
              color: 'var(--color-text-secondary)', // texto secundario gris
              fontSize: '1.1rem',
              fontFamily: 'var(--font-family-base)',
            }}
          >
            Somos una microempresa líder en soluciones tecnológicas
            personalizadas, enfocada en maximizar la eficiencia y potenciar el
            crecimiento de tu negocio. Nuestro equipo de expertos abarca todas
            las áreas del desarrollo y soporte tecnológico, asegurando
            soluciones integrales, flexibles y adaptadas a tus necesidades.
            Trabajamos contigo de cerca para implementar proyectos ágiles que no
            interrumpen tu operación y garantizan resultados reales.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 4,
                backgroundColor: 'var(--color-bg-dark)', // gris muy claro para fondo de tarjeta
                boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                height: '100%',
              }}
            >
              <EmojiObjectsIcon
                sx={{ color: 'var(--color-primary)', fontSize: '3rem', mb: 2 }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontFamily: 'var(--font-family-base)',
                }}
              >
                Soluciones Personalizadas y Escalables
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-family-base)',
                }}
              >
                Diseñamos tecnología a la medida que se adapta a tus necesidades
                actuales y crece junto a tu negocio, garantizando flexibilidad y
                eficiencia operativa sin interrupciones.
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 4,
                backgroundColor: 'var(--color-bg-dark)',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                height: '100%',
              }}
            >
              <GroupIcon
                sx={{ color: 'var(--color-primary)', fontSize: '3rem', mb: 2 }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontFamily: 'var(--font-family-base)',
                }}
              >
                Expertos Multidisciplinarios
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-family-base)',
                }}
              >
                Contamos con un equipo integrado por profesionales
                especializados en desarrollo de software, integración de
                sistemas y soporte técnico, que trabajan de manera coordinada
                para ofrecer soluciones completas y de calidad.
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 4,
                backgroundColor: 'var(--color-bg-dark)',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                height: '100%',
              }}
            >
              <StarOutlineIcon
                sx={{ color: 'var(--color-primary)', fontSize: '3rem', mb: 2 }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  fontFamily: 'var(--font-family-base)',
                }}
              >
                Acompañamiento Cercano y Continuo
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-family-base)',
                }}
              >
                No solo entregamos proyectos, sino que ofrecemos soporte
                constante y asesoría personalizada para ayudarte a optimizar y
                evolucionar tus sistemas conforme cambian tus requerimientos.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
