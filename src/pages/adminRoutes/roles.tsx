import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Stack, Typography, NoSsr } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import RolesPeopleTable from '@/components/AdminDashboardComponents/RolesPeopleTable/RolesPeopleTable';
import CreateRoleModal from '@/components/AdminDashboardComponents/CreateRoleModal/CreateRoleModal';
import RolesTable from '@/components/AdminDashboardComponents/RolesTable/RolesTable';
import AddPeopleModal from '@/components/AdminDashboardComponents/AddPeopleModal/AddPeopleModal';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

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

const Roles = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [openPeopleModal, setOpenPeopleModal] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <NoSsr>
        <AdminDashboardLayout>
          <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box mb={3}>
                <Typography
                  variant="h4"
                  sx={{ color: 'primary.main', fontWeight: '600' }}
                >
                  User Roles
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: 'text_color.main',
                    fontWeight: '400',
                    mt: '2',
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur.
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  onClick={() => setOpenModal(true)}
                  variant="body1"
                  sx={{
                    color: 'secondary.main',
                    fontweight: '700',
                    fontSize: { xs: '12px', sm: '16px' },
                    mt: 1,
                    cursor: 'pointer',
                  }}
                >
                  <AddCircleOutlineIcon /> Add Role
                </Typography>
                <Typography
                  onClick={() => setOpenPeopleModal(true)}
                  variant="body1"
                  sx={{
                    color: 'secondary.main',
                    fontweight: '700',
                    fontSize: { xs: '12px', sm: '16px' },
                    mt: 1,
                    ml: 2,
                    cursor: 'pointer',
                  }}
                >
                  <AddCircleOutlineIcon /> Add People
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <Tab label="Roles" {...a11yProps(0)} />
                  <Tab label="Peoples" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <RolesTable />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box
                  sx={{
                    width: '100%',
                    bgcolor: 'white',
                    borderRadius: '14px',
                    //   px: { xs: 1, sm: 5 },
                    mt: 5,
                    py: 3,
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.09)',
                  }}
                >
                  <RolesPeopleTable />
                </Box>
              </TabPanel>
              <TabPanel value={value} index={2}></TabPanel>
            </Box>
          </Box>
        </AdminDashboardLayout>
        <CreateRoleModal setOpenModal={setOpenModal} openModal={openModal} />
        <AddPeopleModal
          setOpenPeopleModal={setOpenPeopleModal}
          openPeopleModal={openPeopleModal}
        />
      </NoSsr>
    </>
  );
};

export default Roles;
