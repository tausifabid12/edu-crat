import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import Image from 'next/image';

const ExamCard = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', pt: 3, px: 1 }}>
        <Image
          src="/assets/exam.jpg"
          height={80}
          width={80}
          className="h-20 w-20 rounded-full"
          alt="/"
        />
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: '600', ml: 2, color: 'primary.main' }}
          >
            Common Admission Test
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: '600', ml: 2, color: 'text_color.main' }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.....
          </Typography>
        </Box>
      </Box>
      <Paper
        sx={{
          bgcolor: 'bg_color.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ fontWeight: '600', ml: 2, color: 'primary.main' }}
          >
            Answer key
          </Typography>
        </Box>
        <Button variant="outlined">Read more</Button>
      </Paper>
    </Paper>
  );
};

export default ExamCard;
