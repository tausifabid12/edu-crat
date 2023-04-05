import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import DashboardLayout from '@/Layouts/DashboardLayout';
import Image from 'next/image';

import Rating from '@mui/material/Rating';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const reviews = () => {
  return (
    <DashboardLayout>
      <Box sx={{ px: { xs: 1, sm: 4 } }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Reviews
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'text_color.main',
              fontWeight: '400',
              mt: '2px',
              mb: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: 'bg_color.main',
            px: 3,
            my: 3,
            borderRadius: '14px',
          }}
        >
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: 'primary.main',
                fontWeight: '500',
                py: 3,
                mb: 4,
                borderBottom: '1px solid #E5E5E5',
              }}
            >
              All Reviews
            </Typography>
          </Box>
          {[1, 2, 3].map((item) => (
            <Box key={item} mt={2}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  src="/assets/general/review.png"
                  height={50}
                  width={50}
                  alt=""
                />
                <Stack direction="row" spacing={2} ml={2}>
                  <Typography variant="body1" sx={{ color: 'primary.main' }}>
                    Ali Tufan
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: 'text_color.main' }}
                  >
                    3 days ago
                  </Typography>
                </Stack>
              </Box>
              <Stack
                spacing={1}
                sx={{ pt: 2, pl: 8, pb: 4, borderBottom: '1px solid #E5E5E5' }}
              >
                <Rating name="size-small" defaultValue={2} size="small" />
                <Typography variant="h6" sx={{ color: 'primary.main' }}>
                  The best LMS Design
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'text_color.main' }}
                >
                  This course is a very applicable. Professor Ng explains
                  precisely each algorithm and even tries to give an intuition
                  for mathematical and statistic concepts behind each algorithm.
                  Thank you very much.
                </Typography>
                <button className="px-4 py-2 w-32 rounded-lg bg-secondary/10 text-secondary transition-all duration-300 hover:bg-secondary hover:text-white">
                  Respond
                </button>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default reviews;
