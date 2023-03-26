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
import { useRouter } from 'next/router';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  children: JSX.Element[] | JSX.Element;
}

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
    title: 'Leads',
    path: '/collegeRoutes/leads',
    icon: <BookmarkIcon />,
  },
  {
    title: 'Photos',
    path: '/collegeRoutes/photos',
    icon: <PhotoLibraryIcon />,
  },

  {
    title: 'Events',
    path: '/collegeRoutes/events',
    icon: <ReviewsIcon />,
  },
  {
    title: 'Courses',
    path: '/collegeRoutes/courses',
    icon: <ReviewsIcon />,
  },
  {
    title: 'Pricing',
    path: '/collegeRoutes/pricing',
    icon: <ReviewsIcon />,
  },
  {
    title: 'Blogs',
    path: '/collegeRoutes/blogs',
    icon: <LibraryAddIcon />,
  },
  {
    title: 'Campaign',
    path: '/collegeRoutes/campaign',
    icon: <LibraryAddIcon />,
  },
  {
    title: 'settings',
    path: '/collegeRoutes/settings',
    icon: <SettingsIcon />,
  },
];

const DashboardLayout = (props: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

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
            border: 'none',
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 'none',
            },
          }}
        >
          {/*  menu Items small device */}
          <div>
            <Toolbar />
            <Divider />
            <Stack spacing={8} sx={{ overflow: 'auto', mt: 5, border: 'none' }}>
              <List sx={{ pl: 2 }}>
                {MenuItems.map((menu, index) => (
                  <Link href={menu?.path} key={menu?.title}>
                    <ListItem
                      disablePadding
                      sx={{
                        backgroundColor: `${
                          menu?.path === router.route ? 'primary.main' : ''
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
          {/* {drawer} */}
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
          {/*  menu Items large device */}
          <div>
            <Toolbar />
            <Divider />
            <Stack spacing={8} sx={{ overflow: 'auto', mt: 5, border: 'none' }}>
              <List sx={{ pl: 2 }}>
                {MenuItems.map((menu, index) => (
                  <Link href={menu?.path} key={menu?.title}>
                    <ListItem
                      disablePadding
                      sx={{
                        backgroundColor: `${
                          menu?.path === router.route ? 'primary.main' : ''
                        }`,
                        color: `${menu?.path === router.route ? 'white' : ''}`,
                        borderRadius: '15px',
                        py: 0.4,
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <Typography
                            sx={{
                              color: `${
                                menu?.path === router.route ? 'white' : ''
                              }`,
                            }}
                          >
                            {menu?.icon}
                          </Typography>
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
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: 'info.main',
          mx: { xs: 'none', sm: 2 },
          mt: 6,
          p: { xs: 1, sm: 4 },
          borderRadius: '15px',
        }}
      >
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
};

export default DashboardLayout;
