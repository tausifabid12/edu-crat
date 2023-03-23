import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import DashboardFacilitiesModal from '../DashboardFacilitiesModal/DashboardFacilitiesModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, TextField } from '@mui/material';

const DashboardBrochureTab = () => {
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
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pb: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'secondary.main',
              fontweight: '700',
              mt: 1,
            }}
          >
            Brochure
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'secondary.main',
              fontweight: '700',
              mt: 1,
              cursor: 'pointer',
            }}
          >
            <AddCircleOutlineIcon /> Add New Facilities
          </Typography>
        </Box>
        <List sx={{ width: '100%', bgcolor: 'white' }}>
          <Grid container spacing={1}>
            {['Brochure-1', 'Brochure-2', 'Brochure-3'].map((value, i) => {
              const labelId = `checkbox-list-label-${i}`;

              return (
                <Grid key={i} item xs={12} lg={6}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton
                      role={undefined}
                      onClick={handleToggle(i)}
                      dense
                    >
                      <ListItemIcon>
                        <IconButton edge="end" aria-label="delete">
                          <FolderIcon />
                        </IconButton>
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value} />
                    </ListItemButton>
                  </ListItem>
                </Grid>
              );
            })}
          </Grid>
        </List>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pb: 2,
            pt: 6,
          }}
        >
          <TextField
            type="file"
            id="fullWidth"
            label="Brochure"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: 'white',
              fontweight: '700',
              borderRadius: '5px',
              cursor: 'pointer',
              bgcolor: 'secondary.main',
              py: 2,
              px: 3,
              ml: 2,
            }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: '25px' }} /> Add new
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DashboardBrochureTab;
