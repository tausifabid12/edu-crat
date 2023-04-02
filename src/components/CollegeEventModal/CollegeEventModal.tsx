import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-photo-view/dist/react-photo-view.css';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const CollegeEventModal: React.FC<ModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  const docs = ['/assets/events/1.png', '/assets/events/2.png'];

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '11px',
            minWidth: { xs: '100%', sm: '600px' },
            p: { xs: 3, sm: 1 },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Assign College</DialogTitle>
        <DialogContent>
          <Box>
            <Grid
              container
              spacing={0}
              sx={{
                backgroundColor: 'transparent',
              }}
            >
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="Event Name" id="fullWidth" />
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
              <Grid item xs={12} lg={6} p={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Date" sx={{ width: '100%' }} />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="Url" id="fullWidth" />
              </Grid>
              <Grid item xs={12} lg={12} p={1}>
                <TextField
                  fullWidth
                  id="fullWidth"
                  multiline
                  rows={4}
                  label="Description"
                />
              </Grid>
            </Grid>
            <button className="bg-secondary text-white px-14 py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary mt-4 ml-1">
              Create Event
            </button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CollegeEventModal;
