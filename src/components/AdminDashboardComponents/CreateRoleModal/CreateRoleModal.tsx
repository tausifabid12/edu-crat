import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DialogContentText, Grid, TextField } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

const CreateRoleModal: React.FC<ModalProps> = ({ openModal, setOpenModal }) => {
  const [role, setRole] = React.useState('');
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const fields = ['Dashboard', 'Campaigns', 'Support', 'Roles'];

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ minWidth: { xs: '100%', md: '700px' } }}
      >
        <DialogTitle id="alert-dialog-title">{'Create User Role'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} my={3}>
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Employee</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Age"
                  onChange={(event) => setRole(event.target.value as string)}
                >
                  <MenuItem value={20}>Akbar</MenuItem>
                  <MenuItem value={30}>Salman</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Role Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Fields
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {fields.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
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

export default CreateRoleModal;
