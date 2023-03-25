import React from 'react';
import {
  Box,
  FormControlLabel,
  FormLabel,
  Grid,
  ListItemText,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Editor from '@/components/Editor/Editor';

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
  'Web development',
  'Mobile App development',
  'Civil Engineering',
  'Chemical Engineering',
  'Chemistry',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const Blogs = () => {
  const [category, setCategory] = React.useState('');
  const [tagName, setTagName] = React.useState<string[]>([]);

  const handleTags = (event: SelectChangeEvent<typeof tagName>) => {
    const {
      target: { value },
    } = event;
    setTagName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <CollegeDashboardLayout>
      <Box
        sx={{
          width: '100%',

          bgcolor: 'white',
          borderRadius: '14px',
          px: { xs: 1, sm: 5 },
          py: 7,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Create new blog
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.contrastText', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            spacing={0}
            sx={{
              backgroundColor: 'transparent',
            }}
          >
            <Grid item xs={12} lg={6} p={1}>
              <TextField fullWidth label="Tittle" id="fullWidth" />
            </Grid>

            <Grid item xs={12} lg={6} p={1}>
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

            <Grid item xs={12} lg={6} p={1}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value as string)}
                >
                  <MenuItem value={'Development'}>Development</MenuItem>
                  <MenuItem value={'Arts'}>Arts</MenuItem>
                  <MenuItem value={'Business'}>Business</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={6} p={1}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={tagName}
                  onChange={handleTags}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={tagName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} lg={12} p={1}>
              <Editor />
              {/* <TextField
                fullWidth
                id="fullWidth"
                multiline
                rows={6}
                label="Description"
              /> */}
            </Grid>
            <Grid item xs={12} lg={12} p={1}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  When do you want to post?
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="immediately"
                    control={<Radio />}
                    label="Post Immediately"
                  />
                  <FormControlLabel
                    value="later"
                    control={<Radio />}
                    label="Post Later"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <button className="bg-secondary text-white px-14 py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary mt-4 ml-1">
            Create Event
          </button>
        </Box>
      </Box>
    </CollegeDashboardLayout>
  );
};

export default Blogs;
