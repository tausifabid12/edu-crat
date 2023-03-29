import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    lastLogin: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
    class: '12',
    state: 'karnataka',
    city: 'bangalore',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    lastLogin: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
    class: '12',
    state: 'karnataka',
    city: 'bangalore',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    lastLogin: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
    class: '12',
    state: 'karnataka',
    city: 'bangalore',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    lastLogin: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
    class: '12',
    state: 'karnataka',
    city: 'bangalore',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    lastLogin: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
    class: '12',
    state: 'karnataka',
    city: 'bangalore',
  },
];

const UserTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Serial No.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Mobile</TableCell>
            <TableCell align="center">Last Login</TableCell>
            <TableCell align="center">College</TableCell>
            <TableCell align="center">Stream</TableCell>
            <TableCell align="center">Class</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">
                {'**' + item.phone.slice(2, item.phone.length - 4) + '****'}
              </TableCell>
              <TableCell align="center">{item.lastLogin}</TableCell>
              <TableCell align="center">{item.college}</TableCell>
              <TableCell align="center">{item.stream}</TableCell>
              <TableCell align="center">{item.class}</TableCell>
              <TableCell align="center">{item.state}</TableCell>
              <TableCell align="center">{item.city}</TableCell>
              <TableCell align="center">
                <Button variant="contained" size="small">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
``;

export default UserTable;
