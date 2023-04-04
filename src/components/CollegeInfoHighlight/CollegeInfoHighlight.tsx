import React from 'react';
import { Button, Typography, Paper, Grid } from '@mui/material';

const CollegeInfoHighlight = () => {
  const data = [
    {
      title: 'College',
      detail: 'Indian Institute of Technology Kanpur',
    },
    {
      title: 'ESTD',
      detail: '1986',
    },
    {
      title: 'Type',
      detail: 'Public',
    },
    {
      title: 'Approved by',
      detail: 'UGC and AICTE',
    },
    {
      title: 'Courses Offered',
      detail:
        'Undergraduate - B. Tech, BSPostgraduate - M. Tech, MS, MBA, M. Sc, M. Design, M. Sc + Ph. D.',
    },
    {
      title: 'Application Mode',
      detail: 'Online',
    },
    {
      title: 'Admission Criteria',
      detail: 'Entrance Based',
    },
    {
      title: 'Official Website',
      detail: 'https://www.iitk.ac.in/',
    },
  ];
  return (
    <Paper elevation={0} sx={{ mt: 5 }}>
      <Typography
        variant="body1"
        sx={{ fontWeight: '600', color: 'primary.main', mb: 1 }}
      >
        IIT Kanpur Highlights
      </Typography>
      <Grid container>
        <Grid
          item
          xs={6}
          md={3}
          sx={{
            border: '0.5px solid #ddd',
            bgcolor: 'bg_color.light',
            p: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: '600',
            }}
          >
            Particular
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          md={9}
          sx={{
            border: '0.5px solid #ddd',
            bgcolor: 'bg_color.light',
            p: 2,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: '600',
            }}
          >
            Detail
          </Typography>
        </Grid>
        {data.map((item, i) => (
          <>
            <Grid
              key={i}
              item
              xs={6}
              md={3}
              sx={{
                border: '0.5px solid',
                borderRight: 'none',
                borderTop: i % 2 == 0 ? 'none' : '',
                borderBottom: i % 2 == 0 ? 'none' : '',
                borderColor: '#ddd',
                p: 2,
              }}
            >
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                {item.title}
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              md={9}
              sx={{
                border: '0.5px solid',

                borderTop: i % 2 == 0 ? 'none' : '',
                borderBottom: i % 2 == 0 ? 'none' : '',
                borderColor: '#ddd',
                p: 2,
              }}
            >
              <Typography variant="body2" sx={{ textAlign: 'center' }}>
                {item.detail}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </Paper>
  );
};

export default CollegeInfoHighlight;
