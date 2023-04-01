import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, TextField, Typography } from '@mui/material';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const AssignCollegeModal: React.FC<ModalProps> = ({
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
              <Grid
                item
                xs={12}
                lg={12}
                p={1}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <TextField
                  fullWidth
                  defaultValue="IIT"
                  label="College name"
                  id="fullWidth"
                />
              </Grid>
              <Grid item xs={12} lg={12} p={1} sx={{}}>
                <Typography
                  onClick={() => setOpenModal(true)}
                  variant="h6"
                  sx={{
                    color: 'primary.main',
                    fontweight: '700',
                  }}
                >
                  Documents
                </Typography>
                <Box>
                  <PhotoProvider>
                    <Grid container spacing={1} className="foo">
                      {docs.map((item, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4}>
                          <PhotoView src={item}>
                            <img src={item} alt="" className="h-full w-full" />
                          </PhotoView>
                        </Grid>
                      ))}
                    </Grid>
                  </PhotoProvider>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Decline</Button>
          <Button onClick={handleClose} autoFocus>
            Approve
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AssignCollegeModal;
