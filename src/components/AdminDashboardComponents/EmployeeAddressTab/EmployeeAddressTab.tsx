import React from 'react';
import { Box, Grid, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

interface EmployeeGeneralTabProps {
  setValue: (value: number) => void;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const EmployeeAddressTab: React.FC<EmployeeGeneralTabProps> = ({
  setValue,
}) => {
  return (
    <>
      <Grid container spacing={3} mt={3} sx={{ mb: 4, width: '100%' }}>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            spacing={3}
            mt={3}
            sx={{ pt: 1, mb: 4, width: '100%' }}
          >
            <Typography
              variant="h4"
              sx={{ color: 'primary.main', pb: 2, pl: 3, fontWeight: 600 }}
            >
              Present Address
            </Typography>
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
                variant="h4"
                sx={{ color: 'primary.main', pb: 2, pl: 3, fontWeight: 600 }}
              >
                Permanent Address
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'primary.main', pb: 2, pl: 3, fontWeight: 600 }}
                >
                  Same
                </Typography>
                <Box>
                  <Checkbox {...label} />
                </Box>
              </Box>
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
      <button
        onClick={() => setValue(3)}
        className="bg-secondary text-white px-10 py-3 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary"
      >
        Next
      </button>
    </>
  );
};

export default EmployeeAddressTab;
