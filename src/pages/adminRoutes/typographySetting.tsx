import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';

const TypographySetting = () => {
  const [font, setFont] = React.useState('');
  const [language, setLanguage] = React.useState('');

  return (
    <AdminDashboardLayout>
      <Box sx={{ boxShadow: 'none', m: 5, minHeight: '100vh' }}>
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Typography Setting
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'text_color.main',
              fontWeight: '400',
              mt: '2',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 5,
            justifyContent: 'space-between',
            width: { xs: '100%', lg: '80%' },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Font
          </Typography>

          <FormControl sx={{ width: '400px', ml: 3 }}>
            <InputLabel id="demo-simple-select-label">Font Family</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={font}
              label="Font Family"
              onChange={(e) => setFont(e.target.value as string)}
            >
              <MenuItem value={10}>Poppins</MenuItem>
              <MenuItem value={20}>Roboto</MenuItem>
              <MenuItem value={30}>Arial</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 5,
            justifyContent: 'space-between',
            width: { xs: '100%', lg: '80%' },
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Language
          </Typography>

          <FormControl sx={{ width: '400px', ml: 3 }}>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Language"
              onChange={(e) => setLanguage(e.target.value as string)}
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Hindi</MenuItem>
              <MenuItem value={30}>Bangla</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" size="large" sx={{ mt: 7 }}>
          {' '}
          Save changes
        </Button>
      </Box>
    </AdminDashboardLayout>
  );
};

export default TypographySetting;
