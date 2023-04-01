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
import { Button } from '@mui/material';

interface Props {
  setOpenModal: (open: boolean) => void;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
  {
    collegeName: 'College -1',
    email: 'email@gmail.com',
    userId: 'user-12',
  },
  {
    collegeName: 'College -1',
    email: 'email@gmail.com',
    userId: 'user-12',
  },
  {
    collegeName: 'College -1',
    email: 'email@gmail.com',
    userId: 'user-12',
  },
  {
    collegeName: 'College -1',
    email: 'email@gmail.com',
    userId: 'user-12',
  },
  {
    collegeName: 'College -1',
    email: 'email@gmail.com',
    userId: 'user-12',
  },
];

const AssignCollegeTable: React.FC<Props> = ({ setOpenModal }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Serial no.</TableCell>
            <TableCell align="center">College Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">User id</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={item.collegeName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="center">{item.collegeName}</TableCell>

              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">{item.userId}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => setOpenModal(true)}
                  variant="contained"
                  size="small"
                >
                  view
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

export default AssignCollegeTable;
