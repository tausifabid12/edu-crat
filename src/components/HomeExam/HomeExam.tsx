import { Box, Button, Paper, Typography, Grid, NoSsr } from '@mui/material';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ExamCard from '../ExampCard/ExamCard';

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

const HomeExam = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <NoSsr>
      <Paper sx={{ px: { xs: 1, sm: 10 } }}>
        <Typography
          variant="h5"
          color="primary"
          sx={{ fontWeight: '600', textAlign: 'center', mt: 3 }}
        >
          Top Exams
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: '600',
            textAlign: 'center',
            color: 'text_color.main',
          }}
        >
          Exams cherry picked for you
        </Typography>
        <Box sx={{ mx: 'auto', position: 'relative', mt: 5 }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab label="Engineering" {...a11yProps(0)} />
                <Tab label="Medical" {...a11yProps(1)} />
                <Tab label="B sc" {...a11yProps(2)} />
                <Tab label="M sc" {...a11yProps(3)} />
                <Tab label="B Tech" {...a11yProps(4)} />
                <Tab label="B com" {...a11yProps(5)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid key={item} item xs={12} md={4}>
                    <ExamCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid key={item} item xs={12} md={4}>
                    <ExamCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid key={item} item xs={12} md={4}>
                    <ExamCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid key={item} item xs={12} md={4}>
                    <ExamCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid key={item} item xs={12} md={4}>
                    <ExamCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Grid key={item} item xs={12} md={4}>
                    <ExamCard />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </Box>
        </Box>
      </Paper>
    </NoSsr>
  );
};

export default HomeExam;
