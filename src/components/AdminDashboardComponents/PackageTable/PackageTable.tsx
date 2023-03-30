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

const data = [
  {
    packageName: 'Premium Package',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    packageName: 'Premium Package',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    packageName: 'Premium Package',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    packageName: 'Premium Package',
    date: '12/12/2021',
    enrolled: 23,
  },
  {
    packageName: 'Premium Package',
    date: '12/12/2021',
    enrolled: 23,
  },
];

const PackageTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Serial no.</TableCell>
            <TableCell align="center">Package Name</TableCell>
            <TableCell align="center">Date Created</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, i) => (
            <TableRow
              key={item.packageName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{i + 1}</TableCell>
              <TableCell align="center">{item.packageName}</TableCell>

              <TableCell align="center">{item.date}</TableCell>
              <TableCell align="center">Active</TableCell>
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

export default PackageTable;
