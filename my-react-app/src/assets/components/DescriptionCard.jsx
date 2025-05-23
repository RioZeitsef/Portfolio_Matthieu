import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function DescriptionCard({ 
  title,
  titleVariant = "h3",
  description,
  descriptionVariant = "body2", 
  showBullet = true,
  cardStyles = {},
  img = null, // URL de l'image
  imgHeight = 200, // Hauteur par défaut de l'image
  imgAlt = "Image", // Texte alternatif pour l'image
  titleColor= "inherit",
  descriptionColor= "inherit",
  hideImageOnMobile = true // Nouvelle prop pour contrôler l'affichage sur mobile
}) {
  // Utilisation du hook useMediaQuery pour détecter les écrans mobiles
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Écrans < 600px (ajustez selon vos besoins)
  
  // Décidez si l'image doit être affichée en fonction de hideImageOnMobile et isMobile
  const shouldDisplayImage = img && !(isMobile && hideImageOnMobile);

  return (
    <Box sx={{ width: '70%', margin: 'auto', padding: '20px' }}>
      <Card variant="outlined" sx={cardStyles}>
        <CardContent>
          {/* Affiche l'image seulement si shouldDisplayImage est true */}
          {shouldDisplayImage && (
            <CardMedia
              component="img"
              height={imgHeight}
              image={img}
              alt={imgAlt}
              sx={{ objectFit: 'cover' }}
            />
          )}
          <Typography variant={titleVariant} component="div" sx={{ color: titleColor }}>
            {title}
            {showBullet && bull}
          </Typography>
          <Typography variant={descriptionVariant} sx={{ color: descriptionColor }}>
            {description}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// Mise à jour des PropTypes pour inclure la nouvelle prop
DescriptionCard.propTypes = {
  title: PropTypes.node.isRequired,
  titleVariant: PropTypes.string,
  description: PropTypes.node.isRequired,
  descriptionVariant: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showBullet: PropTypes.bool,
  cardStyles: PropTypes.object,
  img: PropTypes.string,
  imgHeight: PropTypes.number,
  imgAlt: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  hideImageOnMobile: PropTypes.bool
};