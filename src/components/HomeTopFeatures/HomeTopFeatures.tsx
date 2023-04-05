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
          sx={{ fontSize: '30px', mx: 'auto', color: 'primary.main' }}
        />
      ),
      title: 'Top Colleges',
    },
    {
      icon: (
        <AssignmentIcon
          sx={{ fontSize: '30px', mx: 'auto', color: 'primary.main' }}
        />
      ),
      title: 'Explore Exam',
    },
    {
      icon: (
        <FeedIcon
          sx={{ fontSize: '30px', mx: 'auto', color: 'primary.main' }}
        />
      ),
      title: 'Get Admission',
    },
    {
      icon: (
        <NewspaperIcon
          sx={{ fontSize: '30px', mx: 'auto', color: 'primary.main' }}
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
          flexWrap: 'wrap',
          py: 2,
          maxWidth: '1536px',
          mx: 'auto',
        }}
      >
        {data.map((item) => (
          <Paper
            key={item.title}
            elevation={0}
            sx={{
              py: 3,
              px: { xs: 0, lg: 8 },
              display: 'flex',
              width: { xs: '100%', lg: 'auto' },
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ mx: 'auto', textAlign: 'center' }}>
                {item.icon}
              </Typography>
              <Typography sx={{ fontWeight: '600', ml: 1 }}>
                {item.title}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Paper>
  );
};

export default HomeTopFeatures;
