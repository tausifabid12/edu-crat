import React from 'react';
import { Grid, TextField, Typography, Box, Paper } from '@mui/material';

// interface EmployeeGeneralTabProps {
//   setValue: (value: number) => void;
// }

const PreviewTab: React.FC = () => {
  return (
    <>
      <Grid container spacing={3} mt={3} sx={{ pt: 1, mb: 4, width: '100%' }}>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label=" Name"
            defaultValue="Rohit Sharma"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Email"
            defaultValue="Rohit@Sharma.com"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Mobile"
            defaultValue="+9123475210"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Adhar No."
            defaultValue="9123475210"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Pan Card No."
            defaultValue="9123475210"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            multiline
            rows={4}
            id="outlined-basic"
            label="Experience."
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ my: 3, p: 4, minHeight: '300px' }}>
        <Grid container spacing={3} mt={3} sx={{ mb: 4, width: '100%' }}>
          <Grid item xs={12} lg={6}>
            <Grid
              container
              spacing={3}
              mt={3}
              sx={{ pt: 1, mb: 4, width: '100%' }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: 'primary.main', pl: 3, fontWeight: 600 }}
              >
                Present Address
              </Typography>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="City"
                  defaultValue="Delhi"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="State"
                  defaultValue="Delhi"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Country"
                  defaultValue=" India"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid
              container
              spacing={3}
              mt={3}
              sx={{ pt: 1, mb: 4, width: '100%' }}
            >
              <Box
                sx={{
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'primary.main', pl: 3, fontWeight: 600 }}
                >
                  Permanent Address
                </Typography>
              </Box>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Country"
                  variant="outlined"
                  sx={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Paper elevation={3} sx={{ my: 3, p: 4, minHeight: '300px' }}>
        <Typography variant="h5">Documents</Typography>
      </Paper>
      <button
        // onClick={() => setValue(1)}
        className="bg-secondary text-white px-10 py-3 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary"
      >
        Submit
      </button>
    </>
  );
};

export default PreviewTab;
