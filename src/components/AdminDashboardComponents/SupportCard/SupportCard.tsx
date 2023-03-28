import React from 'react';
import {
  Paper,
  Typography,
  ListItemIcon,
  List,
  ListItemButton,
  IconButton,
  ListItemText,
  Box,
  ListItem,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

const SupportCard = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Paper sx={{ p: 3 }} elevation={3}>
      <Typography sx={{ color: 'primary.main', fontWeight: '600' }}>
        Support Query
      </Typography>
      <Paper elevation={0}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {[1, 2, 3, 4].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Typography color="secondary">view</Typography>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '30px',
                        height: '30px',
                        border: '1px solid secondary',
                        borderRadius: '50%',
                      }}
                    >
                      <BuildIcon sx={{ color: 'secondary.main' }} />
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={`Mr. John Doe `}
                    secondary={`I need help for applying..`}
                    sx={{ color: 'primary.main' }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Paper>
  );
};

export default SupportCard;
