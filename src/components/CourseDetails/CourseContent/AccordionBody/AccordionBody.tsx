import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Box, Typography } from '@mui/material';

const AccordionBody = () => {
  const [checked, setChecked] = React.useState([1]);

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
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Box sx={{ display: 'flex' }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'secondary.main',
                    pr: 1,
                    textDecoration: 'underline',
                  }}
                >
                  Preview
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'secondary.main',
                    pr: 1,
                    textDecoration: 'underline',
                  }}
                >
                  5 Questions
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'secondary.main', textDecoration: 'underline' }}
                >
                  3.50
                </Typography>
              </Box>
            }
            disablePadding
          >
            <ListItemButton>
              <PlayCircleIcon color="secondary" />
              <ListItemText
                sx={{ marginLeft: '5px' }}
                id={labelId}
                primary={`Introduction to the User Experience Course`}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default AccordionBody;
