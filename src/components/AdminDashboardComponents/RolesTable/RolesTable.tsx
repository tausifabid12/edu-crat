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
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const data = [
  {
    id: '1',

    roleName: 'Admin',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    id: '2',

    roleName: 'Admin',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    id: '3',

    roleName: 'Admin',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    id: '4',

    roleName: 'Admin',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
  {
    id: '5',

    roleName: 'Admin',
    dateCreated: 'em@ploee.com',
    recipient: 'John Doe',
  },
];

const RolesTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Serial no.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center"> Status</TableCell>
            <TableCell align="center"> Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.roleName}</TableCell>
              <TableCell align="center">
                <Switch {...label} defaultChecked />
              </TableCell>
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

export default RolesTable;
