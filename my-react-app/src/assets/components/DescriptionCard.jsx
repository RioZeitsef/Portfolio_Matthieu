import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Styles from '../css/DescriptionCard.module.css';

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
}) {
  return (
    <Box sx={{ width: '70%', margin: 'auto', padding: '20px' }}>
      <Card variant="outlined" sx={cardStyles}>
        <CardContent>
          <Typography variant={titleVariant} component="div">
            {title}
            {showBullet && bull}
          </Typography>
          <Typography variant={descriptionVariant}>
            {description}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// Définition des PropTypes pour validation
DescriptionCard.propTypes = {
  title: PropTypes.node.isRequired,
  titleVariant: PropTypes.string,
  description: PropTypes.node.isRequired,
  descriptionVariant: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showBullet: PropTypes.bool,
  cardStyles: PropTypes.object
};