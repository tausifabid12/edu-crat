import React from 'react';
import {
  Grid,
  TextField,
  Paper,
  Checkbox,
  Typography,
  Button,
} from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';

interface AddCollegeGeneralTabProps {
  setValue: (value: number) => void;
  value: number;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const AddCollegeGeneralTab: React.FC<AddCollegeGeneralTabProps> = ({
  setValue,
  value,
}) => {
  const [type, setType] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };
  return (
    <Paper elevation={0}>
      <Grid container spacing={3} sx={{ width: { xs: '100%', lg: '70%' } }}>
        <Grid item xs={12} lg={12}>
          <TextField multiline rows={4} fullWidth label="Bio" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField fullWidth label="ESTD" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField fullWidth label="Address" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField fullWidth label="Ranking" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'Public'}>Public</MenuItem>
              <MenuItem value={'Private'}>Private</MenuItem>
              <MenuItem value={'Deemed'}>Deemed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Paper elevation={0}>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Facilities
        </Typography>
        <Grid container spacing={3} sx={{ width: { xs: '100%', lg: '70%' } }}>
          {[
            'Hostel',
            'Cafeteria',
            'Library',
            'Sports',
            'Gym',
            'Auditorium',
          ].map((item) => (
            <Grid
              key={item}
              item
              xs={4}
              lg={3}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Checkbox {...label} />
              <Paper
                elevation={0}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <OtherHousesIcon sx={{ mr: 1 }} />
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Button
        onClick={() => setValue(value + 1)}
        variant="outlined"
        color="secondary"
        size="large"
        sx={{ mt: 3 }}
      >
        next
      </Button>
    </Paper>
  );
};

export default AddCollegeGeneralTab;
