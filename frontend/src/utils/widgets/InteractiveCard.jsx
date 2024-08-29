import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PropTypes from 'prop-types';


export default function InteractiveCard({ image, title, description, criminalCase, constituency, education, totalAssets, selfProfession }) {
  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', borderRadius: 2, minHeight: 500, boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2, minHeight: "50%"}}
        />
        <CardContent sx={{ padding: 3 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
            {criminalCase}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
            {constituency}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
            {education}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
            {totalAssets}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
            {selfProfession}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

InteractiveCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    criminalCase: PropTypes.string,
    constituency: PropTypes.string,
    education: PropTypes.string,
    totalAssets: PropTypes.string,
    selfProfession: PropTypes.string,
  };
  
  InteractiveCard.defaultProps = {
    criminalCase: '',
    constituency: '',
    education: '',
    totalAssets: '',
    selfProfession: '',
  };