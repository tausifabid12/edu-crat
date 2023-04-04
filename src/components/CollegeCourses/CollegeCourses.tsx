import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CourseTable from '../CourseTable/CourseTable';
import { Paper, NoSsr } from '@mui/material';

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

const CollegeCourses = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <NoSsr>
      <Paper elevation={3} sx={{ width: '100%', p: 3 }}>
        <Typography color="primary" variant="h5" mb={3} fontWeight="bold">
          Courses
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              backgroundColor: 'bg_color.light',
              borderRadius: '10px',
              p: 1,
              border: 'none',
            }}
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Engineering" {...a11yProps(1)} />
            <Tab label=" B. Sc" {...a11yProps(2)} />
            <Tab label=" M. Sc" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CourseTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CourseTable />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CourseTable />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CourseTable />
        </TabPanel>
      </Paper>
    </NoSsr>
  );
};

export default CollegeCourses;
