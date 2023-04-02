import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const data = [
  {
    EmployeeId: '1',

    EmployeeName: 'Employee 1',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    EmployeeId: '2',

    EmployeeName: 'Employee 1',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    EmployeeId: '3',

    EmployeeName: 'Employee 1',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    EmployeeId: '4',

    EmployeeName: 'Employee 1',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    EmployeeId: '5',

    EmployeeName: 'Employee 1',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
];

const RolesPeopleTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center"> Role</TableCell>
            <TableCell align="center"> Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.EmployeeId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.EmployeeId}</TableCell>
              <TableCell align="center">{row.EmployeeName}</TableCell>
              <TableCell align="center">Admin </TableCell>
              <TableCell align="center">
                <Paper elevation={0}>
                  <IconButton aria-label="delete" size="large">
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                  </IconButton>
                </Paper>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RolesPeopleTable;
