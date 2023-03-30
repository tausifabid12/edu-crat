import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TicketDrawer: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 450, p: 2 }}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
    >
      <List>
        <Paper
          elevation={3}
          sx={{
            borderRadius: '10px',
            mt: 8,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Darlene Robertson
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            user@email.com
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            +919789 23122 123
          </Typography>
        </Paper>
      </List>
      <List>
        <Paper
          elevation={3}
          sx={{
            borderRadius: '10px',
            mt: 1,
            p: 2,
          }}
        >
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            User Type: Premium
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            Last Transaction: 50$
          </Typography>
        </Paper>
      </List>
      <List>
        <Paper
          elevation={3}
          sx={{
            borderRadius: '10px',
            mt: 1,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Last login
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            Date: March 30, 2023
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            Time: 16:54
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'primary.main' }}>
            Location: Dhaka, Bangladesh
          </Typography>
        </Paper>
      </List>
      <List>
        <Paper
          elevation={0}
          sx={{
            borderRadius: '10px',
            mt: 1,
            p: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            All Assignee
          </Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <Typography
                      variant="subtitle2"
                      sx={{ color: 'primary.main' }}
                    >
                      March 30, 2023
                    </Typography>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    // onClick={handleToggle(value)}
                    dense
                  >
                    <ListItemIcon>
                      <SupportAgentIcon sx={{ color: 'primary.main' }} />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Darlene Robertson`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor={'right'}
          open={isOpen}
          //   onBlur={() => setIsOpen(false)}
          onClose={toggleDrawer('right', false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default TicketDrawer;
