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

const CollegeAdvertiseCard = () => {
  return (
    <Card
      sx={{
        width: '100%',
        boxShadow: 'xl',

        '&:hover': {
          boxShadow: 'xl',
          borderColor: 'neutral.outlinedHoverBorder',
        },
      }}
    >
      <CardActionArea sx={{}}>
        <CardMedia
          component="img"
          height="120"
          image="/assets/campus.jpg"
          alt="green iguana"
          sx={{
            width: '100%',
            height: '150px',
            borderRadius: '8px 8px 0px 0px',
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight="bold"
            color="primary"
          >
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
                (125)
              </Typography>
            </Box>
          </Box>

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
              size="small"
              sx={{
                color: 'primary',
                borderColor: 'primary',
                mx: 'auto',
              }}
            >
              Apply Now <NearMeIcon sx={{ ml: 1 }} />
            </Button>
            {/* <Button
              variant="outlined"
              sx={{
                color: 'primary',
                borderColor: 'primary',
                // mt: { xs: 2, sm: 0 },
              }}
            >
              Brochure <DownloadIcon sx={{ ml: 1 }} />
            </Button> */}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CollegeAdvertiseCard;
