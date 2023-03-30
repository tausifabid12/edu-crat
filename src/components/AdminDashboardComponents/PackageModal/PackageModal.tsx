import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {
  Box,
  DialogContentText,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const PackageModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  const [detailsCount, setDetailsCount] = React.useState(1);

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
        sx={{ minWidth: { xs: '100%', md: '700px' } }}
      >
        <DialogTitle id="alert-dialog-title">
          {'Create New Package'}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} my={3}>
            <Grid item xs={12} lg={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Package Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Regular Price"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Offer Price"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} lg={8}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Package Details"
                  variant="outlined"
                />
                <Typography onClick={() => setDetailsCount(detailsCount + 1)}>
                  <AddCircleOutlineIcon
                    sx={{
                      color: 'secondary.main',
                      ml: 2,
                      fontSize: '30px',
                      cursor: 'pointer',
                    }}
                  />
                </Typography>
              </Box>
            </Grid>

            {[...Array(detailsCount || 0).keys()].map((item, i) => (
              <Grid key={i} item xs={12} lg={8}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Package Details"
                    variant="outlined"
                  />
                  <Typography onClick={() => setDetailsCount(detailsCount - 1)}>
                    <RemoveCircleOutlineIcon
                      sx={{
                        color: 'secondary.main',
                        ml: 2,
                        fontSize: '30px',
                        cursor: 'pointer',
                      }}
                    />
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
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

export default PackageModal;
