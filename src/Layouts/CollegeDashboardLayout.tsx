import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

import DashboardNavbar from '@/components/DashboardNavbar/DashboardNavbar';
import { useRouter } from 'next/router';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

const CollegeDashboardLayout = (props: Props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MenuItems = [
    {
      title: 'Dashboard',
      path: '/collegeRoutes/dashboard',
      icon: <InboxIcon />,
    },
    {
      title: 'CollegeInfo',
      path: '/collegeRoutes/collegeInfo',
      icon: <LibraryBooksIcon />,
    },
    {
      title: 'Bookmarks',
      path: '/collegeRoutes/bookmarks',
      icon: <BookmarkIcon />,
    },
    {
      title: 'Messages',
      path: '/collegeRoutes/messages',
      icon: <MessageIcon />,
    },
    // {
    //   title: 'Create Course',
    //   path: '/collegeRoutes/createcourse',
    // },
    {
      title: 'Reviews',
      path: '/collegeRoutes/reviews',
      icon: <ReviewsIcon />,
    },
    {
      title: 'Settings',
      path: '/collegeRoutes/settings',
      icon: <SettingsIcon />,
    },
    {
      title: 'Logout',
      path: '/collegeRoutes/',
      icon: <LogoutIcon />,
    },
  ];

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
          <DashboardNavbar handleDrawerToggle={handleDrawerToggle} />
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
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              border: 'none',
              width: drawerWidth,
            },
          }}
        >
          <div>
            <Toolbar />
            <Divider />
            <Stack
              spacing={8}
              sx={{ overflow: 'auto', mt: 9, pr: 1, border: 'none' }}
            >
              <List sx={{ pl: 2 }}>
                {MenuItems.map((menu, index) => (
                  <Link href={menu?.path} key={menu?.title}>
                    <ListItem
                      disablePadding
                      sx={{
                        backgroundColor: `${
                          menu?.path === router.route ? 'secondary.main' : ''
                        }`,
                        color: `${menu?.path === router.route ? 'white' : ''}`,
                        borderRadius: '15px',
                        py: 1,
                      }}
                    >
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
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              border: 'none',
              width: drawerWidth,
            },
          }}
          open
        >
          <div>
            <Toolbar />
            <Divider />
            <Stack
              spacing={8}
              sx={{ overflow: 'auto', mt: 9, pr: 1, border: 'none' }}
            >
              <List sx={{ pl: 2 }}>
                {MenuItems.map((menu, index) => (
                  <Link href={menu?.path} key={menu?.title}>
                    <ListItem
                      disablePadding
                      sx={{
                        backgroundColor: `${
                          menu?.path === router.route ? 'secondary.main' : ''
                        }`,
                        color: `${menu?.path === router.route ? 'white' : ''}`,
                        borderRadius: '15px',
                        py: 1,
                      }}
                    >
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
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Container
          sx={{
            backgroundColor: 'info.main',
            minHeight: '100vh',
            p: { xs: 0, sm: 4 },
            borderRadius: '15px',
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};

export default CollegeDashboardLayout;
