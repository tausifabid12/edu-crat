import MainLayout from '@/Layouts/MainLayout';
import React from 'react';
import { Button, Typography, Paper, Box, Grid } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import NearMeIcon from '@mui/icons-material/NearMe';
import DownloadIcon from '@mui/icons-material/Download';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CollegeInfoTab from '@/components/CollegeInfoTab/CollegeInfoTab';
import CoursesAndFeesTab from '@/components/CoursesAndFeesTab/CoursesAndFeesTab';
import AdmissionTab from '@/components/AdmissionTab/AdmissionTab';

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

const College = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <MainLayout>
      <Paper
        elevation={0}
        sx={{
          mt: { xs: '70px', sm: '120px' },
          height: '400px',
          background: `linear-gradient(90deg, rgba(20,3,66,1) 0%, rgba(20,3,66,1) 2%, rgba(19,19,26,0.3) 81%), url('/assets/campus.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0px',
          display: 'flex',
          alignItems: 'center',
          pl: { xs: 2, sm: 10 },
        }}
      >
        {/* top section */}
        <Box sx={{ backgroundColor: 'transparent' }}>
          <Typography
            variant="h4"
            color="white"
            sx={{ fontWeight: '600', fontSize: { xs: '35px', sm: '50px' } }}
          >
            Indian Institute of Technology
          </Typography>
          <Typography
            color="white"
            variant="subtitle1"
            sx={{
              fontWeight: '600',
              mt: 1,
              fontSize: { xs: '15px', sm: '22px' },
            }}
          >
            <PlaceIcon
              sx={{ color: 'white', fontSize: { xs: '17px', sm: '20px' } }}
            />{' '}
            Chennai, Tamil Nadu
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Typography
              color="white"
              variant="body2"
              sx={{
                fontWeight: '600',
                mr: 1,
                fontSize: { xs: '12px', sm: '17px' },
              }}
            >
              <DateRangeIcon
                sx={{
                  color: 'white',
                  fontSize: { xs: '13px', sm: '17px' },
                  mr: 2,
                }}
              />
              ESTD 1959
            </Typography>
            <Typography
              color="white"
              variant="body2"
              sx={{
                fontWeight: '600',
                mr: 2,
                fontSize: { xs: '12px', sm: '17px' },
              }}
            >
              <AccountBalanceIcon
                sx={{
                  color: 'white',
                  fontSize: { xs: '13px', sm: '17px' },
                  mr: 1,
                }}
              />
              Public College
            </Typography>
            <Typography
              color="white"
              variant="body2"
              sx={{
                fontWeight: '600',
                mr: 2,
                fontSize: { xs: '12px', sm: '17px' },
              }}
            >
              <OfflinePinIcon
                sx={{
                  color: 'white',
                  fontSize: { xs: '13px', sm: '17px' },
                  mr: 1,
                }}
              />
              AICTE Approved
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              variant="outlined"
              sx={{ color: 'white', borderColor: 'white', mr: 3 }}
            >
              Apply Now <NearMeIcon sx={{ ml: 1 }} />
            </Button>
            <Button
              variant="outlined"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              Brochure <DownloadIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
        </Box>
      </Paper>
      {/* Body with tabs */}
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          bgcolor: 'white',
          px: { xs: 0.2, sm: 10 },
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="basic tabs example"
          >
            <Tab label="College Info" {...a11yProps(0)} />
            <Tab label="Courses & Fees" {...a11yProps(1)} />
            <Tab label="Admission" {...a11yProps(2)} />
            <Tab label="Reviews" {...a11yProps(3)} />
            <Tab label="Placement" {...a11yProps(4)} />
            {/* <Tab label="Faculty" {...a11yProps(5)} />
            <Tab label="F.A.Q" {...a11yProps(6)} /> */}
          </Tabs>
        </Box>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} md={9}>
            <TabPanel value={value} index={0}>
              <CollegeInfoTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <CoursesAndFeesTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <AdmissionTab />
            </TabPanel>
          </Grid>
          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default College;
