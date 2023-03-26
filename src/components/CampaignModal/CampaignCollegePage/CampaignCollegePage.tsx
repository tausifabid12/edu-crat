import React from 'react';
import { Grid, TextField } from '@mui/material';

import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Scrollbars } from 'react-custom-scrollbars-2';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';

interface CampaignProps {
  setPageName: React.Dispatch<React.SetStateAction<string>>;
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

const names = ['CSE', 'EEE', 'ICE', 'BBA', 'MBA', 'ECE', 'CIVIL'];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CampaignCollegePage: React.FC<CampaignProps> = ({ setPageName }) => {
  const theme = useTheme();
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

  return (
    <>
      <DialogTitle id="alert-dialog-title">College page Campaign</DialogTitle>

      <DialogContent sx={{ minHeight: '400px' }}>
        <Scrollbars autoHide style={{ width: '100%', minHeight: '400px' }}>
          <Grid
            container
            spacing={3}
            mt={3}
            sx={{ pt: 1, mb: 4, width: '100%' }}
          >
            <Grid item xs={12} md={6}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-multiple-name-label">Course</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label=" State"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                sx={{ width: '100%' }}
              />
            </Grid>

            <Grid item xs={12} lg={6} p={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Start Date" sx={{ width: '100%' }} />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} lg={6} p={1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="End Date" sx={{ width: '100%' }} />
              </LocalizationProvider>
            </Grid>
          </Grid>
        </Scrollbars>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontSize: '13px', mt: 2, mx: 1 }}
        >
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setPageName('Select')} autoFocus>
          Back
        </Button>
        <Button autoFocus>Submit</Button>
      </DialogActions>
    </>
  );
};

export default CampaignCollegePage;
