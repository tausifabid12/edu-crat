import { Box, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NoSsr from '@mui/base/NoSsr';

const DashboardCollegeProfileSetting = () => {
  return (
    <NoSsr>
      <Box
        sx={{
          backgroundColor: 'bg_color.main',
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
            <Typography variant="subtitle2" sx={{ color: 'text_color.main' }}>
              PNG or JPG no bigger than 800px wide and tall.
            </Typography>
            <Stack direction="row" spacing={2}>
              <CloudUploadIcon
                sx={{ color: 'text_color.main' }}
              ></CloudUploadIcon>

              <DeleteOutlineIcon
                sx={{ color: 'text_color.main' }}
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
              label="College name"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label="Contact Person"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              label=" Email"
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

          <Grid item xs={12} lg={6}></Grid>
        </Grid>
        <button className="bg-secondary text-white px-10 py-4 mt-5 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary">
          Update Changes
        </button>
      </Box>
    </NoSsr>
  );
};

export default DashboardCollegeProfileSetting;
