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
    EventName: 'Event 1',
    createdBy: 'Admin',
    EventDate: '12/12/2021',
    DateCreated: '12/12/2021',
  },
  {
    EventName: 'Event 1',
    createdBy: 'Admin',
    EventDate: '12/12/2021',
    DateCreated: '12/12/2021',
  },
  {
    EventName: 'Event 1',
    createdBy: 'Admin',
    EventDate: '12/12/2021',
    DateCreated: '12/12/2021',
  },
  {
    EventName: 'Event 1',
    createdBy: 'Admin',
    EventDate: '12/12/2021',
    DateCreated: '12/12/2021',
  },
  {
    EventName: 'Event 1',
    createdBy: 'Admin',
    EventDate: '12/12/2021',
    DateCreated: '12/12/2021',
  },
];

const NotificationTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Event Name</TableCell>
            <TableCell align="center">Created By</TableCell>
            <TableCell align="center">Event Date</TableCell>
            <TableCell align="center">Date Created</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.EventName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{item.EventName}</TableCell>

              <TableCell align="center">{item.createdBy}</TableCell>
              <TableCell align="center">{item.EventDate}</TableCell>
              <TableCell align="center">{item.DateCreated}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" size="small">
                  View
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

export default NotificationTable;
