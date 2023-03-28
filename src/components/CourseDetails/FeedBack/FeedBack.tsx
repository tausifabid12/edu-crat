import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import { Stack } from '@mui/system';

const FeedBack = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: '60px 0 0 0', backgroundColor: 'info.main' }}
    >
      <Grid item xs={12} md={4} py={20}>
        <Card
          sx={{
            width: '100%',
            height: '230px',
            p: 5,
            display: 'grid',
            placeContent: 'center',
          }}
        >
          <Typography variant="h2" color="primary">
            4.8
          </Typography>

          <Rating
            name="read-only"
            size="small"
            value={5}
            readOnly
            sx={{ mb: 1 }}
          />
          <Typography variant="body1" sx={{ color: 'text_color.main' }}>
            Course Rating
          </Typography>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        // sx={{ position: 'relative' }}
      >
        <Card sx={{ width: '100%', p: 5, height: '230px' }}>
          {[70, 50, 30, 60, 12].map((item, i) => (
            <Stack key={i} spacing={2} direction="row">
              <Slider
                aria-label="Temperature"
                defaultValue={item}
                size="small"
                // getAriaValueText={(20, 1)}
                color="secondary"
              />

              <Stack direction="row" spacing={1}>
                <Rating
                  name="read-only"
                  size="small"
                  value={5}
                  readOnly
                  sx={{ mb: 1 }}
                />
                <Typography variant="body1" sx={{ color: 'text_color.main' }}>
                  {item}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
};

export default FeedBack;
