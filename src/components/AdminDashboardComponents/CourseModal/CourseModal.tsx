import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, TextField, Typography } from '@mui/material';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const CourseModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
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
            minWidth: { xs: '100%', sm: '200px' },
            p: { xs: 3, sm: 1 },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{'Add new Course'}</DialogTitle>
        <DialogContent>
          <Box>
            <Grid
              container
              spacing={0}
              sx={{
                backgroundColor: 'transparent',
              }}
            >
              <Grid
                item
                xs={12}
                lg={12}
                p={1}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <TextField fullWidth label="Name" id="fullWidth" />
              </Grid>
              <Grid
                item
                xs={12}
                lg={12}
                p={1}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  label="Description"
                  id="fullWidth"
                />
              </Grid>
            </Grid>
          </Box>
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

export default CourseModal;
