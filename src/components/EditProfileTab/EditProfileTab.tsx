import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const EditProfileTab = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '14px',
        p: { xs: 2, sm: 4 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image src="/assets/user.png" height={100} width={100} alt="" />
        <Stack spacing={1} ml={2} sx={{ py: 3 }}>
          <Typography variant="body1" sx={{ color: 'primary.main' }}>
            Your avatar
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.contrastText' }}
          >
            PNG or JPG no bigger than 800px wide and tall.
          </Typography>
          <Stack direction="row" spacing={2}>
            <CloudUploadIcon
              sx={{ color: 'secondary.contrastText' }}
            ></CloudUploadIcon>

            <DeleteOutlineIcon
              sx={{ color: 'secondary.contrastText' }}
            ></DeleteOutlineIcon>
          </Stack>
        </Stack>
      </Box>
      {/* --------------- */}
      <Grid
        container
        spacing={3}
        mt={3}
        sx={{ borderTop: '1px solid #E5E5E5', pt: 1, width: '100%' }}
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" First name"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" Last name"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" User Email"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" Mobile Number"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Current School"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Current Course"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="outlined-multiline-static"
            label="Personal info"
            multiline
            rows={4}
            // default  Value="I am a lorem learner Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            sx={{ width: '100%', color: 'secondary.contrastText' }}
          />
        </Grid>
        <Grid item xs={12} lg={6}></Grid>
      </Grid>
      <button className="bg-secondary text-white px-10 py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary">
        Update Changes
      </button>
    </Box>
  );
};

export default EditProfileTab;
