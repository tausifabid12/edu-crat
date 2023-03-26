import React from 'react';
import { Box, Typography } from '@mui/material';

interface CampaignCardProps {
  statistic: {
    title: string;
    value: string | number;
  };
}

const CampaignCard: React.FC<CampaignCardProps> = ({ statistic }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%',
        minHeight: '130px',
        height: '100%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
        borderRadius: '14px',
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            color: 'primary.main',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          {statistic?.value}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'secondary.contrastText',
            textAlign: 'center',
            mt: 1,
          }}
        >
          {statistic?.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CampaignCard;
