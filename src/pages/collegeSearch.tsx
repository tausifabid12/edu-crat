import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, NoSsr } from '@mui/material';
import Navbar from '@/components/Navbar/Navbar';
import CollegeSearchCard from '@/components/CollegeSearchCard/CollegeSearchCard';
import CollegeSearchFilters from '@/components/CollegeSearchFilters/CollegeSearchFilters';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CollegeAdvertise from '@/components/CollegeAdvertise/CollegeAdvertise';
import TextField from '@mui/material/TextField';

// const coursesBody = styled(Box)(({ theme }) => ({
//   width: '100%',
// }));

const CollegeSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NoSsr>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: '130px' }}>
        <Grid container spacing={1} mt={0}>
          <Grid
            item
            xs={12}
            md={3}
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:block w-full relative `}
          >
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              aria-label="delete"
              size="large"
              sx={{
                position: 'absolute',
                top: '6px',
                right: '10px',
                zIndex: 1000,
                display: { xs: 'block', lg: 'none' },
              }}
            >
              <HighlightOffIcon sx={{ fontsize: '30px' }} />
            </IconButton>

            <CollegeSearchFilters />
          </Grid>
          <Grid item xs={12} md={9}>
            <Paper elevation={2} sx={{ p: 2, borderRadius: '10px' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ color: 'primary.main', fontWeight: '600' }}
                >
                  Colleges
                </Typography>
                <TextField
                  label="Search"
                  id="outlined-size-small"
                  size="small"
                  sx={{ display: { xs: 'none', lg: 'block' } }}
                />
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden px-3 py-1 bg-secondary text-white rounded-lg"
                >
                  Filter
                </button>
              </Box>
            </Paper>
            <Grid container spacing={4} mt={0}>
              {[1, 2, 3, 4, 5].map((item) => (
                <Grid key={item} item xs={12} lg={12}>
                  <CollegeSearchCard />
                </Grid>
              ))}
              <Grid item xs={12}>
                <CollegeAdvertise />
              </Grid>
              {[1, 2, 3, 4, 5].map((item) => (
                <Grid key={item} item xs={12} lg={12}>
                  <CollegeSearchCard />
                </Grid>
              ))}
              <Grid item xs={12} lg={2}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </NoSsr>
  );
};

export default CollegeSearch;
