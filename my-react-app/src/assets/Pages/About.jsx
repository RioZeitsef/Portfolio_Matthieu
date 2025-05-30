import React from 'react';
import { Container, Typography, Paper, Box } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';
import Styles from "../css/Pages.module.css";
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <div className={Styles.homeContainer}>
      <Helmet>
        <title>À propos | Matthieu Metz | Développeur Web</title>
        <meta 
          name="description" 
          content="Découvrez le parcours, les compétences et la vision de Matthieu Metz, développeur web passionné par la création d'expériences numériques innovantes." 
        />
        <meta property="og:title" content="À propos | Matthieu Metz - Développeur Web" />
        <meta property="og:description" content="En savoir plus sur le parcours, les compétences et la vision de Matthieu Metz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matthieumetz.netlify.app/about" />
        <link rel="canonical" href="https://matthieumetz.netlify.app/about" />
      </Helmet>


      <Box 
        className={Styles.constructionOverlay}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(6, 22, 36, 0.7)', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          padding: { xs: '70px 16px 16px 16px', sm: '80px 24px 24px 24px' }, 
          boxSizing: 'border-box',
          overflow: 'auto', 
        }}
      >
        <Container maxWidth="md">
          <Paper 
            elevation={6} 
            sx={{ 
              p: { xs: 2, sm: 3, md: 5 }, // Padding responsive
              backgroundColor: 'rgba(44, 62, 80, 0.9)', 
              borderRadius: '8px',
              border: '2px solid #DEB992',
              maxHeight: { xs: 'calc(100vh - 120px)', md: 'none' }, // Limite la hauteur sur mobile
              overflow: 'auto', // Permet le défilement dans le Paper si nécessaire
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <ConstructionIcon 
                sx={{ 
                  fontSize: { xs: 50, sm: 70, md: 100 }, // Taille d'icône responsive
                  color: '#DEB992', 
                  mb: { xs: 2, sm: 3 } // Marge responsive
                }} 
              />
              
              <Typography 
                variant="h3" 
                component="h2" 
                sx={{ 
                  color: '#DEB992', 
                  mb: {xs: 2, sm: 3 }, 
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
                  fontSize: { xs: '1.8rem', sm: "2.2rem", md: '3rem' }
                }}
              >
                Page en Construction
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#FFFFFF', 
                  mb: { xs: 3, md: 4 }, // Marge responsive
                  maxWidth: '600px',
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Taille de police responsive
                  px: { xs: 1, sm: 0 } // Padding horizontal sur petit écran
                }}
              >
                Je travaille actuellement sur cette section pour vous présenter mon parcours, mes valeurs 
                et ma vision en tant que développeur web. Merci de votre patience !
              </Typography>
              
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  color: '#DEB992', 
                  fontStyle: 'italic',
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  mb: { xs: 1, sm: 0 }
                }}
              >
                Revenez bientôt pour découvrir l'histoire complète.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </div>
  );
};

export default About;