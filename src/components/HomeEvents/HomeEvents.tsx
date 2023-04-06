import * as React from 'react';
import { Box, Button, Grid, NoSsr, Paper, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import HomeEventCard from '../HomeEventCard/HomeEventCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const HomeEvents = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <NoSsr>
      <Paper elevation={0} sx={{ px: { xs: 1, md: 10 } }}>
        <Typography
          variant="h5"
          color="primary"
          sx={{ fontWeight: '600', textAlign: 'center', mt: 3 }}
        >
          Upcoming Events
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: '600',
            textAlign: 'center',
            color: 'text_color.main',
          }}
        >
          Events That are going to happen soon
        </Typography>
        <Box sx={{ width: '100%', bgcolor: 'background.paper', mt: 5 }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              icon={
                <Typography variant="subtitle1" fontWeight="bold">
                  Monday
                </Typography>
              }
              label="14 June 2023"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <Typography variant="subtitle1" fontWeight="bold">
                  Sunday
                </Typography>
              }
              label="14 June 2023"
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <Typography variant="subtitle1" fontWeight="bold">
                  Thursday
                </Typography>
              }
              label="14 June 2023"
              {...a11yProps(2)}
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={12}>
                <HomeEventCard />
              </Grid>
              <Grid item xs={12} md={12}>
                <HomeEventCard />
              </Grid>
              <Grid item xs={12} md={12}>
                <HomeEventCard />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={12}>
                  <HomeEventCard />
                </Grid>
                <Grid item xs={12} md={12}>
                  <HomeEventCard />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid item xs={12} md={12}>
                    <HomeEventCard />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Paper>
    </NoSsr>
  );
};

export default HomeEvents;
