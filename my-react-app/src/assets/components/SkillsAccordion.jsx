import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import skillsData from '../../data/iaSkills.json';

function SkillsAccordion() {
  const [expanded, setExpanded] = useState('panel1');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          py: 4,
          maxWidth: '1200px',
          width: '80%',
          margin: '0 auto',
          boxSizing: 'border-box',
          mb: 6
        }}
      >
        {skillsData.map((skill) => (
          <Accordion 
            key={skill.id} 
            expanded={expanded === `panel${skill.id}`} 
            onChange={handleChange(`panel${skill.id}`)}
            sx={{
              backgroundColor: '#2c3e50',
              mb: 2,
              '&:before': {
                display: 'none',
              },
              boxShadow: 3,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: '#DEB992' }} />}
              aria-controls={`panel${skill.id}-content`}
              id={`panel${skill.id}-header`}
              sx={{
                borderBottom: expanded === `panel${skill.id}` ? '1px solid #DEB992' : 'none',
                '& .MuiAccordionSummary-content': {
                  margin: '16px 0',
                }
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: '#DEB992',
                  flexGrow: 1,
                  fontSize: isMobile ? '1.2rem' : '1.5rem',
                }}
              >
                {skill.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: isMobile ? '6px 8px 8px' : '8px 12px 12px',
                 color: '#DEB992'
             }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    <Typography 
                        font-size={isMobile ? '0.9rem' : '1rem'}
                        sx={{
                        color: '#DEB992',
                        display: { xs: 'block' ,sm : 'block' },
                        opacity: 0.8,
                        mr: isMobile ? 0 : 2,
                        }}
                    >
                    {skill.description}
                    </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}

export default SkillsAccordion;