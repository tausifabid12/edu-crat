import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Box from '@mui/material/Box';
import { Rating, Typography } from '@mui/material';
import Image from 'next/image';

const DashboardReviews = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'white',
        borderRadius: '14px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.07)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 4,
          pt: 3,
          pb: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: '700', color: 'primary.main' }}
        >
          Latest Reviews
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: '600',
            color: 'primary.main',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          view all
        </Typography>
      </Box>

      <List
        sx={{
          width: '100%',
          px: 2,
          pb: 3,
        }}
      >
        <ListItem>
          <ListItemAvatar sx={{ mr: 1 }}>
            <Image
              src="/assets/general/user-profile.png"
              height={50}
              width={50}
              alt=""
            />
          </ListItemAvatar>

          <ListItemText
            primary="Ali Tufan"
            secondary="Student"
            sx={{ color: 'primary.main' }}
          />
          <Rating name="size-small" defaultValue={5} size="small" />
        </ListItem>
        <ListItem>
          <ListItemAvatar sx={{ mr: 1 }}>
            <Image
              src="/assets/general/user-profile.png"
              height={50}
              width={50}
              alt=""
            />
          </ListItemAvatar>

          <ListItemText
            primary="Ali Tufan"
            secondary="Student"
            sx={{ color: 'primary.main' }}
          />
          <Rating name="size-small" defaultValue={5} size="small" />
        </ListItem>
        <ListItem>
          <ListItemAvatar sx={{ mr: 1 }}>
            <Image
              src="/assets/general/user-profile.png"
              height={50}
              width={50}
              alt=""
            />
          </ListItemAvatar>

          <ListItemText
            primary="Ali Tufan"
            secondary="Teacher"
            sx={{ color: 'primary.main' }}
          />
          <Rating name="size-small" defaultValue={5} size="small" />
        </ListItem>
      </List>
    </Box>
  );
};

export default DashboardReviews;
