import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DashboardNewCourseModal from '../DashboardNewCourseModal/DashboardNewCourseModal';

type Price = {
  TotalPrice: number;
  Installment1: number;
  Installment2: number;
  Installment3: number;
  Installment4: number;
  Installment5: number;
};

type Course = {
  name: string;
  Section: string;
  Duration: number;
  price: Price[];
};

function Row(props: { row: Course }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.Section}</TableCell>
        <TableCell align="center">{row.Duration} Years</TableCell>
        <TableCell align="center">Action button</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pricing
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Total Price</TableCell>
                    <TableCell>Installment-1</TableCell>
                    <TableCell>Installment-2</TableCell>
                    <TableCell align="center">Installment-3</TableCell>
                    <TableCell align="center">Installment-4</TableCell>
                    <TableCell align="center">Installment-5</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.price.map((price, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {price.TotalPrice}
                      </TableCell>
                      <TableCell align="center">{price.Installment1}</TableCell>
                      <TableCell align="center">{price.Installment2}</TableCell>
                      <TableCell align="center">{price.Installment3}</TableCell>
                      <TableCell align="center">{price.Installment4}</TableCell>
                      <TableCell align="center">{price.Installment5}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

let courseData: Course[];

courseData = [
  {
    name: 'Course 1',
    Section: 'Section 1',
    Duration: 4,
    price: [
      {
        TotalPrice: 100000,
        Installment1: 20000,
        Installment2: 20000,
        Installment3: 20000,
        Installment4: 20000,
        Installment5: 20000,
      },
    ],
  },
  {
    name: 'Course 2',
    Section: 'Section 2',
    Duration: 4,
    price: [
      {
        TotalPrice: 100000,
        Installment1: 20000,
        Installment2: 20000,
        Installment3: 20000,
        Installment4: 20000,
        Installment5: 20000,
      },
    ],
  },
  {
    name: 'Course 3',
    Section: 'Section 3',
    Duration: 4,
    price: [
      {
        TotalPrice: 100000,
        Installment1: 20000,
        Installment2: 20000,
        Installment3: 20000,
        Installment4: 20000,
        Installment5: 20000,
      },
    ],
  },
  {
    name: 'Course 4',
    Section: 'Section 4',
    Duration: 4,
    price: [
      {
        TotalPrice: 100000,
        Installment1: 20000,
        Installment2: 20000,
        Installment3: 20000,
        Installment4: 20000,
        Installment5: 20000,
      },
    ],
  },
  {
    name: 'Course 5',
    Section: 'Section 5',
    Duration: 4,
    price: [
      {
        TotalPrice: 100000,
        Installment1: 20000,
        Installment2: 20000,
        Installment3: 20000,
        Installment4: 20000,
        Installment5: 20000,
      },
    ],
  },
];

const DashboardCoursesTab = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'secondary.main',
              fontweight: '700',
              mt: 1,
            }}
          >
            Courses
          </Typography>

          <Typography
            onClick={() => setOpenModal(true)}
            variant="body1"
            sx={{
              color: 'secondary.main',
              fontweight: '700',
              fontSize: { xs: '12px', sm: '16px' },
              mt: 1,
              cursor: 'pointer',
            }}
          >
            <AddCircleOutlineIcon /> Add New
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Name</TableCell>
                <TableCell align="center">Section</TableCell>
                <TableCell align="center">Duration</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courseData.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <DashboardNewCourseModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};
export default DashboardCoursesTab;
