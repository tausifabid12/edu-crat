import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Switch from '@mui/material/Switch';

const SwitchLabel = { inputProps: { 'aria-label': 'Switch demo' } };

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
  {
    Name: 'Mechanical Engineering',
    duration: '4 years',
    totalFees: '500000',
  },
  {
    Name: 'Civil Engineering',
    duration: '4 years',
    totalFees: '500000',
  },

  {
    Name: 'CS Engineering',
    duration: '4 years',
    totalFees: '500000',
  },
  {
    Name: 'Civil Engineering',
    duration: '4 years',
    totalFees: '500000',
  },
];

const CourseTable = () => {
  return (
    <TableContainer
    //   sx={{
    //     bgcolor: 'white',
    //     borderRadius: '14px',
    //     px: { xs: 1, sm: 3 },
    //     py: 3,
    //     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
    //   }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ fontWeight: '600', color: 'primary.main' }}
            >
              Course
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: '600', color: 'primary.main' }}
            >
              Duration
            </TableCell>
            <TableCell
              align="center"
              sx={{ fontWeight: '600', color: 'primary.main' }}
            >
              Total Fees
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={item.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{item.Name}</TableCell>

              <TableCell align="center">{item.duration}</TableCell>
              <TableCell align="center">{item.totalFees}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseTable;
