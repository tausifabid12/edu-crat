import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NoSsr from '@mui/base/NoSsr';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import AddCollegeGeneralTab from '@/components/AdminDashboardComponents/AddCollegeGeneralTab/AddCollegeGeneralTab';
import AddCollegeMediaTab from '@/components/AdminDashboardComponents/AddCollegeMediaTab/AddCollegeMediaTab';
import AddCollegeExpertiseTab from '@/components/AdminDashboardComponents/AddCollegeExpertiseTab/AddCollegeExpertiseTab';
import AddCollegeFacultyTab from '@/components/AdminDashboardComponents/AddCollegeFacultyTab/AddCollegeFacultyTab';
import AddCollegeCourseTab from '@/components/AdminDashboardComponents/AddCollegeCourseTab/AddCollegeCourseTab';

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

const AddCollege = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <NoSsr>
      <AdminDashboardLayout>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="General Info" {...a11yProps(0)} />
              <Tab label="Course Fees" {...a11yProps(1)} />
              <Tab label="Media" {...a11yProps(2)} />
              <Tab label="expertise" {...a11yProps(3)} />
              <Tab label="Professor" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AddCollegeGeneralTab value={value} setValue={setValue} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AddCollegeCourseTab value={value} setValue={setValue} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <AddCollegeMediaTab value={value} setValue={setValue} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <AddCollegeExpertiseTab value={value} setValue={setValue} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <AddCollegeFacultyTab value={value} setValue={setValue} />
          </TabPanel>
        </Box>
      </AdminDashboardLayout>
    </NoSsr>
  );
};

export default AddCollege;
