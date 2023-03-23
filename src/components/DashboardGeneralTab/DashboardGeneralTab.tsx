import React from 'react';
import { Container, Stack, Box, Typography, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';

const DashboardGeneralTab = () => {
  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <Image
          src="/assets/college2.png"
          height={150}
          width={1200}
          objectFit="contain"
          style={{ width: '100%', height: '220px', borderRadius: '10px' }}
          alt=""
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ position: 'absolute', bottom: '0', right: '5px' }}
        >
          <IconButton aria-label="delete" size="large">
            <DeleteIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera sx={{ color: 'white' }} />
          </IconButton>
        </Stack>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Grid
          container
          spacing={0}
          sx={{
            backgroundColor: 'transparent',
          }}
        >
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="College Name"
              defaultValue="Indian Institute of Science"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="Location"
              defaultValue="CV Raman Rd, Bengaluru, Karnataka, India"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="Established in"
              defaultValue="2001"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="Rankings"
              defaultValue="01"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="Type"
              defaultValue="Public"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="Approved by"
              defaultValue="NCTE, COA, PCI, IAP, BCI, UGC"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="Website"
              defaultValue="https://edu-crat.vercel.app/"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={6} p={1}>
            <TextField
              fullWidth
              label="Application Link"
              defaultValue="https://edu-crat.vercel.app/"
              id="fullWidth"
            />
          </Grid>
          <Grid item xs={12} lg={12} p={1}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Bio"
              defaultValue="The Indian Institute of Science is a public, deemed, research university for higher education and research in science, engineering, design, and management. It is located in the southern Indian city of Bangalore, Karnataka."
              id="fullWidth"
            />
          </Grid>
        </Grid>
        <button className="bg-secondary text-white px-10 py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary mt-6 ml-1">
          Update Changes
        </button>
      </Box>
    </>
  );
};

export default DashboardGeneralTab;
