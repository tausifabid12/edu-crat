import React from 'react';
import { Box, Chip, Stack, Typography, Rating } from '@mui/material';
import Image from 'next/image';

const Instructor = () => {
  return (
    <Stack spacing={3}>
      <Typography
        variant="h6"
        component="p"
        sx={{ fontWeight: '600', color: 'primary.main', pt: 3 }}
      >
        Instructor
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="/assets/courseDetails/instructor.png"
          height={120}
          width={120}
          alt="Instructor"
          className="mr-4"
        />
        <Stack
          direction="column"
          spacing={0.5}
          sx={{ color: 'secondary.contrastText' }}
        >
          <Typography variant="h6" color="primary">
            Floyd Miles
          </Typography>
          <Typography variant="body2" sx={{ color: 'secondary.contrastText' }}>
            President of Sales
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: 'secondary.contrastText' }}
            >
              Instructor Rating
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: 'secondary.contrastText' }}
            >
              23,987 Reviews
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: 'secondary.contrastText' }}
            >
              692 Students
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: 'secondary.contrastText' }}
            >
              15 Course
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <Typography variant="subtitle2" sx={{ color: 'secondary.contrastText' }}>
        Back in 2010, I started brainspin with a desire to design compelling and
        engaging apps. For over 7 years, I have designed many high profile web
        and iPhone applications. The applications range from 3D medical aided
        web applications to project management applications for niche
        industries.
      </Typography>
      <Typography variant="subtitle2" sx={{ color: 'secondary.contrastText' }}>
        I am also the founder of a large local design organization, Salt Lake
        Designers, where I and other local influencers help cultivate the
        talents of up and coming UX designers through workshops and panel
        discussions.
      </Typography>
    </Stack>
  );
};

export default Instructor;
