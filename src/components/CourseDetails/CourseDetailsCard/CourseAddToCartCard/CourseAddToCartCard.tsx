import React from 'react';
import { Box, Chip, Stack, Typography, Button, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Image from 'next/image';

const CourseAddToCartCard = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        background: 'white',
        borderRadius: 3,
        p: 2,
        boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Image
        src="/assets/courseDetails/1.png"
        height={300}
        width={300}
        alt="courseImg"
        className="w-full"
      />
      <Stack spacing={1} sx={{ overflow: 'scroll', height: '250px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography color="primary" variant="h5">
            $76.00
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textDecoration: 'line-through',
              fontWeight: '500',
              color: 'secondary.contrastText',
            }}
          >
            $96.00
          </Typography>
        </Box>

        <div>
          <button className="py-4 text-white w-full bg-secondary border-2 border-secondary hover:bg-white hover:text-secondary  transition-all duration-300 rounded-lg">
            Add To Cart
          </button>
          <button className="py-4 text-primary w-full bg-white border-2 border-primary hover:bg-primary hover:text-white  transition-all duration-300 rounded-lg mt-3">
            Buy Now
          </button>
        </div>
        <Typography
          variant="body2"
          sx={{
            color: 'secondary.contrastText',
            textAlign: 'center',
          }}
        >
          30-Day Money-Back Guarantee
        </Typography>
        {/* --- */}
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <Typography
                  variant="body2"
                  sx={{
                    color: 'secondary.contrastText',
                    textAlign: 'center',
                  }}
                >
                  30
                </Typography>
              }
            >
              <ListItemText primary={`Line item ${value}`} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default CourseAddToCartCard;
