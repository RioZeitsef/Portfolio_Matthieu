import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const cards = [
  {
    id: 1,
    title: 'Plants',
    description: 'Plants are essential for all life.',
  },
  {
    id: 2,
    title: 'Animals',
    description: 'Animals are a part of nature.',
  },
  {
    id: 3,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival.',
  },
];

function ProjectCard() {
  const [selectedCard, setSelectedCard] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // 900px correspond approximativement à 'md'

  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', // Une colonne sur mobile, 3 colonnes sinon
        gap: 3,
        padding: '20px',
        boxSizing: 'border-box',
        justifyItems: isMobile ? 'center' : 'stretch', // Centre les cartes horizontalement sur mobile
      }}
    >
      {cards.map((card, index) => (
        <Card 
          key={card.id} 
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            maxWidth: isMobile ? '80%' : '100%', // Limite la largeur sur mobile pour centrer visuellement
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1, padding: '20px' }}>
              <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default ProjectCard;