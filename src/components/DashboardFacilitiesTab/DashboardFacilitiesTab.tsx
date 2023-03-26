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
import { Button } from '@mui/material';

const DashboardFacilitiesTab = () => {
  const [checked, setChecked] = React.useState([0]);
  const [openModal, setOpenModal] = React.useState(false);

  const handleClickModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

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
            mb: 2,
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
            Facilities
          </Typography>

          <Typography
            onClick={handleClickModalOpen}
            variant="body1"
            sx={{
              color: 'secondary.main',
              fontweight: '700',
              fontSize: { xs: '12px', sm: '16px' },
              mt: 1,
              cursor: 'pointer',
            }}
          >
            <AddCircleOutlineIcon /> Add New
          </Typography>
        </Box>
        <List sx={{ width: '100%', bgcolor: 'white' }}>
          <Grid container spacing={1}>
            {[
              'Hostel',
              'Library',
              'Transportation',
              'Sports Space',
              ' Laboratories',
              'Furnishings',
            ].map((value, i) => {
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
      </Box>
      <DashboardFacilitiesModal
        handleClickModalOpen={handleClickModalOpen}
        handleModalClose={handleModalClose}
        openModal={openModal}
      />
    </>
  );
};

export default DashboardFacilitiesTab;
