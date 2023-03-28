import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const ActiveCampaignCard = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        minWidth: '250px',
        minHeight: '120px',
        py: 2,
        px: 3,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
        borderRadius: '14px',
      }}
    >
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: 'primary.main',
            fontWeight: '600',
            textAlign: 'left',
          }}
        >
          School Opening Admission Campaign
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text_color.main',
          }}
        >
          Image Campaign
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text_color.main',

              mt: 1,
            }}
          >
            2.3M Impressions
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text_color.main',

              mt: 1,
            }}
          >
            54%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveCampaignCard;
