import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const MessageInfo = () => {
  return (
    <Box sx={{ minHeight: '80vh', overflow: 'auto' }}>
      <Typography
        variant="body1"
        sx={{
          color: 'primary.main',
          fontWeight: '500',
          borderBottom: '1px solid #E5E5E5',
          boxShadow: '0px 1px 0px #E5E5E5',
          py: 2,
        }}
      >
        Basic Information
      </Typography>

      {[1, 2, 3, 4, 5].map((item) => (
        <Box
          key={item}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
          }}
        >
          <Image src="/assets/user.png" height={50} width={50} alt="" />
          <Stack spacing={0}>
            <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
              Darlene Robertson
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: 'secondary.contrastText' }}
            >
              Head of Development
            </Typography>
          </Stack>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.contrastText' }}
          >
            35min
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MessageInfo;
