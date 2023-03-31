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

const data = [
  {
    title: 'Exam-1',
    updateOn: '12/12/2021',
    status: 'Active',
  },
  {
    title: 'Exam-1',
    updateOn: '12/12/2021',
    status: 'Active',
  },
  {
    title: 'Exam-1',
    updateOn: '12/12/2021',
    status: 'Active',
  },
  {
    title: 'Exam-1',
    updateOn: '12/12/2021',
    status: 'Active',
  },
  {
    title: 'Exam-1',
    updateOn: '12/12/2021',
    status: 'Active',
  },
];

const ExamTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Serial no.</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">updateOn </TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="center">{item.title}</TableCell>

              <TableCell align="center">{item.updateOn}</TableCell>
              <TableCell align="center">{item.status}</TableCell>
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
``;

export default ExamTable;
