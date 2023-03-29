import React from 'react';
import { Grid, TextField } from '@mui/material';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface CampaignProps {
  setPageName: React.Dispatch<React.SetStateAction<string>>;
}

const BannerCampaign: React.FC<CampaignProps> = ({ setPageName }) => {
  return (
    <>
      <DialogTitle id="alert-dialog-title">Banner Campaign</DialogTitle>

      <DialogContent sx={{ minHeight: '400px' }}>
        <Scrollbars autoHide style={{ width: '100%', minHeight: '400px' }}>
          <Grid
            container
            spacing={3}
            mt={3}
            sx={{ pt: 1, mb: 4, width: '100%' }}
          >
            <Grid item xs={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} lg={6} p={1}>
              <TextField
                type="file"
                fullWidth
                id="fullWidth"
                label="Image"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                id="outlined-basic"
                label=" State"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>

            <Grid item xs={12} lg={6} p={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Start Date" sx={{ width: '100%' }} />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} lg={6} p={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="End Date" sx={{ width: '100%' }} />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                id="outlined-basic"
                label="Assign College"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                multiline
                rows={4}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>
          </Grid>
        </Scrollbars>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontSize: '13px', mt: 2, mx: 1 }}
        >
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setPageName('Select')} autoFocus>
          Back
        </Button>
        <Button autoFocus>Submit</Button>
      </DialogActions>
    </>
  );
};

export default BannerCampaign;
