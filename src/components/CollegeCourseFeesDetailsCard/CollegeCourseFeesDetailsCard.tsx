import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import NearMeIcon from '@mui/icons-material/NearMe';
import DownloadIcon from '@mui/icons-material/Download';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const CollegeCourseFeesDetailsCard = () => {
  const data = [
    {
      totalPrice: '100000',
      Installment1: '50000',
      Installment2: '50000',
      Installment3: '50000',
      Installment4: '50000',
      Installment5: '50000',
    },
  ];
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" sx={{ color: 'primary.main' }}>
        Courses Offered
      </Typography>
      {[1, 2, 3, 4, 5].map((item) => (
        <Paper key={item} elevation={3} sx={{ p: 3, mt: 4 }}>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ textAlign: 'center', color: 'primary.main' }}
              >
                Bachelor of Technology (B.Tech)
              </Typography>
              <Typography
                variant="body2"
                mb={3}
                sx={{ color: 'text_color.main' }}
              >
                Fulltime | On Campus
              </Typography>
            </Box>
            <Box mt={3}>
              <Button
                variant="outlined"
                sx={{ color: 'primary', borderColor: 'primary', mr: 3 }}
              >
                Apply Now <NearMeIcon sx={{ ml: 1 }} />
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: 'primary',
                  borderColor: 'primary',
                  mt: { xs: 2, md: 0 },
                }}
              >
                Brochure <DownloadIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Paper>
          <TableContainer
            sx={{
              py: 3,
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: 'bg_color.main' }}>
                  <TableCell align="center">Total Price</TableCell>
                  <TableCell align="center">Year 1</TableCell>
                  <TableCell align="center">Year 2</TableCell>
                  <TableCell align="center">Year 3</TableCell>
                  <TableCell align="center">Year 4</TableCell>
                  <TableCell align="center">Year 5</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">100000</TableCell>
                  <TableCell align="center">50000</TableCell>
                  <TableCell align="center">50000</TableCell>
                  <TableCell align="center">50000</TableCell>
                  <TableCell align="center">50000</TableCell>
                  <TableCell align="center">50000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ))}
    </Paper>
  );
};

export default CollegeCourseFeesDetailsCard;
