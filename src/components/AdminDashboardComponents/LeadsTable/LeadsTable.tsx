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
    date: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    date: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    date: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    date: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
  },
  {
    name: 'Rahul',
    email: 'ra@hul.com',
    phone: '1234567890',
    college: 'IIT',
    date: '12/12/2021',
    stream: 'CSE',
    status: 'visible',
  },
];

const LeadsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">College</TableCell>
            <TableCell align="right">Stream</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Checkbox {...label} />
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.college}</TableCell>
              <TableCell align="right">{item.stream}</TableCell>
              <TableCell align="right">{item.status}</TableCell>
              <TableCell align="right">
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

export default LeadsTable;
