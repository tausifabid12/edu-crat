import * as React from 'react';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';

const leads = [
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
  {
    name: 'Rahul',
    email: 'a@gmail.com',
    mobile: '1234567890',
    class: '12th',
    steam: 'Engineering',
  },
];

const Leads = () => {
  return (
    <CollegeDashboardLayout>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'white',
          borderRadius: '14px',
          px: { xs: 1, sm: 5 },
          py: 3,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
        }}
      >
        <Box mb={3}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Leads
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'secondary.contrastText', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <TableContainer
          component={'div'}
          sx={{
            width: '100%',
            minHeight: '100%',
            bgcolor: 'white',
          }}
        >
          <Table sx={{ minWidth: '100%' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S no.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Class</TableCell>
                <TableCell align="center">Steam</TableCell>
                <TableCell align="center">Mobile</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leads.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ py: 3 }}>
                    {i + 1}
                  </TableCell>
                  <TableCell component="th" scope="row" sx={{ py: 3 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.class}</TableCell>
                  <TableCell align="center">{row.steam}</TableCell>
                  <TableCell align="center">{row.mobile}</TableCell>
                  <TableCell align="center">
                    <button className="bg-primary text-white px-2 py-1 rounded-lg">
                      Comment
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </CollegeDashboardLayout>
  );
};
export default Leads;
