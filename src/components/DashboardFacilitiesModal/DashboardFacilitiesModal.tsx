import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

interface DashboardFacilitiesModalProps {
  handleModalClose: () => void;
  handleClickModalOpen: () => void;
  openModal: boolean;
}

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

const names = [
  'Hostel',
  'Library',
  'Transportation',
  'Sports Space',
  ' Laboratories',
  'Furnishings',
];

const DashboardFacilitiesModal: React.FC<DashboardFacilitiesModalProps> = ({
  handleModalClose,
  handleClickModalOpen,
  openModal,
}) => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="responsive-dialog-title"
        sx={{
          '& .MuiDialog-paper': { borderRadius: '11px', p: { xs: 3, sm: 1 } },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          Add new Facilities
        </DialogTitle>
        <DialogContent>
          <div>
            <FormControl sx={{ m: 1, width: 500 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Facilities
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
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <DialogContentText sx={{ fontSize: '13px', mt: 3 }}>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleModalClose}>
            Close
          </Button>
          <Button onClick={handleModalClose} autoFocus>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DashboardFacilitiesModal;
