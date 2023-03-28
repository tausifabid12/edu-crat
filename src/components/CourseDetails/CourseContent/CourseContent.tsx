import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AccordionBody from './AccordionBody/AccordionBody';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0.5px solid ${theme.palette.divider}`,
  borderRadius: '15px',
  padding: '10px 10px',
  margin: '10px 0',
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
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'white',
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

const CourseContent = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Box mt={10}>
      <Typography
        variant="h6"
        component="p"
        sx={{ fontWeight: '600', color: 'primary.main' }}
      >
        Course Content
      </Typography>
      <div className="flex justify-between mt-3">
        <Typography
          variant="body2"
          component="p"
          sx={{ color: 'text_color.main' }}
        >
          27 sections • 95 lectures
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ color: 'secondary.main', textDecoration: 'underline' }}
        >
          Expand All Sections
        </Typography>
      </div>
      <Box sx={{ padding: '30px 0' }}>
        <div>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography color="primary">Course Content</Typography>
                <Typography sx={{ color: 'text_color.main' }}>
                  5 lectures • 87 min
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionBody />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography color="primary">The Brief</Typography>
                <Typography sx={{ color: 'text_color.main' }}>
                  5 lectures • 87 min
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionBody />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography color="primary">
                  Type, Color & Icon Introduction
                </Typography>
                <Typography sx={{ color: 'text_color.main' }}>
                  5 lectures • 87 min
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionBody />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel4d-header"
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography color="primary">
                  Prototyping a App - Introduction
                </Typography>
                <Typography sx={{ color: 'text_color.main' }}>
                  5 lectures • 87 min
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionBody />
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel3d-header"
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography color="primary">Wireframe Feedback</Typography>
                <Typography sx={{ color: 'text_color.main' }}>
                  5 lectures • 87 min
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <AccordionBody />
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </Box>
  );
};

export default CourseContent;
