import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NoSsr from '@mui/base/NoSsr';
import DashboardGeneralTab from '@/components/DashboardGeneralTab/DashboardGeneralTab';
import DashboardFacilitiesTab from '@/components/DashboardFacilitiesTab/DashboardFacilitiesTab';
import DashboardCoursesTab from '@/components/DashboardCoursesTab/DashboardCoursesTab';

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
const CollegeInfo = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CollegeDashboardLayout>
      <NoSsr>
        <Box
          sx={{
            width: '100%',
            minHeight: '100%',
            bgcolor: 'white',
            borderRadius: '14px',
            px: { xs: 1, sm: 5 },
            py: 3,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Courses" {...a11yProps(1)} />
              <Tab label="Facilities" {...a11yProps(2)} />
              <Tab label="Broacher" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <DashboardGeneralTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DashboardCoursesTab />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <DashboardFacilitiesTab />
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Three
          </TabPanel>
        </Box>
      </NoSsr>
    </CollegeDashboardLayout>
  );
};

export default CollegeInfo;
