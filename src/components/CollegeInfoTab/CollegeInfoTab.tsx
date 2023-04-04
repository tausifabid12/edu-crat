import React from 'react';
import { Button, Typography, Paper, Box } from '@mui/material';
import CollegeInfoHighlight from '../CollegeInfoHighlight/CollegeInfoHighlight';
import CollegeFeaturedCourse from '../CollegeFeaturedCourse/CollegeFeaturedCourse';
import CollegeFacilities from '../CollegeFacilities/CollegeFacilities';
import CollegeCourses from '../CollegeCourses/CollegeCourses';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CollegeAwardsRecruiters from '../CollegeAwards&Recruiters/CollegeAwards&Recruiters';
import CollegeReview from '../CollegeReview/CollegeReview';
import CollegePhotos from '../CollegePhotos/CollegePhotos';

const CollegeInfoTab = () => {
  return (
    <Box>
      <Typography color="primary" variant="h4">
        Indian Institute of Technology
      </Typography>
      <Typography variant="body2" mt={3} sx={{ color: 'text_color.main' }}>
        In the series of premier institutes of engineering in the nation, Indian
        Institute of Technology Kanpur (IIT-Kanpur) is an extension of the
        vision to establish world-class technology based engineering institute
        in India. IIT Kanpur was established in the year 1959 and Government of
        India under the Institutes of Technology Act.
      </Typography>
      <CollegeInfoHighlight />
      <CollegeFeaturedCourse />
      <CollegeFacilities />
      <CollegeCourses />
      {/* scholarship */}
      <Paper elevation={3} sx={{ p: 3, my: 3 }}>
        <Typography color="primary" variant="h5" mb={5} fontWeight="bold">
          Scholarship
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>
            <LocalLibraryIcon
              sx={{ color: 'primary.main', fontSize: '75px' }}
            />
          </Typography>
          <Box ml={5}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              mb={1}
              sx={{ color: 'primary.main' }}
            >
              IIT London Chapter-MCM Scholarship
            </Typography>
            <Typography variant="body2" mb={1}>
              IIT London Chapter-MCM Scholarship Merit scholarships are there
              for the 2nd year UG students, in which per month 2000/- is given
              for 10 months and documents are required like grade sheet and
              income proof.
            </Typography>
          </Box>
        </Box>
      </Paper>
      <CollegeAwardsRecruiters />
      <CollegePhotos />
      <CollegeReview />
    </Box>
  );
};

export default CollegeInfoTab;
