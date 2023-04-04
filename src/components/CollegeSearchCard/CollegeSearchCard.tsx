import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import NearMeIcon from '@mui/icons-material/NearMe';
import DownloadIcon from '@mui/icons-material/Download';

const CollegeSearchCard = () => {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        boxShadow: 'xl',
        '&:hover': {
          boxShadow: 'xl',
          borderColor: 'neutral.outlinedHoverBorder',
        },
      }}
    >
      <CardActionArea
        sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <CardMedia
          component="img"
          height="120"
          image="/assets/campus.jpg"
          alt="green iguana"
          sx={{
            width: { xs: '100%', sm: '40%' },
            height: '240px',
            borderRadius: '8px',
            m: 1,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="primary">
            Indian Institute of Technology
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'left', sm: 'center' },

              flexDirection: { xs: 'column', sm: 'row' },
              mb: 1,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body2"
                sx={{ color: 'text_color.main', mr: 1 }}
              >
                4.5
              </Typography>
              <Rating name="size-small" defaultValue={3} size="small" />
              <Typography
                variant="body2"
                sx={{ color: 'text_color.main', ml: 1 }}
              >
                (125) |
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: 'text_color.main', ml: 1 }}
            >
              Fees: ₹ 8.00 Lakh | Salary : ₹ 15.00 Lakh
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica....
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, mt: 1 }}>
            <Typography variant="body2" sx={{ color: 'primary.main' }}>
              Ranking: #1
            </Typography>
            <Typography variant="body2" sx={{ color: 'primary.main', ml: 1 }}>
              | Total Seats: 1000
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              variant="contained"
              sx={{ color: 'primary', borderColor: 'primary', mr: 3 }}
            >
              Apply Now <NearMeIcon sx={{ ml: 1 }} />
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'primary',
                borderColor: 'primary',
                // mt: { xs: 2, sm: 0 },
              }}
            >
              Brochure <DownloadIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CollegeSearchCard;
