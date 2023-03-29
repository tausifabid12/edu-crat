import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
  {
    EventName: 'Rahul',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    EventName: 'Rahul',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    EventName: 'Rahul',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    EventName: 'Rahul',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    EventName: 'Rahul',
    date: '12/12/2021',
    enrolled: 23,
  },
];

const EventTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Enrolled</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.EventName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{item.EventName}</TableCell>

              <TableCell align="right">{item.date}</TableCell>
              <TableCell align="right">{item.enrolled}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="delete" size="small">
                  <ModeEditOutlineIcon color="success" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
``;

export default EventTable;
