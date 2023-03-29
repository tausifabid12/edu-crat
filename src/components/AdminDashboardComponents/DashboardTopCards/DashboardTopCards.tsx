import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';

import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

const DashboardTopCards = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const cardData = [
    {
      title: 'Leads',
      icon: <AssignmentIndIcon />,
      count: 987,
      color:
        'linear-gradient(-20deg, rgb(43, 88, 118) 0%, rgb(78, 67, 118) 100%)',
    },
    {
      title: 'Subscriptions',
      icon: <AssignmentIndIcon />,
      count: 987,
      color:
        'linear-gradient(120deg, rgb(246, 211, 101) 0%, rgb(253, 160, 133) 100%) ',
    },
    {
      title: 'Transactions',
      icon: <AssignmentIndIcon />,
      count: '$5987',
      color: 'rgb(87, 202, 34)',
    },
    {
      title: 'Total Students',
      icon: <AssignmentIndIcon />,
      count: 987,
      color: 'rgb(85, 105, 255)',
    },
  ];

  return (
    <Paper elevation={0}>
      <Grid container spacing={3}>
        {cardData.map((item, index) => (
          <Grid key={index} item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: 'transparent' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    background: `${item.color}`,
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AssignmentIndIcon sx={{ color: 'white' }} />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text_color.main', pl: 1, fontWeight: '600' }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                {item.count}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text_color.main' }}>
                +36% from last month
              </Typography>
            </Paper>
          </Grid>
        ))}
        {/* <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Grid onClick={handleToggle} item xs={12} md={6} lg={3}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: 'transparent' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    background: `rgb(85, 105, 255)`,
                    height: '50px',
                    width: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AssignmentIndIcon sx={{ color: 'white' }} />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: 'text_color.main', pl: 1, fontWeight: '600' }}
                >
                  Total Students
                </Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                1000
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'text_color.main' }}>
                +36% from last month
              </Typography>
            </Paper>
          </Grid>
        </Button> */}
      </Grid>
      {/* <div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>This Month: 450</MenuItem>
                    <MenuItem onClick={handleClose}>This week : 200</MenuItem>
                    <MenuItem onClick={handleClose}>Today: 20</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div> */}
    </Paper>
  );
};

export default DashboardTopCards;
