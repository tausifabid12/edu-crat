import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/Feed';

const HomeCategory = () => {
  const data = [
    {
      icon: <AccountBalanceIcon />,
      title: 'Engineering',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Medical',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Top Colleges',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Top Colleges',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Top Colleges',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Top Colleges',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Top Colleges',
    },
    {
      icon: <AccountBalanceIcon />,
      title: 'Top Colleges',
    },
  ];
  return (
    <Paper sx={{ p: 8 }}>
      <Typography
        variant="h5"
        color="primary"
        sx={{ fontWeight: '600', textAlign: 'center', mb: 3 }}
      >
        Explore Category
      </Typography>
      <Grid container>
        {data.map((item, i) => (
          <Grid
            key={item.title}
            item
            xs={6}
            lg={3}
            sx={{
              border: '0.5px solid',
              borderRight: i % 2 !== 0 ? 'none' : '',
              borderLeft: i % 2 !== 0 ? 'none' : '',
              borderColor: '#ddd',
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 1,
            }}
          >
            <Typography
              sx={{
                color: 'primary.main',
                border: '0.5px solid',
                borderColor: 'primary.main',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {item.icon}
            </Typography>
            <Typography variant="body1" color="primary" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text_color.main' }}>
              2333 Colleges
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default HomeCategory;
