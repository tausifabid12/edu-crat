import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import MyCourseCard from './MyCourseCard/MyCourseCard';
import { courses } from '@/utilities/CourseData/CourseData';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
interface CourseInfo {
  id: number;
  title: string;
  imgSrc: string;
  lessons: number;
  duration: string;
  level: string;
}

const MyCourseTab: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="All Courses" {...a11yProps(0)} />
          <Tab label="Finished" {...a11yProps(1)} />
          <Tab label="Not enrolled" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} mt={0}>
          {courses.map((course) => {
            return (
              <Grid key={course?.id} item xs={12} lg={4}>
                <MyCourseCard data={course} />
              </Grid>
            );
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            minHeight: '500px',
          }}
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            sx={{ color: 'primary.main' }}
          >
            You have not finished any course yet.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            minHeight: '500px',
          }}
        >
          <Typography
            gutterBottom
            variant="subtitle1"
            component="p"
            sx={{ color: 'primary.main' }}
          >
            You have not enrolled in any course yet.
          </Typography>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default MyCourseTab;
