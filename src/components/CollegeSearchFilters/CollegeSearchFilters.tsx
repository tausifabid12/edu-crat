import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OptionsList from '../CoursesSideBar/OptionsList/OptionsList';
import TextField from '@mui/material/TextField';
import { Scrollbars } from 'react-custom-scrollbars-2';
const CollegeSearchFilters = () => {
  const data = [
    {
      id: 1,
      name: 'State',
      options: [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
      ],
    },
    {
      id: 1,
      name: 'Cities',
      options: [
        'Hyderabad',
        'Vijayawada',
        'Vishakhapatnam',
        'Guntur',
        'Nellore',
        'Kurnool',
        'Rajahmundry',
        'Tirupati',
        'Kakinada',
        'Anantapur',
        'Bangalore',
        'Mangalore',
        'Hubli',
        'Mysore',
        'Belgaum',
        'Bellary',
        'Dharwad',
        'Gulbarga',
        'Kolar',
        'Kolar Gold Fields',
        'Mandya',
      ],
    },
    {
      id: 1,
      name: ' Fees',
      options: ['0-1 Lakh', '1-2 Lakh', '2-3 Lakh', '3-4 Lakh', 'above 5 Lakh'],
    },
    {
      id: 2,
      name: 'Branches',
      options: [
        'Computer Science and Engineering',
        'Electronics and Communication Engineering',
        'Electrical and Electronics Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Information Technology',
        'Electronics and Instrumentation Engineering',
        'Electronics and Telecommunication Engineering',
        'Aeronautical Engineering',
        'Automobile Engineering',
        'Bio-Technology',
        'Chemical Engineering',
        'Computer Science and Information Technology',
        'Electrical Engineering',
        'Electronics Engineering',
        'Industrial Engineering and Management',
        'Instrumentation and Control Engineering',
        'Marine Engineering',
        'Mechanical and Automation Engineering',
      ],
    },
    {
      id: 3,
      name: 'Exams',
      options: [
        'JEE Main',
        'JEE Advanced',
        'NEET',
        'BITSAT',
        'VITEEE',
        'SRMJEE',
      ],
    },
    {
      id: 3,
      name: 'Duration',
      options: ['1 Year', '2 Years', '3 Years', '4 Years', '5 Years'],
    },
    {
      id: 3,
      name: 'Institute Type',
      options: ['Private', 'Public', 'Deemed', 'Central', 'State'],
    },
    {
      id: 3,
      name: 'Accepts Application',
      options: ['Yes', 'No'],
    },
  ];
  return (
    <NoSsr>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '0 1rem',
        }}
      >
        {data.map((item, i) => (
          <Accordion
            key={i}
            defaultExpanded={true}
            sx={{ Height: '320px', pb: 1 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {item.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{}}>
              <TextField
                fullWidth
                label="Search"
                id="outlined-size-small"
                size="small"
              />
              <Scrollbars style={{ width: '100%', height: '240px' }}>
                <OptionsList data={item} />
              </Scrollbars>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </NoSsr>
  );
};

export default CollegeSearchFilters;
