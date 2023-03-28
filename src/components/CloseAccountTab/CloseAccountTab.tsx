import React from 'react';
import { Stack, TextField, Typography } from '@mui/material';

const CloseAccountTab = () => {
  return (
    <Stack>
      <Stack spacing={1} ml={2} sx={{ py: 3 }}>
        <Typography variant="h6" sx={{ color: 'primary.main' }}>
          Close account
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text_color.main' }}>
          Warning: If you close your account, you will be unsubscribed from all
          your 5 courses, and will lose access forever.
        </Typography>
      </Stack>
      <Stack spacing={4} sx={{ width: { xs: '100%', sm: '50%' } }}>
        <TextField
          id="outlined-basic"
          label=" Enter your password to confirm"
          variant="outlined"
          sx={{ width: '100%' }}
        />

        <button className="bg-secondary w-48 text-white py-4 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary">
          Close Account
        </button>
      </Stack>
    </Stack>
  );
};

export default CloseAccountTab;
