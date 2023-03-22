import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Image from 'next/image';

const DashboardEvents = () => {
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
          Upcoming Events
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
              src="/assets/events/6.png"
              height={70}
              width={70}
              style={{ borderRadius: '14px' }}
              alt=""
            />
          </ListItemAvatar>

          <ListItemText
            primary="Front End development bootcamp"
            secondary="By Ali Tufan."
            sx={{ color: 'primary.main' }}
          />
          <Stack>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: '600',
                color: 'primary.main',
              }}
            >
              5h 20m left
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: '300',
                color: 'secondary.contrastText',
                textAlign: 'right',
              }}
            >
              Friday
            </Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <ListItemAvatar sx={{ mr: 1 }}>
            <Image
              src="/assets/events/6.png"
              height={70}
              width={70}
              style={{ borderRadius: '14px' }}
              alt=""
            />
          </ListItemAvatar>

          <ListItemText
            primary="Front End development bootcamp"
            secondary="By Ali Tufan."
            sx={{ color: 'primary.main' }}
          />
          <Stack>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: '600',
                color: 'primary.main',
              }}
            >
              5h 20m left
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: '300',
                color: 'secondary.contrastText',
                textAlign: 'right',
              }}
            >
              Friday
            </Typography>
          </Stack>
        </ListItem>
        <ListItem>
          <ListItemAvatar sx={{ mr: 1 }}>
            <Image
              src="/assets/events/6.png"
              height={70}
              width={70}
              style={{ borderRadius: '14px' }}
              alt=""
            />
          </ListItemAvatar>

          <ListItemText
            primary="New bootcamp"
            secondary="By Ali Tufan."
            sx={{ color: 'primary.main' }}
          />
          <Stack>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: '600',
                color: 'primary.main',
              }}
            >
              5h 20m left
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: '300',
                color: 'secondary.contrastText',
                textAlign: 'right',
              }}
            >
              Friday
            </Typography>
          </Stack>
        </ListItem>
      </List>
    </Box>
  );
};

export default DashboardEvents;
