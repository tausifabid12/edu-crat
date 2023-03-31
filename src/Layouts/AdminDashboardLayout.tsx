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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      title: 'Leads',
      path: '/adminRoutes/leads',
      icon: <PhotoLibraryIcon />,
    },

    {
      title: 'Events',
      path: '/adminRoutes/events',
      icon: <ReviewsIcon />,
    },
    {
      title: 'Users',
      path: '/adminRoutes/users',
      icon: <ReviewsIcon />,
    },
    {
      title: 'Notification',
      path: '/adminRoutes/notification',
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
      title: 'Exams',
      path: '/adminRoutes/exam',
      icon: <LibraryAddIcon />,
    },
    {
      title: 'Packages',
      path: '/adminRoutes/packages',
      icon: <SettingsIcon />,
    },
    {
      title: 'Support',
      path: '/adminRoutes/support',
      icon: <SettingsIcon />,
    },
  ];

  //------ responsive drawer code
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

        <ListItem
          disablePadding
          sx={{
            backgroundColor: `${
              '/adminRoutes/settings' === router.route ? 'secondary.main' : ''
            }`,
            color: `${'/adminRoutes/settings' === router.route ? 'white' : ''}`,
            borderRadius: '15px',
            py: 1,
          }}
        >
          <Accordion sx={{ p: 0, boxShadow: 'none', width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ p: 0, boxShadow: 'none' }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <Typography
                    sx={{
                      color: `${
                        '/adminRoutes/settings' === router.route ? 'white' : ''
                      }`,
                    }}
                  >
                    <SettingsIcon />
                  </Typography>
                </ListItemIcon>
                <ListItemText primary={'Settings'} />
              </ListItemButton>
            </AccordionSummary>
            <AccordionDetails sx={{ boxShadow: 'none', width: '100%' }}>
              <List sx={{ p: 0 }}>
                <Link href="/adminRoutes/menuSetting">
                  <ListItem>Menu</ListItem>
                </Link>
                <Link href="/adminRoutes/headerSetting">
                  <ListItem>Header</ListItem>
                </Link>
                <Link href="/adminRoutes/footerSetting">
                  <ListItem>Footer</ListItem>
                </Link>
                <Link href="/adminRoutes/typographySetting">
                  <ListItem>TypoGraphy</ListItem>
                </Link>
                <Link href="/adminRoutes/logoSetting">
                  <ListItem>Logo</ListItem>
                </Link>
                <Link href="/adminRoutes/logoSetting">
                  <ListItem>Under Construction</ListItem>
                </Link>
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
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
        elevation={0}
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
