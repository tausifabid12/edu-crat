import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { Box, Button, Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const HomeSearch = () => {
  const [course, setCourse] = React.useState('courses');
  const [location, setLocation] = React.useState('location');
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing={1}
      mt={3}
      sx={{ px: { xs: 4, sm: 10, lg: 0 } }}
    >
      <FormControl sx={{ width: { xs: '100%', lg: '250px' } }}>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          placeholder="Course"
          value={course}
          label="Course"
          onChange={(e) => setCourse(e.target.value as string)}
          sx={{
            backgroundColor: 'white',
            width: '100%',
            py: 0.5,
            '& > fieldset': { border: 'none' },
          }}
        >
          <MenuItem value={'courses'} disabled>
            courses
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: { xs: '100%', lg: '250px' }, mx: 'auto' }}>
        <Select
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Age"
          onChange={(e) => setLocation(e.target.value as string)}
          sx={{
            backgroundColor: 'white',
            py: 0.5,
            '& > fieldset': { border: 'none' },
          }}
        >
          <MenuItem value={'location'} disabled>
            Location
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{ backgroundColor: 'secondary.main', color: 'white', px: 4 }}>
        Search
      </Button>
    </Stack>
  );
};

export default HomeSearch;
