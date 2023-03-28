import React, { useState } from 'react';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import DashboardCourseModule from '@/components/DashboardCourseModule/DashboardCourseModule';

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

const Courses = () => {
  const [type, setType] = useState('');
  const [skills, setSkills] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof skills>) => {
    const {
      target: { value },
    } = event;
    setSkills(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const names = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Angular',
    'Django',
    'Python',
  ];

  return (
    <CollegeDashboardLayout>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'white',
          borderRadius: '14px',
          px: { xs: 1, sm: 5 },
          py: 3,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Create Course
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'text_color.main', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          mt={3}
          sx={{ borderTop: '1px solid #E5E5E5', pt: 1, width: '100%' }}
        >
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Course name"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Duration"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} lg={4} p={1}>
            <TextField
              type="file"
              fullWidth
              id="fullWidth"
              label="Brochure"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} p={1}>
            <TextField
              type="file"
              fullWidth
              id="fullWidth"
              label="Image"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              id="outlined-basic"
              label="Video Url"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Age"
                onChange={(e) => setType(e.target.value as string)}
              >
                <MenuItem selected value={'Online'}>
                  Online
                </MenuItem>
                <MenuItem value={'Recorded'}>Recorded</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} lg={4} p={1}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-checkbox-label">Skills</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={skills}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={skills.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={4} p={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Start Date" sx={{ width: '100%' }} />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} lg={4} p={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="End Date" sx={{ width: '100%' }} />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              multiline
              rows={4}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              sx={{ width: '100%' }}
            />
          </Grid>
        </Grid>
        <DashboardCourseModule />
        <button className="bg-secondary text-white px-10 py-4 mt-5 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary">
          Update Changes
        </button>
      </Box>
    </CollegeDashboardLayout>
  );
};

export default Courses;
