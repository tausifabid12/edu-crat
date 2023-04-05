import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FeedIcon from '@mui/icons-material/Feed';

const HomeTopFeatures = () => {
  const data = [
    {
      icon: (
        <AccountBalanceIcon
          sx={{ fontSize: '30px', mx: 'auto', color: 'text_color.main' }}
        />
      ),
      title: 'Top Colleges',
    },
    {
      icon: (
        <AssignmentIcon
          sx={{ fontSize: '30px', mx: 'auto', color: 'text_color.main' }}
        />
      ),
      title: 'Explore Exam',
    },
    {
      icon: (
        <FeedIcon
          sx={{ fontSize: '30px', mx: 'auto', color: 'text_color.main' }}
        />
      ),
      title: 'Get Admission',
    },
    {
      icon: (
        <NewspaperIcon
          sx={{ fontSize: '30px', mx: 'auto', color: 'text_color.main' }}
        />
      ),
      title: 'Latest News',
    },
  ];
  return (
    <Paper elevation={0} sx={{ bgcolor: 'bg_color.light' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          py: 5,
          maxWidth: '1536px',
          mx: 'auto',
        }}
      >
        {data.map((item) => (
          <Paper
            key={item.title}
            elevation={3}
            sx={{ bgcolor: 'white', py: 3, px: 8, borderRadius: '10px' }}
          >
            <Typography sx={{ mx: 'auto', textAlign: 'center' }}>
              {item.icon}
            </Typography>
            <Typography sx={{ fontWeight: '600', mt: 2 }}>
              {item.title}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
};

export default HomeTopFeatures;
