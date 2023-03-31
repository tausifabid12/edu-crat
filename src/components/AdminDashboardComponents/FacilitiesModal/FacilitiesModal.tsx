import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Editor from '@/components/Editor/Editor';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const FacilitiesModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  const [submenu, setSubmenu] = React.useState<number>(0);
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
        <DialogTitle id="alert-dialog-title">
          {'Add new Facilities'}
        </DialogTitle>
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
                  type="file"
                  fullWidth
                  label="logo"
                  InputLabelProps={{
                    shrink: true,
                  }}
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

export default FacilitiesModal;
