import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import ParaglidingIcon from '@mui/icons-material/Paragliding';
import Clients from '../Clients/Clients';
import Image from 'next/image';
const CollegeAwardsRecruiters = () => {
  return (
    <>
      <Paper elevation={3} sx={{ p: 3, my: 3 }}>
        <Typography color="primary" variant="h5" mb={5} fontWeight="bold">
          Awards
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>
            <ParaglidingIcon sx={{ color: 'primary.main', fontSize: '75px' }} />
          </Typography>
          <Box ml={5}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mb={1}
              sx={{ color: 'primary.main' }}
            >
              National Geoscience Award - 2016
            </Typography>
            <Typography variant="body2" mb={1}>
              The National Geoscience Award - 2016 was given to Prof. Javed N
              Malik for his significant contribution in the field of Disaster
              Management.
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, my: 3 }}>
        <Typography color="primary" variant="h5" mb={0} fontWeight="bold">
          Recruiters
        </Typography>
        <Typography
          variant="body2"
          mb={5}
          fontWeight="bold"
          sx={{ color: 'text_color.main' }}
        >
          243 Companies
        </Typography>
        <Box>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src="/assets/clients/2.svg"
                height={100}
                width={100}
                alt="client"
                style={{ width: '50%' }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image
                src="/assets/clients/1.svg"
                height={100}
                width={100}
                alt="client"
                style={{ width: '40%' }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Image
                src="/assets/clients/4.svg"
                height={100}
                width={100}
                alt="client"
                style={{ width: '50%' }}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default CollegeAwardsRecruiters;
