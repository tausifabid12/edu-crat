import Box from '@mui/material/Box';
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import OptionsList from './OptionsList/OptionsList';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : '#ffffff',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

// ------------------------

const CoursesSideBar = () => {
  const [expanded, setExpanded] = React.useState('');
  const data = [
    {
      id: 1,
      name: 'Category',
      options: [
        'Photography',
        'Material Design',
        'Music',
        'Software Development',
        'Exercise',
        'Art',
      ],
    },
    {
      id: 2,
      name: 'Instructors',
      options: [
        'Albert Flores',
        'Jacob Jones',
        'Robert Fox',
        'Jenny Wilson',
        'Jane Cooper',
      ],
    },
    {
      id: 3,
      name: 'Level',
      options: ['All Levels', 'Beginner', 'Intermediate', 'Expert'],
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1rem',
      }}
    >
      <div>
        {data.map((item, i) => (
          <Accordion
            key={item.id}
            expanded={expanded === `panel${i + 1}` ? false : true}
            onChange={() =>
              setExpanded(
                `${expanded === `panel${i + 1}` ? '' : `panel${i + 1}`}
                }`
              )
            }
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography variant="h6" sx={{ color: 'primary.main' }}>
                {item.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <OptionsList data={item} />
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Box>
  );
};

export default CoursesSideBar;
