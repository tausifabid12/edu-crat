import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Button,
  Stack,
} from '@mui/material';

const HomeUpComingEvents = () => {
  return (
    <Paper>
      <Box sx={{ mt: { xs: '70px', sm: '110px' }, minHeight: '100vh' }}>
        <Box>
          <Typography
            variant="h5"
            color="primary"
            sx={{ fontWeight: '600', textAlign: 'center', my: 3 }}
          ></Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default HomeUpComingEvents;
