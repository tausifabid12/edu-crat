import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const colleges = [
  {
    name: 'Engineering',
    courses: [
      {
        name: 'Computer Science ',
        duration: '4 years',
        fees: 'Rs. 5,00,000 ',
        splitFees: 'Rs. 1,25,000',
      },
      {
        name: 'Biomedical Engineering',
        duration: '5 years',
        fees: 'Rs. 8,00,000',
        splitFees: 'Rs. 2,00,000',
      },
      {
        name: 'Chemical Engineering',
        duration: '4 years',
        fees: 'Rs. 1,00,000',
        splitFees: 'Rs. 25,000',
      },
      {
        name: 'General Engineering',
        duration: '4 years',
        fees: 'Rs. 1,00,000',
        splitFees: 'Rs. 25,000',
      },
      {
        name: 'Industrial Engineering',
        duration: '4 years',
        fees: 'Rs. 5,00,000',
        splitFees: 'Rs. 1,25,000',
      },
    ],
  },
  {
    name: 'Medicine',
    courses: [
      {
        name: 'Biomedical Science',
        duration: '4 years',
        fees: 'Rs. 8,00,000',
        splitFees: 'Rs. 2,00,000',
      },
      {
        name: 'Dermatology',
        duration: '4 years',
        fees: 'Rs. 1,00,000',
        splitFees: 'Rs. 25,000',
      },
      {
        name: 'Nursing',
        duration: '4 years',
        fees: 'Rs. 5,00,000',
        splitFees: 'Rs. 1,25,000',
      },
      {
        name: 'Pediatrics',
        duration: '4 years',
        fees: 'Rs. 1,00,000',
        splitFees: 'Rs. 25,000',
      },
      {
        name: 'Psychiatry',
        duration: '4 years',
        fees: 'Rs. 1,00,000',
        splitFees: 'Rs. 25,000',
      },
    ],
  },
];

const DashboardCourseInfo = () => {
  const [college, setCollege] = React.useState('Engineering');

  const handleChange = (event: SelectChangeEvent) => {
    setCollege(event.target.value);
  };

  const filteredColleges = colleges.filter((item) => item.name === college);
  console.log(filteredColleges[0].courses, 'just checking');

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '14px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {' '}
        <Typography
          variant="h5"
          sx={{ fontWeight: '700', color: 'secondary.main', px: 1 }}
        >
          Courses
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">Faculty</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={college}
            label="college"
            onChange={handleChange}
          >
            <MenuItem value={'Engineering'}>Engineering</MenuItem>
            <MenuItem value={'Medicine'}>Medicine</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={'div'}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'primary.main', fontWeight: '600' }}>
                Course Name
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                Duration
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                Fees
              </TableCell>
              <TableCell
                align="center"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                Split fees
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredColleges[0].courses.map((item) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  //   sx={{ color: 'secondary.contrastText' }}
                >
                  {item.name}
                </TableCell>
                <TableCell
                  align="center"
                  //   sx={{ color: 'secondary.contrastText' }}
                >
                  {item.duration}
                </TableCell>
                <TableCell
                  align="center"
                  //   sx={{ color: 'secondary.contrastText' }}
                >
                  {item.fees}
                </TableCell>
                <TableCell
                  align="center"
                  //   sx={{ color: 'secondary.contrastText' }}
                >
                  {item.splitFees}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardCourseInfo;
