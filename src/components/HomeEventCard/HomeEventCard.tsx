import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';

const HomeEventCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' },
        p: { xs: '1', md: 3 },
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', px: 1 }}>
        <Image
          src="/assets/exam.jpg"
          height={80}
          width={80}
          className="h-20 w-20 rounded-lg"
          alt="/"
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: '600', ml: 2, color: 'primary.main' }}
          >
            Capdm Executive Conference
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: '600',
              ml: 2,
              color: 'text_color.main',
            }}
          >
            by Amanda Hudson / Ceo of Confer
          </Typography>
        </Box>
      </Box>
      <Box sx={{ my: { xs: 2, md: '0' } }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: '600', ml: 2, color: 'primary.main' }}
        >
          12-14 June 2023
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: '600',
            ml: 2,
            color: 'text_color.main',
          }}
        >
          Mountain Resort, Phoenix, USA
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'primary.main',
          color: '#fff',
          px: 6,
          py: 1.3,
          borderRadius: '20px',
          my: { xs: 2, md: '0' },
        }}
      >
        {' '}
        View More
      </Button>
    </Box>
  );
};

export default HomeEventCard;
