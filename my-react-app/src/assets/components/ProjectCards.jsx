import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import image from '../images/project_images/mountain.jpg'

const cards = [
  {
    id: 1,
    img: image,
    title: 'Plants',
    description: 'Plants are essential for all life.',
  },
  {
    id: 2,
    img: image,
    title: 'Animals',
    description: 'Animals are a part of nature.',
  },
  {
    id: 3,
    img: image,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival.',
  },
];

function ProjectCard() {
  const [selectedCard, setSelectedCard] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        width: '80%',
        display: 'grid',
        margin: '0 auto',  
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: 3,
        padding: '20px',
        boxSizing: 'border-box',
        justifyItems: isMobile ? 'center' : 'stretch',
      }}
    >
      {cards.map((card, index) => (
        <Card 
          key={card.id} 
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            maxWidth: isMobile ? '80%' : '80%',
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
              <img
                src={card.img}
                alt={card.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '16px',
                }} />
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