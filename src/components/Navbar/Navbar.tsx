import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {
  BsEnvelope,
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { useAuth } from '../../../contexts/AuthProvider';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Events', href: '/events' },
    { label: 'Blogs', href: '/blog' },
    { label: 'College', href: '/college' },
    { label: 'College search', href: '/collegeSearch' },
    // { label: 'Contact', href: '/' },
    // { label: 'Dashboard', href: '/dashboard' },
    // { label: 'C-Dashboard', href: '/collegeRoutes/dashboard' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <div className="bg-secondary  ">
          <div className="max-w-screen-2xl mx-auto py-2 lg:px-16 hidden lg:flex items-center justify-between text-white">
            <div className="flex space-x-5">
              <div className="flex items-center justify-center space-x-3">
                <span>
                  <BsEnvelope size={18} />
                </span>{' '}
                <p className="text-sm">(00) 242 844 39 88</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span>
                  <BsEnvelope size={18} />
                </span>{' '}
                <p className="text-sm">hello@educrat.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-white">
              <BsFacebook />
              <BsLinkedin />
              <BsTwitter />
              <BsGithub />
            </div>
          </div>
        </div>
        <nav
          className={`${
            isScrolled ? 'bg-primary' : 'bg-primary'
          }  z-50 w-full   overflow-hidden  transition-all duration-300 `}
        >
          <div className="max-w-screen-2xl mx-auto">
            <div className="w-full  py-2 px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                    <svg
                      className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div className="flex-shrink-0">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="/assets/logo.svg"
                      alt="Logo"
                    />
                    <img
                      className="hidden lg:block h-14 w-auto"
                      src="/assets/logo.svg"
                      alt="Logo"
                    />
                  </div>
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
                      {navLinks.map((link, i) => (
                        <Link
                          key={i + 1}
                          href={link.href}
                          className=" text-white px-3 py-2 rounded-md text-md font-medium"
                        >
                          {link.label}
                        </Link>
                      ))}
                      {user?.uid ? (
                        <>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              textAlign: 'center',
                            }}
                          >
                            <Tooltip title="Account settings">
                              <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={
                                  open ? 'account-menu' : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                              >
                                <Avatar sx={{ width: 40, height: 40 }}>
                                  M
                                </Avatar>
                              </IconButton>
                            </Tooltip>
                          </Box>
                          <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                              elevation: 0,
                              sx: {
                                overflow: 'visible',
                                filter:
                                  'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',

                                '& .MuiAvatar-root': {
                                  width: 32,
                                  height: 32,
                                  ml: -0.5,
                                  mr: 1,
                                },
                                '&:before': {
                                  content: '""',
                                  display: 'block',
                                  position: 'absolute',
                                  top: 0,
                                  right: 14,
                                  width: 10,
                                  height: 10,
                                  bgcolor: 'background.paper',
                                  transform: 'translateY(-50%) rotate(45deg)',
                                  zIndex: 0,
                                },
                              },
                            }}
                            transformOrigin={{
                              horizontal: 'right',
                              vertical: 'top',
                            }}
                            anchorOrigin={{
                              horizontal: 'right',
                              vertical: 'bottom',
                            }}
                          >
                            <MenuItem onClick={handleClose}>
                              <Avatar /> Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <PersonAdd fontSize="small" />
                              </ListItemIcon>
                              Add another account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <ListItemIcon>
                                <Settings fontSize="small" />
                              </ListItemIcon>
                              Settings
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                logOut();
                                router.push('/login');
                              }}
                            >
                              <ListItemIcon>
                                <Logout fontSize="small" />
                              </ListItemIcon>
                              Logout
                            </MenuItem>
                          </Menu>
                        </>
                      ) : (
                        <>
                          <Link
                            href="/login"
                            className=" text-white px-3 py-2 rounded-md text-md font-medium"
                          >
                            Login
                          </Link>
                          <Link
                            href="/signup"
                            className=" bg-white px-6 py-3 rounded-full text-primary"
                          >
                            signUp
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                isOpen ? 'block' : 'hidden'
              } lg:hidden transition-all duration-500 ease-in-out`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navLinks.map((link, i) => (
                  <Link
                    key={i + 1}
                    href={link.href}
                    className=" text-primary px-3 py-2 rounded-md text-md font-medium block"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
