import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Typography from '@mui/material/Typography';

interface IOptionsListProps {
  data: {
    id: number;
    name: string;
    options: string[];
  };
}

const OptionsList: React.FC<IOptionsListProps> = ({ data }) => {
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
    <List
      dense={true}
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    >
      {data.options.map((value, i) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            sx={{ borderBottom: '1px solid #e0e0e0' }}
            key={i + 1}
            // secondaryAction={
            //   <Typography
            //     aria-label="comments"
            //     sx={{ color: 'text_color.main', py: 0 }}
            //   >
            //     (20)
            //   </Typography>
            // }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(i + 1)}>
              <ListItemIcon sx={{ minWidth: '0px' }}>
                <Checkbox
                  edge="start"
                  size="small"
                  checked={checked.indexOf(i + 1) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default OptionsList;
