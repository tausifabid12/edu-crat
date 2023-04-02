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
import Switch from '@mui/material/Switch';

const SwitchLabel = { inputProps: { 'aria-label': 'Switch demo' } };

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
  {
    Name: 'Course -1',
    desc: 'lor,em ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.....',
    enrolled: 23,
  },
  {
    Name: 'Course -1',
    desc: 'lor,em ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.....',
    enrolled: 23,
  },
  {
    Name: 'Course -1',
    desc: 'lor,em ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.....',
    enrolled: 23,
  },
  {
    Name: 'Course -1',
    desc: 'lor,em ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.....',
    enrolled: 23,
  },
  {
    Name: 'Course -1',
    desc: 'lor,em ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.....',
    enrolled: 23,
  },
];

const CollegeCourseTable = () => {
  return (
    <TableContainer
      sx={{
        bgcolor: 'white',
        borderRadius: '14px',
        px: { xs: 1, sm: 3 },
        py: 3,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Serial no.</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={item.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="center">{item.Name}</TableCell>

              <TableCell align="center">{item.desc}</TableCell>
              <TableCell align="center">
                <Switch {...SwitchLabel} />
              </TableCell>
              <TableCell align="center">
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

export default CollegeCourseTable;
