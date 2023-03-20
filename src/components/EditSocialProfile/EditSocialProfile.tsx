import { Grid, TextField } from '@mui/material';
import React from 'react';

const EditSocialProfile = () => {
  return (
    <>
      <Grid container spacing={3} mt={3} sx={{ pt: 1, mb: 4, width: '100%' }}>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" Twitter"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" Instagram"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Facebook"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" LinkedIn"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
      </Grid>
      <button className="bg-secondary text-white px-10 py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary">
        Update Changes
      </button>
    </>
  );
};

export default EditSocialProfile;
