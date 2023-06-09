import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [
  {
    EventId: '1',
    EventType: 'Slider',
    EventName: 'Event 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    EventId: '2',
    EventType: 'Slider',
    EventName: 'Event 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    EventId: '3',
    EventType: 'Slider',
    EventName: 'Event 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    EventId: '4',
    EventType: 'Slider',
    EventName: 'Event 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
  {
    EventId: '5',
    EventType: 'Slider',
    EventName: 'Event 1',
    dateCreated: '2021-09-01',
    recipient: 'John Doe',
    clickRate: '10%',
    openRate: '20%',
    progress: '50%',
  },
];

const CollegeEventTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Event ID</TableCell>
            <TableCell align="center">Event Type</TableCell>
            <TableCell align="center">Event Name</TableCell>
            <TableCell align="center">Date Created</TableCell>
            <TableCell align="center"> Recipient</TableCell>
            <TableCell align="center"> Click Rate</TableCell>
            <TableCell align="center"> Open Rate</TableCell>
            <TableCell align="center"> Progress</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.EventId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.EventId}
              </TableCell>
              <TableCell align="center">{row.EventType}</TableCell>
              <TableCell align="center">{row.EventName}</TableCell>
              <TableCell align="center">{row.dateCreated}</TableCell>
              <TableCell align="center">{row.clickRate}</TableCell>
              <TableCell align="center">{row.openRate}</TableCell>
              <TableCell align="center">{row.progress}</TableCell>
              <TableCell align="center">{row.progress}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CollegeEventTable;
