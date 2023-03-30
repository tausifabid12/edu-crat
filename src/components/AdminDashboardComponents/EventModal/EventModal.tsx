import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const EventModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  const [status, setStatus] = React.useState('');
  const handleClose = () => {
    setOpenModal(false);
  };

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
            minWidth: { xs: '100%', sm: '700px' },
            p: { xs: 3, sm: 1 },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{'Create New Event'}</DialogTitle>
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
                  <DatePicker label="Event Date" sx={{ width: '100%' }} />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Registration Start"
                    sx={{ width: '100%' }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Registration End" sx={{ width: '100%' }} />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="Url" id="fullWidth" />
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Age"
                    onChange={(e) => setStatus(e.target.value as string)}
                  >
                    <MenuItem value={10}>Active</MenuItem>
                    <MenuItem value={20}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="College Name" id="fullWidth" />
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
          </Box>
          {/* <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventModal;
