import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

interface DashboardAddPhotoModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardAddPhotoModal: React.FC<DashboardAddPhotoModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const handleClickOpen = () => {
    setOpenModal(true);
  };

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
            p: { xs: 3, sm: 1 },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Upload New Image</DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 5 }}>
            <Grid
              container
              spacing={0}
              sx={{
                backgroundColor: 'transparent',
              }}
            >
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="Event   " id="fullWidth" />
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
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: '13px', mt: 2, mx: 1 }}
          >
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DashboardAddPhotoModal;
