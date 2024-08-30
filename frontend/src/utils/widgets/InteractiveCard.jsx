import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PropTypes from 'prop-types';

export default function InteractiveCard({ image, title, description, criminalCase, constituency, education, totalAssets, selfProfession, onClick }) {
  return (
    <Card sx={{ width: '100%', height: '100%', borderRadius: 2, boxShadow: 3, paddingTop :"1rem" }} onClick = {onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ width: '100%', height: 150, objectFit: 'contain', borderTopLeftRadius: 2, borderTopRightRadius: 2, paddingTop : "1rem" }}
        />
        <CardContent sx={{ padding: 2 }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
            {criminalCase}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
            {constituency}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
            {education}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
            {totalAssets}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
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