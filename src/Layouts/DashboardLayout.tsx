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

interface Props {
  window?: () => Window;
  children: JSX.Element[] | JSX.Element;
}
// interface DProps {
//   children: JSX.Element[] | JSX.Element;
// }

const MenuItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    title: 'My Courses',
    path: '/mycourse',
  },
  {
    title: 'Bookmarks',
    path: '/bookmarks',
  },
  {
    title: 'Messages',
    path: '/messages',
  },
  // {
  //   title: 'Create Course',
  //   path: '/createcourse',
  // },
  {
    title: 'Reviews',
    path: '/reviews',
  },
  {
    title: 'Settings',
    path: '/settings',
  },
  {
    title: 'Logout',
    path: '/',
  },
];

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <Stack spacing={8} sx={{ overflow: 'auto', mt: 5, border: 'none' }}>
      <List>
        {MenuItems.map((menu, index) => (
          <Link href={menu?.path} key={menu?.title}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={menu?.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  </div>
);

const DashboardLayout = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { window, children } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
          <DashboardNavbar
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            border: 'none',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          //   px: ,
          backgroundColor: 'info.main',
          mx: { xs: 'none', sm: 8 },
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
