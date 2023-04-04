import { Box, Paper, Typography } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import React from 'react';

const CollegeReview = () => {
  return (
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{ color: 'primary.main' }}
      >
        Reviews
      </Typography>
      {[1, 2, 3, 4, 5].map((item) => (
        <Paper elevation={2} key={item} sx={{ p: 3, mt: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>
              <PersonPinIcon sx={{ fontSize: '60px' }} />
            </Typography>
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{ color: 'primary.main' }}
              >
                Salman Khan
              </Typography>
              <Typography variant="body2" sx={{ color: 'text_color.main' }}>
                Student
              </Typography>
            </Box>
          </Box>
          <Box mt={2}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: 'primary.main' }}
            >
              Review of IIM Ahmedabad - Indian Institute of Management.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text_color.main' }}>
              Placements: Our college has a very active placement cell. Almost
              100% of students got placed in our college. The highest salary
              package offered is 70 LPA. The average salary package offered is
              50 LPA. The lowest salary package offered is 40 LPA. Top
              recruiting companies are Boston Consultancy, Tata Consultancy
              Services, Axis Bank, Larson and Torbro, Amazon, Sunsilk, etc.
              Students are eligible for a 2-month internship during their
              course. Students should apply for internships. Almost 100% of
              students got int... Read More
            </Typography>
          </Box>
        </Paper>
      ))}
    </Paper>

    // <Paper sx={{ p: 3 }}>
    //   <Box sx={{ display: 'flex', alignItems: 'center' }}>
    //     <Typography>
    //       <PersonPinIcon sx={{ fontSize: '60px' }} />
    //     </Typography>
    //     <Box>
    //       <Typography
    //         variant="subtitle1"
    //         fontWeight="bold"
    //         sx={{ color: 'primary.main' }}
    //       >
    //         Salman Khan
    //       </Typography>
    //       <Typography variant="body2" sx={{ color: 'text_color.main' }}>
    //         Student
    //       </Typography>
    //     </Box>
    //   </Box>
    //   <Box mt={2}>
    //     <Typography
    //       variant="subtitle1"
    //       fontWeight="bold"
    //       sx={{ color: 'primary.main' }}
    //     >
    //       Review of IIM Ahmedabad - Indian Institute of Management.
    //     </Typography>
    //     <Typography variant="body2" sx={{ color: 'text_color.main' }}>
    //       Placements: Our college has a very active placement cell. Almost 100%
    //       of students got placed in our college. The highest salary package
    //       offered is 70 LPA. The average salary package offered is 50 LPA. The
    //       lowest salary package offered is 40 LPA. Top recruiting companies are
    //       Boston Consultancy, Tata Consultancy Services, Axis Bank, Larson and
    //       Torbro, Amazon, Sunsilk, etc. Students are eligible for a 2-month
    //       internship during their course. Students should apply for internships.
    //       Almost 100% of students got int... Read More
    //     </Typography>
    //   </Box>
    // </Paper>
  );
};

export default CollegeReview;
