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
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const SwitchLabel = { inputProps: { 'aria-label': 'Switch demo' } };

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const data = [
  {
    Name: 'Bachelor of Technology (B.Tech.)',
    specialization: [
      'Civil Engineering',
      'Civil Engineering',
      'CS Engineering',
      'Civil Engineering',
      'Mechanical Engineering',
    ],
    eligibility:
      'Candidate should have scored minimum 75% marks in the senior secondary examination from a recognized board.',
  },
  {
    Name: 'Bachelor of Science (B.S.)',
    specialization: ['Chemistry', 'Physics', 'Mathematics', 'Biology'],
    eligibility:
      'Candidate should have scored minimum CPI 6/10 in the senior secondary examination from a recognized board.',
  },
  {
    Name: 'Master of Science (M.Sc.)',
    specialization: ['Chemistry', 'Physics', 'Mathematics', 'Biology'],
    eligibility:
      'Candidate should have scored minimum 55% marks in Bachelors degree in relevant subject (50% for SC/ST).',
  },
];

const AdmissionDetails = () => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <TableContainer sx={{}}>
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
                Specialization
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: '600', color: 'primary.main' }}
              >
                Eligibility
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <TableRow
                key={item.Name}

                //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{item.Name}</TableCell>

                <TableCell align="center">
                  <List dense={true}>
                    {item.specialization.map((item, i) => (
                      <ListItem key={i}>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </TableCell>
                <TableCell align="center">{item.eligibility}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AdmissionDetails;
