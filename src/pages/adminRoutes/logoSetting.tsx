import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

const LogoSetting = () => {
  return (
    <AdminDashboardLayout>
      <Box mb={3}>
        <Typography
          variant="h4"
          sx={{ color: 'secondary.main', fontWeight: '600' }}
        >
          Logo Setting
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 5,
          justifyContent: 'space-between',
          width: { xs: '100%', lg: '40%' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: '600', mr: 5 }}
        >
          Logo
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 5,
          justifyContent: 'space-between',
          width: { xs: '100%', lg: '40%' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: '600', mr: 5 }}
        >
          Footer Logo
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 5,
          justifyContent: 'space-between',
          width: { xs: '100%', lg: '40%' },
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: 'primary.main', fontWeight: '600', mr: 5 }}
        >
          FabIcon
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

export default LogoSetting;
