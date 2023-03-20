import React from 'react';

import { Box, Stack, TextField } from '@mui/material';

const EditPasswordTab = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '14px',
        p: { xs: 2, sm: 4 },
      }}
    >
      <Stack spacing={4} sx={{ width: { xs: '100%', sm: '50%' } }}>
        <TextField
          id="outlined-basic"
          label=" Current Password"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          id="outlined-basic"
          label=" New Password"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          id="outlined-basic"
          label=" Confirm Password"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <button className="bg-secondary w-48 text-white py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary">
          Update Changes
        </button>
      </Stack>
    </Box>
  );
};

export default EditPasswordTab;
