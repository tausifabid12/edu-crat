import React from 'react';
import { Stack, Typography } from '@mui/material';

const DescriptionCard = () => {
  return (
    <Stack spacing={4} sx={{ width: '100%', margin: '90px 0 0 0' }}>
      <Stack
        direction="row"
        spacing={4}
        sx={{ borderBottom: '1px solid rgba(0,0,0,.2)', p: 2 }}
      >
        <Typography
          variant="body2"
          component="p"
          sx={{
            fontWeight: '500',
            color: 'secondary.main',
          }}
        >
          Overview
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ fontWeight: '500', color: 'text_color.main' }}
        >
          Overview
        </Typography>
        <Typography
          variant="body2"
          component="p"
          sx={{ fontWeight: '500', color: 'text_color.main' }}
        >
          Overview
        </Typography>
      </Stack>
      <Typography
        variant="h6"
        component="p"
        sx={{ fontWeight: '500', color: 'primary.main' }}
      >
        Description
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ color: 'text_color.main' }}
      >
        Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut
        nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In
        libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed
        consequat justo non mauris pretium at tempor justo sodales. Quisque
        tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis
        parturient montes, nascetur.
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ color: 'text_color.main' }}
      >
        This course is aimed at people interested in UI/UX Design. We’ll start
        from the very beginning and work all the way through, step by step. If
        you already have some UI/UX Design experience but want to get up to
        speed using Adobe XD then this course is perfect for you too!
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ color: 'text_color.main' }}
      >
        First, we will go over the differences between UX and UI Design. We will
        look at what our brief for this real-world project is, then we will
        learn about low-fidelity wireframes and how to make use of existing UI
        design kits.
      </Typography>
      <Typography
        variant="body2"
        component="p"
        sx={{ color: 'secondary.main', textDecoration: 'underline' }}
      >
        Show more
      </Typography>
    </Stack>
  );
};

export default DescriptionCard;
