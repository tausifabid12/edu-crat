import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Grid, TextField, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Paper from '@mui/material/Paper';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const CreateMenuModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  const [submenu, setSubmenu] = React.useState<number>(0);
  const [subSubmenu, setSubSubmenu] = React.useState<number>(0);
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
        <DialogTitle id="alert-dialog-title">{'Create New Menu'}</DialogTitle>
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
                lg={8}
                p={1}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <TextField fullWidth label="Manu" id="fullWidth" />
                <Paper
                  onClick={() => setSubmenu(submenu + 1)}
                  elevation={0}
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <AddCircleOutlineIcon
                    sx={{
                      fontSize: '28px',
                      color: 'secondary.main',
                      cursor: 'pointer',
                      mx: 1,
                    }}
                  />
                  <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                    Submenu
                  </Typography>
                </Paper>
              </Grid>
              {[...Array(submenu || 0).keys()].map((item, i) => (
                <Grid key={i} item xs={12} lg={8} ml={8} mt={1}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Sub manu"
                      variant="outlined"
                    />
                    <Typography
                    //   onClick={() => setDetailsCount(detailsCount - 1)}
                    >
                      <RemoveCircleOutlineIcon
                        onClick={() => setSubmenu(submenu - 1)}
                        sx={{
                          color: 'secondary.main',
                          ml: 2,
                          fontSize: '30px',
                          cursor: 'pointer',
                        }}
                      />
                    </Typography>
                    <Paper
                      onClick={() => setSubSubmenu(subSubmenu + 1)}
                      elevation={0}
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <AddCircleOutlineIcon
                        sx={{
                          fontSize: '28px',
                          color: 'secondary.main',
                          cursor: 'pointer',
                          mx: 1,
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{ color: 'secondary.main' }}
                      >
                        Sub Submenu
                      </Typography>
                    </Paper>
                  </Box>

                  {/* ----------- sub sub menu ---------- */}
                  <Grid container spacing={1}>
                    {[...Array(subSubmenu || 0).keys()].map((item, i) => (
                      <Grid
                        key={i}
                        item
                        xs={12}
                        lg={7}
                        mt={1}
                        ml={7}
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <TextField
                          fullWidth
                          id="outlined-basic"
                          label="Sub Sub manu"
                          variant="outlined"
                        />
                        <RemoveCircleOutlineIcon
                          onClick={() => setSubSubmenu(subSubmenu - 1)}
                          sx={{
                            color: 'secondary.main',
                            ml: 2,
                            fontSize: '23px',
                            cursor: 'pointer',
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              ))}
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

export default CreateMenuModal;
