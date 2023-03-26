import React from 'react';
import Button from '@mui/material/Button';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface CampaignSelectProps {
  setPageName: React.Dispatch<React.SetStateAction<string>>;
}

const CampaignSelect: React.FC<CampaignSelectProps> = ({ setPageName }) => {
  const [value, setValue] = React.useState('Slider');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <DialogTitle id="alert-dialog-title">Select Campaign</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <TextField fullWidth label="Campaign name   " id="fullWidth" />

          <FormControl sx={{ mt: 3 }}>
            <FormLabel id="demo-radio-buttons-group-label">
              Campaign Type
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              //   defaultValue="Slider"
              value={value}
              onChange={handleChange}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Slider"
                control={<Radio />}
                label="Slider"
              />
              <FormControlLabel
                value="Listing"
                control={<Radio />}
                label="Listing"
              />
              <FormControlLabel
                value="College page"
                control={<Radio />}
                label="College page"
              />
              <FormControlLabel
                value="Banner"
                control={<Radio />}
                label="Banner"
              />
              <FormControlLabel
                value="Video"
                control={<Radio />}
                label="Video"
              />
            </RadioGroup>
          </FormControl>
        </Box>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ fontSize: '13px', mt: 2, mx: 1 }}
        >
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPageName(value)} autoFocus>
          next
        </Button>
      </DialogActions>
    </>
  );
};

export default CampaignSelect;
