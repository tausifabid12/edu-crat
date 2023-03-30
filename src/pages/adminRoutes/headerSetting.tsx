import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import React from 'react';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';

const HeaderSetting = () => {
  return (
    <AdminDashboardLayout>
      <Box mb={3}>
        <Typography
          variant="h4"
          sx={{ color: 'secondary.main', fontWeight: '600' }}
        >
          Header Setting
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
      <Box mt={7}>
        <TextField
          fullWidth
          color="secondary"
          id="javascript-textfield"
          label="Header code.."
          multiline
          rows={10}
          variant="outlined"
        />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 5, py: 1.7, px: 3, color: 'white' }}
      >
        Save Changes
      </Button>
    </AdminDashboardLayout>
  );
};

export default HeaderSetting;
