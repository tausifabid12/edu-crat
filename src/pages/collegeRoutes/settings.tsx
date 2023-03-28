import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditProfileTab from '@/components/EditProfileTab/EditProfileTab';
import EditPasswordTab from '@/components/EditPasswordTab/EditPasswordTab';
import EditSocialProfile from '@/components/EditSocialProfile/EditSocialProfile';
import CloseAccountTab from '@/components/CloseAccountTab/CloseAccountTab';

import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import DashboardCollegeProfileSetting from '@/components/DashboardCollegeProfileSetting/DashboardCollegeProfileSetting';

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

const Settings = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <CollegeDashboardLayout>
      <Box
        sx={{
          width: '100%',
          backgroundColor: 'bg_color.main',
          mb: 3,
          borderRadius: '14px',
          p: 2,
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Edit Profile" {...a11yProps(0)} />
            <Tab label="Password" {...a11yProps(1)} />
            <Tab label="Social Profile" {...a11yProps(2)} />
            <Tab label="Close Account" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <DashboardCollegeProfileSetting />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EditPasswordTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <EditSocialProfile />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <CloseAccountTab />
        </TabPanel>
      </Box>
    </CollegeDashboardLayout>
  );
};

export default Settings;
