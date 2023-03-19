import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DashboardNavbar from '@/components/DashboardNavbar/DashboardNavbar';
import Container from '@mui/material/Container';
import { Stack } from '@mui/system';
import Link from 'next/link';

const drawerWidth = 240;

interface DProps {
  children: JSX.Element[] | JSX.Element;
}

const DashboardLayout: React.FC<DProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'white',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <DashboardNavbar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          border: 'none',

          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
          },
        }}
      >
        <Toolbar />
        <Stack spacing={8} sx={{ overflow: 'auto', mt: 5, border: 'none' }}>
          <List>
            {[
              'Dashboard',
              'My Courses',
              'Bookmarks',
              'Messages',
              'Create Course',
              'Reviews',
              'Settings',
              'Logout',
            ].map((text, index) => (
              <Link href="/mycourse" key={text}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Stack>
      </Drawer>
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          //   px: ,
          backgroundColor: 'info.main',
          mx: 9,
          mt: 14,
          borderRadius: '15px',
        }}
      >
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
};

// sx={{  }}
export default DashboardLayout;
