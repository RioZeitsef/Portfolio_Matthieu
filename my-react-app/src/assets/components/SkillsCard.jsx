import React from 'react';
import { Box, CircularProgress, Card, CardContent, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import skills from '../../data/cardsSkills.json'; 

// Composant pour afficher une compétence individuelle
const SkillCard = ({ name, logo, level }) => {
  return (
    <Card sx={{ 
      maxWidth: 300, 
      m: 1, 
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      backgroundColor: '#2c3e50',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
      }
    }}>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
        <CircularProgress
          variant="determinate"
          value={level}
          size={90}
          thickness={3}
          sx={{
            color: '#DEB992',
            position: 'absolute'
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
          }}
        >
          <img 
            src={logo} 
            alt={`${name} logo`} 
            style={{ 
              maxWidth: '70%', 
              maxHeight: '80%', 
              objectFit: 'contain',
              color: 'white', 
            }} 
          />
        </Box>
      </Box>
      <CardContent sx={{ pt: 0, pb: '8px !important', textAlign: 'center' }}>
        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold', padding: '8px', color: '#AE7335' }}>
          {name}
        </Typography>
        <Typography variant="caption" sx={{ fontSize: '0.8rem', color: '#DEB992', fontWeight: 'bold' }}>
          {level}% de maîtrise
        </Typography>
      </CardContent>
    </Card>
  );
};

// Validation des props
SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

// Composant principal qui affiche toutes les compétences
const SkillsSection = () => {
  // Exemple de données pour les compétences

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" sx={{ py: 8, textAlign: 'center', fontWeight: 'bold', fontSize: '2rem' }}>
        Mes compétences techniques
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {skills.map((skill) => (
          <Grid item key={skill.id} size={{ xs: 7, sm: 4, md: 2, lg: 2 }}>
            <SkillCard 
              name={skill.name} 
              logo={skill.logo} 
              level={skill.level} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsSection