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
  openPeopleModal: boolean;
  setOpenPeopleModal: (open: boolean) => void;
}

const AddPeopleModal: React.FC<ModalProps> = ({
  openPeopleModal,
  setOpenPeopleModal,
}) => {
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
    setOpenPeopleModal(false);
  };

  const fields = ['Employee-1', 'Employee-2', 'Employee-3', 'Employee-4'];

  return (
    <div>
      <Dialog
        open={openPeopleModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          minWidth: { xs: '100%', md: '700px' },
          '& .MuiDialog-paper': {
            borderRadius: '11px',
            minWidth: { xs: '100%', sm: '600px' },
            p: { xs: 3, sm: 1 },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{'Add People'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} my={3}>
            <Grid item xs={12} lg={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Age"
                  onChange={(event) => setRole(event.target.value as string)}
                >
                  <MenuItem value={20}>Admin</MenuItem>
                  <MenuItem value={30}>Supper Admin</MenuItem>
                  <MenuItem value={30}>Support </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={12}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Employee
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

export default AddPeopleModal;
