'use client';

import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const MotionBox = motion(Box);

const faqs = [
  {
    question:
      '¿Mi negocio es pequeño, puedo implementar tecnología sin complicaciones?',
    answer:
      'Sí. Nuestras soluciones están diseñadas para microempresas y emprendedores, fáciles de implementar y adaptables a tu operación diaria sin necesidad de personal técnico avanzado.',
  },
  {
    question:
      '¿Cuánto tiempo tardaré en ver resultados con la tecnología en mi negocio?',
    answer:
      'Depende del servicio y la estrategia. Por ejemplo, un sistema de logística o una landing page puede empezar a generar beneficios visibles en pocas semanas, mientras que procesos más complejos requieren 2-3 meses de integración y optimización.',
  },
  {
    question:
      '¿Necesito conocimientos técnicos para usar los sistemas o apps que desarrollan?',
    answer:
      'No, nuestros productos son intuitivos y fáciles de usar. Además, brindamos capacitación y soporte continuo para que puedas sacar el máximo provecho sin depender de personal especializado.',
  },
  {
    question:
      '¿Puedo escalar o mejorar mi sistema a medida que mi negocio crece?',
    answer:
      'Sí. Todos nuestros sistemas y aplicaciones son escalables. A medida que tu empresa crece, podemos agregar nuevas funcionalidades, automatizar más procesos y mejorar la eficiencia de tu operación.',
  },
  {
    question: '¿Qué pasa si no tengo sitio web o presencia digital?',
    answer:
      'Podemos crear desde cero tu página web o landing page profesional, optimizada para atraer clientes y mostrar tu negocio de manera confiable y atractiva.',
  },
  {
    question:
      '¿Cómo se asegura que mi información y datos de clientes estén protegidos?',
    answer:
      'Todos nuestros sistemas cumplen con buenas prácticas de seguridad y confidencialidad. Protegemos tu información y la de tus clientes con protocolos modernos y respaldos seguros.',
  },
  {
    question:
      '¿Vale la pena invertir en tecnología si mi negocio es muy pequeño?',
    answer:
      'Sí. Incluso pequeñas mejoras tecnológicas pueden optimizar tus procesos, ahorrar tiempo y destacar frente a la competencia. Las soluciones están diseñadas para ser accesibles y rentables desde el primer día.',
  },
];

export default function FaqSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="faq-section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: '#f5f5f5' }}
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
          Preguntas Frecuentes
        </Typography>
      </MotionBox>

      {/* FAQs */}
      <Box sx={{ maxWidth: 800, mx: 'auto', px: 2 }}>
        {faqs.map((faq, idx) => (
          <MotionBox
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            mb={2}
          >
            <Accordion
              sx={{
                boxShadow: '0px 4px 20px rgba(0,0,0,0.04)',
                borderRadius: 2,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{ fontWeight: 'bold', color: 'var(--color-secondary)' }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
