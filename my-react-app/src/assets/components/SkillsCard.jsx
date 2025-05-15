import React from 'react';
import { Box, CircularProgress, Card, CardContent, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import ReactLogo from "../images/skills_images/react-icon.png"
import PythonLogo from "../images/skills_images/python-icon.png"
import CssLogo from "../images/skills_images/css-icon.webp"
import NodeLogo from "../images/skills_images/nodejs-icon.png"
import GitLogo from "../images/skills_images/git-icon.png"
import JavascriptLogo from "../images/skills_images/javascript-icon.webp"

// Composant pour afficher une compétence individuelle
const SkillCard = ({ name, logo, level }) => {
  return (
    <Card sx={{ 
      maxWidth: 200, 
      m: 1, 
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
      }
    }}>
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
        <CircularProgress
          variant="determinate"
          value={level}
          size={80}
          thickness={4}
          sx={{
            color: (theme) => level < 50 ? theme.palette.warning.main : theme.palette.success.main,
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
              maxWidth: '80%', 
              maxHeight: '100%', 
              objectFit: 'contain' 
            }} 
          />
        </Box>
      </Box>
      <CardContent sx={{ pt: 0, pb: '8px !important', textAlign: 'center' }}>
        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
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
  const skills = [
    { id: 1, name: 'React', logo: ReactLogo, level: 85 },
    { id: 2, name: 'JavaScript', logo: JavascriptLogo, level: 90 },
    { id: 3, name: 'CSS', logo: CssLogo, level: 80 },
    { id: 4, name: 'Node.js', logo: NodeLogo, level: 70 },
    { id: 5, name: 'Python', logo: PythonLogo, level: 65 },
    { id: 6, name: 'Git', logo: GitLogo, level: 75 },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center' }}>
        Mes compétences techniques
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {skills.map((skill) => (
          <Grid item key={skill.id} xs={6} sm={4} md={3} lg={2}>
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