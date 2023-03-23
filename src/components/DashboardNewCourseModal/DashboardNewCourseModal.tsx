import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface DashboardNewCourseModalProps {
  setOpenModal: (openModal: boolean) => void;
  openModal: boolean;
}

const DashboardNewCourseModal: React.FC<DashboardNewCourseModalProps> = ({
  setOpenModal,
  openModal,
}) => {
  const [section, setSection] = React.useState('');
  const [duration, setDuration] = React.useState(0);
  const [name, setName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSection(event.target.value as string);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  React.useEffect(() => {
    console.log(duration);
    // const installmentFields =
  }, [duration]);

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
            minWidth: { xs: '100%', sm: '700px' },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Add New Course</DialogTitle>
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Name</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    label="Name"
                    onChange={(e) => setName(e.target.value as string)}
                  >
                    <MenuItem value={'CSE'}>CSE</MenuItem>
                    <MenuItem value={'EEE'}>EEE</MenuItem>
                    <MenuItem value={'ETA'}>ETA</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Section
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={section}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Engineering</MenuItem>
                      <MenuItem value={20}>Medical</MenuItem>
                      <MenuItem value={30}>Arts</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <TextField
                  onChange={(e) => setDuration(parseFloat(e.target.value))}
                  fullWidth
                  label="Duration"
                  type="number"
                  id="fullWidth"
                />
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="Total Price" id="fullWidth" />
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="Type" id="fullWidth" />
              </Grid>
              <Grid item xs={12} lg={6} p={1}>
                <TextField fullWidth label="Approved by" id="fullWidth" />
              </Grid>
              {[...Array((duration === 1 ? 0 : duration) || 0).keys()].map(
                (item, i) => (
                  <Grid key={i + 1} item xs={12} lg={6} p={1}>
                    <TextField
                      fullWidth
                      label={`Installment-${item + 1}`}
                      id="fullWidth"
                    />
                  </Grid>
                )
              )}
            </Grid>
            {/* <button className="bg-secondary text-white px-10 py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary mt-6 ml-1">
              Update Changes
            </button> */}
          </Box>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Add New Course
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DashboardNewCourseModal;
