'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '../../../public/images/Diego.jpeg';

export default function Hero() {
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projetos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 10, md: 16 },
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
        position: 'relative',
        overflow: 'hidden',
        background: theme => theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)' 
          : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
          animation: 'rotate 20s linear infinite',
          zIndex: 0
        },
        '@keyframes rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ flex: '1 1 50%', textAlign: 'center' }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                width: { xs: 220, sm: 280, md: 320 },
                height: { xs: 220, sm: 280, md: 320 },
                borderRadius: '50%',
                overflow: 'hidden',
                mx: 'auto',
                mb: 3,
                boxShadow: theme => theme.palette.mode === 'dark' 
                  ? '0 0 60px rgba(99, 102, 241, 0.25)' 
                  : '0 20px 50px rgba(99, 102, 241, 0.15)',
                border: '4px solid',
                borderColor: 'background.paper',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
                  zIndex: 1,
                  mixBlendMode: 'overlay'
                }
              }}
            >
              <Image
                src={profilePic}
                alt="Diego Danciguer"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{ flex: '1 1 50%' }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem' },
                letterSpacing: '-0.02em',
                background: 'linear-gradient(to right, #6366f1, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1
              }}
            >
              Diego Danciguer
            </Typography>
            
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              sx={{ 
                mb: 3, 
                fontWeight: 600,
                color: 'text.secondary',
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              Desenvolvedor Full-Stack
            </Typography>
            
            <Typography 
              variant="body1" 
              paragraph
              sx={{ mb: 4, fontSize: '1.1rem', maxWidth: '500px' }}
            >
              Especializado em criar experiências digitais excepcionais com foco em performance, 
              usabilidade e design moderno. Transformando ideias em soluções tecnológicas elegantes.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                size="large" 
                onClick={scrollToProjects}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(to right, #6366f1, #a855f7)',
                  color: 'white',
                  fontWeight: 'bold',
                  borderRadius: '30px',
                  textTransform: 'none',
                  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(to right, #4f46e5, #9333ea)',
                    transform: 'translateY(-3px) scale(1.02)',
                    boxShadow: '0 15px 30px rgba(99, 102, 241, 0.6)'
                  }
                }}
              >
                Ver Projetos
              </Button>
              
              <Button 
                variant="outlined" 
                size="large" 
                href="#contato"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'medium'
                }}
              >
                Contato
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
} 