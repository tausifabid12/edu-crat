import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const EventCard = () => {
  return (
    <Card sx={{ maxWidth: '100%', boxShadow: 'none' }}>
      <CardMedia
        sx={{ height: 220 }}
        image="/assets/register/2.png"
        title="green iguana"
      />
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Button size="small" color="primary" sx={{ borderRadius: '12px' }}>
            Featured
          </Button>
          <Typography variant="body1">$25</Typography>
        </Stack>
        <Typography gutterBottom variant="h6" component="div">
          Virtual Event with Protected Content and Hidden Livestream
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ color: 'primary.main' }}>
          Get Tickets
        </Button>
      </CardActions>
    </Card>
  );
};
export default EventCard;
