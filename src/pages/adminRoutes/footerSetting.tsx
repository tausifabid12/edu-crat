import Editor from '@/components/Editor/Editor';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import React from 'react';

const FooterSetting = () => {
  return (
    <AdminDashboardLayout>
      <Box px={3}>
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'secondary.main', fontWeight: '600' }}
          >
            Footer Setting
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
          <Typography
            variant="h5"
            sx={{ color: 'secondary.main', fontWeight: '600', mb: 2 }}
          >
            Section 1
          </Typography>
          <Editor />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 5, py: 1.7, px: 3, color: 'white' }}
          >
            Save Changes
          </Button>
        </Box>
        <Box mt={3}>
          <Typography
            variant="h5"
            sx={{ color: 'secondary.main', fontWeight: '600', mb: 2 }}
          >
            Section 2
          </Typography>
          <Editor />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 5, py: 1.7, px: 3, color: 'white' }}
          >
            Save Changes
          </Button>
        </Box>
        <Box mt={3}>
          <Typography
            variant="h5"
            sx={{ color: 'secondary.main', fontWeight: '600', mb: 2 }}
          >
            Section 3
          </Typography>
          <Editor />
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 5, py: 1.7, px: 3, color: 'white' }}
          >
            Save Changes
          </Button>
        </Box>
        <Box mt={3}>
          <Typography
            variant="h5"
            sx={{ color: 'secondary.main', fontWeight: '600', mb: 2 }}
          >
            Contact info
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Phone" id="fullWidth" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Email" id="fullWidth" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Address" id="fullWidth" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Map url" id="fullWidth" />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 5, py: 1.7, px: 3, color: 'white' }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </AdminDashboardLayout>
  );
};

export default FooterSetting;
