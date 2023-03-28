import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const DashboardTopCards = () => {
  const cardData = [
    {
      title: 'Leads',
      icon: <AssignmentIndIcon />,
      count: 987,
      color:
        'linear-gradient(-20deg, rgb(43, 88, 118) 0%, rgb(78, 67, 118) 100%)',
    },
    {
      title: 'Subscriptions',
      icon: <AssignmentIndIcon />,
      count: 987,
      color:
        'linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) ',
    },
    {
      title: 'Transactions',
      icon: <AssignmentIndIcon />,
      count: '$5987',
      color: 'rgb(87, 202, 34)',
    },
    {
      title: 'Total Students',
      icon: <AssignmentIndIcon />,
      count: 987,
      color: 'rgb(85, 105, 255)',
    },
  ];

  return (
    <Paper elevation={0}>
      <Grid container spacing={3}>
        {cardData.map((item, index) => (
          <Grid key={index} item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: 'transparent' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    background: `${item.color}`,
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AssignmentIndIcon sx={{ color: 'white' }} />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text_color.main', pl: 1, fontWeight: '600' }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                {item.count}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text_color.main' }}>
                +36% from last month
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default DashboardTopCards;
