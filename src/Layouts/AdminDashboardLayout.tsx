import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import ReviewsIcon from '@mui/icons-material/Reviews';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Link from 'next/link';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useRouter } from 'next/router';

const drawerWidth = 270;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  children: JSX.Element[] | JSX.Element;
  window?: () => Window;
}

const AdminDashboardLayout = (props: Props) => {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter();

  const MenuItems = [
    {
      title: 'Dashboard',
      path: '/adminRoutes/dashboard',
      icon: <InboxIcon />,
    },
    {
      title: 'Employees',
      path: '/adminRoutes/employee',
      icon: <LibraryBooksIcon />,
    },
    {
      title: 'Roles',
      path: '/adminRoutes/roles',
      icon: <BookmarkIcon />,
    },
    {
      title: 'Photos',
      path: '/adminRoutes/photos',
      icon: <PhotoLibraryIcon />,
    },

    {
      title: 'Events',
      path: '/adminRoutes/events',
      icon: <ReviewsIcon />,
    },
    {
      title: 'Courses',
      path: '/adminRoutes/courses',
      icon: <ReviewsIcon />,
    },
    {
      title: 'Pricing',
      path: '/adminRoutes/pricing',
      icon: <ReviewsIcon />,
    },
    {
      title: 'Blogs',
      path: '/adminRoutes/blogs',
      icon: <LibraryAddIcon />,
    },
    {
      title: 'Campaign',
      path: '/adminRoutes/campaign',
      icon: <LibraryAddIcon />,
    },
    {
      title: 'settings',
      path: '/adminRoutes/settings',
      icon: <SettingsIcon />,
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ p: 2 }}>
        {MenuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <ListItem
              disablePadding
              sx={{
                backgroundColor: `${
                  item?.path === router.route ? 'secondary.main' : ''
                }`,
                color: `${item?.path === router.route ? 'white' : ''}`,
                borderRadius: '15px',
                py: 1,
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Typography
                    sx={{
                      color: `${item?.path === router.route ? 'white' : ''}`,
                    }}
                  >
                    {item?.icon}
                  </Typography>
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
        }}
      >
        <Toolbar sx={{ backgroundColor: 'white' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: 'secondary.main', fontWeight: 'bold' }}
          >
            Edu Card
          </Typography>
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
              width: drawerWidth,
            },
          }}
        >
          <Scrollbars>{drawer}</Scrollbars>
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
          <Scrollbars>{drawer}</Scrollbars>
        </Drawer>
      </Box>
      <Paper
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Paper>
    </Box>
  );
};

export default AdminDashboardLayout;
