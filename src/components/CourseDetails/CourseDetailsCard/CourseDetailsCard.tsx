import React from 'react';
import { Box, Chip, Stack, Typography, Rating } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';

const CourseDetailsCard = () => {
  return (
    <Stack spacing={4}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Chip sx={{ background: '#00ff84' }} label="BEST SELLER" />
        <Chip sx={{ background: '#e8543e', color: 'white' }} label="NEW" />
        <Chip color="secondary" sx={{ color: 'white' }} label="POPULAR" />
      </Stack>
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: '600', color: 'primary.main' }}
      >
        User Experience Design Essentials - <br /> Adobe XD UI UX Design
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ fontWeight: '500', color: 'text_color.main' }}
      >
        Use XD to get a job in UI Design, User Interface, User Experience ,
        <br />
        design, UX design & Web Design
      </Typography>
      <Stack direction="row" spacing={6}>
        <Stack direction="row" spacing={1}>
          <Typography
            component="legend"
            sx={{ color: 'text_color.main', fontSize: '14px' }}
          >
            Read only
          </Typography>
          <Rating name="read-only" size="small" value={4} readOnly />
          <Typography
            component="legend"
            sx={{ color: 'text_color.main', fontSize: '14px' }}
          >
            (1991)
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <GroupIcon fontSize="small" sx={{ color: 'text_color.main' }} />
          <Typography
            component="legend"
            sx={{ color: 'text_color.main', fontSize: '14px' }}
          >
            853 enrolled on this course
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <AccessTimeIcon fontSize="small" sx={{ color: 'text_color.main' }} />
          <Typography
            component="legend"
            sx={{ color: 'text_color.main', fontSize: '14px' }}
          >
            Last updated 11/2021
          </Typography>
        </Stack>
      </Stack>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/assets/courseDetails/instructor.png"
          height={40}
          width={40}
          alt="Instructor"
          className="mr-2"
        />
        <Typography
          component="legend"
          sx={{ color: 'text_color.main', fontSize: '15px' }}
        >
          Floyd Miles
        </Typography>
      </Box>
    </Stack>
  );
};

export default CourseDetailsCard;
