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
import image from '../images/project_images/mountain.jpg';

const cards = [
  {
    id: 1,
    img: image,
    title: 'Plants',
    description: 'Plants are essential for all life.',
    detailedDescription: 'Les plantes sont essentielles pour toute vie sur Terre. Elles produisent de loxygène par photosynthèse et servent de base à de nombreuses chaînes alimentaires. Ce projet explore la diversité des plantes et leur importance écologique.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/username/plants-project',
    demoLink: 'https://plants-demo.netlify.app'
  },
  {
    id: 2,
    img: image,
    title: 'Animals',
    description: 'Animals are a part of nature.',
    detailedDescription: 'Les animaux constituent une part importante de notre écosystème. Ce projet présente diverses espèces animales et leur rôle dans la préservation de léquilibre naturel.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    githubLink: 'https://github.com/username/animals-project',
    demoLink: 'https://animals-demo.netlify.app'
  },
  {
    id: 3,
    img: image,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival.',
    detailedDescription: 'Les humains dépendent des plantes et des animaux pour leur survie. Ce projet examine limpact des activités humaines sur lenvironnement et propose des solutions durables.',
    technologies: ['Angular', 'Flask', 'MySQL'],
    githubLink: 'https://github.com/username/humans-project',
    demoLink: 'https://humans-demo.netlify.app'
  },
];

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
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '90%' : '70%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
  };

  return (
    <>
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
              onClick={() => {
                setSelectedCard(index);
                handleOpenModal(card);
              }}
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

      {/* Modal pour afficher plus d'informations */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
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
              src={modalData?.img}
              alt={modalData?.title}
              style={{
                width: '100%',
                maxHeight: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Box>

          <Typography id="modal-description" variant="body1" sx={{ mb: 2 }}>
            {modalData?.detailedDescription}
          </Typography>

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
              Technologies utilisées
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {modalData?.technologies.map((tech, index) => (
                <Box
                  key={index}
                  sx={{
                    bgcolor: 'primary.main',
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
              color="primary"
              href={modalData?.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href={modalData?.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Démo en ligne
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ProjectCard;