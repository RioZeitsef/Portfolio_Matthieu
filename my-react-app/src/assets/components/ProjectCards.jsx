import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import cards from '../../data/cardsData.json';

// Cette fonction aide à construire les URLs correctes pour les images
const getImagePath = (path) => {
  // Sinon, construire le chemin complet pour les images locales
  return path.startsWith('/') ? path : `/${path}`;
};

function ProjectCard() {
  const [selectedCard, setSelectedCard] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (card) => {
    setModalData(card);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const modalStyle = {
    backgroundColor: '#2c3e50',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '70%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  // Debugging - affiche dans la console les chemins d'image
  console.log('Cards data:', cards);
  cards.forEach(card => {
    console.log(`Image path for ${card.title}:`, getImagePath(card.img));
  });

  return (
    <>
      <Typography variant="h4" component="h2" sx={{ mb: 4, textAlign: 'center', py: 4, fontWeight: 'bold', fontSize: '2rem' }}> 
        Mes Projets
      </Typography>
      <Box
        sx={{
          py: 4,
          maxWidth: '1200px',
          width: '80%',
          display: 'grid',
          margin: '0 auto',  
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 3,
          boxSizing: 'border-box',
          justifyItems: 'center',
          justifyContent: 'center', // Correction de la casse
        }}
      >
        {cards.map((card, index) => (
          <Card 
            key={card.id} 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              maxWidth: '100%', // Utiliser 100% pour une meilleure adaptation
              width: '100%',
              backgroundColor: '#2c3e50',
            }}
          >
            <CardActionArea
              onClick={() => {
                setSelectedCard(index);
                handleOpenModal(card);
              }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
              }}
            >
              <CardContent sx={{ flexGrow: 1, padding: '20px' }}>
                <Typography variant="h5" component="div" sx={{ marginBottom: 2, color: '#DEB992', fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
                <img
                  src={getImagePath(card.img)}
                  alt={card.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '16px',
                    objectFit: 'cover',
                    aspectRatio: '16/9',
                  }} 
                  onError={(e) => {
                    console.error(`Error loading image for ${card.title}:`, e);
                    e.target.src = '/images/placeholder.png'; // Image de remplacement
                    e.target.style.backgroundColor = '#f0f0f0';
                  }}
                />
                <Typography variant="body2" color='#DEB992'>
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          {/* Modal content */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography id="modal-title" variant="h4" component="h2">
              {modalData?.title}
            </Typography>
            <IconButton onClick={handleCloseModal} aria-label="Fermer">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ mb: 3 }}>
            <img
              src={modalData ? getImagePath(modalData.img) : ''}
              alt={modalData?.title}
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
              onError={(e) => {
                console.error(`Error loading modal image:`, e);
                e.target.src = '/images/placeholder.png';
                e.target.style.backgroundColor = '#f0f0f0';
              }}
            />
          </Box>

          {/* Rest of modal content */}
          <Typography id="modal-description" variant="body1" sx={{ mb: 2, color: '#DEB992' }}>
            {modalData?.detailedDescription}
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1, color: '#DEB992', fontWeight: 'bold' }}>
              Technologies utilisées
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {modalData?.technologies.map((tech, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: '#061624',
                    color: 'white',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '16px',
                    fontSize: '0.85rem',
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              sx={{ 
                backgroundColor: '#061624', // Couleur dorée personnalisée
                '&:hover': {
                  backgroundColor: '#2d4a63' // Version plus foncée pour le survol
                }
              }}
              href={modalData?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ProjectCard;