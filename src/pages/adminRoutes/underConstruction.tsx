import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import { Box, Stack, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const underConstruction = () => {
  return (
    <AdminDashboardLayout>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Under Construction
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'text_color.main',
              fontWeight: '400',
              mt: '2',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControlLabel control={<Switch />} label="Activate" />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 5,
          justifyContent: 'space-between',
          width: { xs: '100%', lg: '70%' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: '600', mr: 5 }}
        >
          Image
        </Typography>

        <TextField
          type="file"
          fullWidth
          id="fullWidth"
          label="Image"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>
    </AdminDashboardLayout>
  );
};

export default underConstruction;
