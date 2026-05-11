'use client';

import { Box, Button, Chip, Container, Paper, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

// Lista de habilidades técnicas
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST API', 
  'Material-UI', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 
  'CI/CD', 'Jest', 'React Testing Library'
];

export default function About() {
  return (
    <Box 
      id="sobre" 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 16 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              mb: 4,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Sobre Mim
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                background: theme => theme.palette.mode === 'dark' 
                  ? 'rgba(30, 41, 59, 0.5)' 
                  : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.1)' 
                  : 'rgba(0,0,0,0.05)',
                borderRadius: '20px',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme => theme.palette.mode === 'dark'
                    ? '0 10px 30px rgba(99, 102, 241, 0.12)'
                    : '0 10px 30px rgba(99, 102, 241, 0.08)',
                }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
                Quem sou eu
              </Typography>
              <Typography paragraph>
                Sou um desenvolvedor Full-Stack apaixonado por criar aplicações web modernas e eficientes. 
                Com experiência em desenvolvimento front-end e back-end, busco sempre as melhores práticas 
                e tecnologias para entregar produtos de alta qualidade.
              </Typography>
              <Typography paragraph>
                Tenho formação em Ciência da Computação e experiência em projetos que vão desde pequenas 
                aplicações até sistemas complexos. Meu foco está em criar interfaces intuitivas e responsivas, 
                além de APIs robustas e escaláveis.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button 
                  variant="outlined" 
                  startIcon={<DownloadIcon />}
                  href="/cv-diego-danciguer.pdf"
                  target="_blank"
                  download
                  size="large"
                >
                  Download CV
                </Button>
              </Box>
            </Paper>
            
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                background: theme => theme.palette.mode === 'dark' 
                  ? 'rgba(30, 41, 59, 0.5)' 
                  : 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(12px)',
                border: '1px solid',
                borderColor: theme => theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.1)' 
                  : 'rgba(0,0,0,0.05)',
                borderRadius: '20px',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme => theme.palette.mode === 'dark'
                    ? '0 10px 30px rgba(99, 102, 241, 0.12)'
                    : '0 10px 30px rgba(99, 102, 241, 0.08)',
                }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3, background: 'linear-gradient(to right, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
                Habilidades
              </Typography>
              <Box 
                component={motion.div}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}
              >
                {skills.map((skill) => (
                  <Chip 
                    key={skill} 
                    label={skill} 
                    variant="outlined" 
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    sx={{ 
                      m: 0.5, 
                      fontWeight: 600,
                      fontFamily: 'monospace',
                      borderColor: 'rgba(99, 102, 241, 0.3)',
                      color: theme => theme.palette.mode === 'dark' ? '#e2e8f0' : '#334155',
                      '&:hover': {
                        background: 'linear-gradient(to right, #6366f1, #a855f7)',
                        color: 'white',
                        borderColor: 'transparent',
                        boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)'
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 