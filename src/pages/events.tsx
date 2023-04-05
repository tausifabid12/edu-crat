import MainLayout from '@/Layouts/MainLayout';
import EventCard from '@/components/EventCard/EventCard';
import { Box, Paper, Typography, Grid } from '@mui/material';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Events = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <MainLayout>
      <Paper elevation={0} sx={{ mt: { xs: '70px', sm: '110px' } }}>
        <Box
          sx={{
            background: `linear-gradient( rgba(20, 3, 66, .5), rgba(20, 3, 66, .5)),  url('/assets/hero.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ color: 'white', fontWeight: '600' }}>
            Events
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 5,
            px: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Upcoming Events
          </Typography>
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Grid container sx={{ my: 2, p: 5 }} spacing={5}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Grid key={item} item xs={12} sm={6} lg={4}>
              <EventCard />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </MainLayout>
  );
};

export default Events;
