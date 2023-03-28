import React from 'react';

import { Box, Typography, Grid } from '@mui/material';

import CampaignCard from '@/components/CampaignCard/CampaignCard';

import CampaignTable from '@/components/CampaignTable/CampaignTable';
import CampaignModal from '@/components/CampaignModal/CampaignModal';

import { Scrollbars } from 'react-custom-scrollbars-2';
import ActiveCampaignCard from '@/components/ActiveCampaignCard/ActiveCampaignCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import RolesTable from '@/components/AdminDashboardComponents/RolesTable/RolesTable';
import CreateRoleModal from '@/components/AdminDashboardComponents/CreateRoleModal/CreateRoleModal';

const statistics = [
  {
    title: 'Active Campaigns',
    value: 100,
  },
  {
    title: 'Avg. Click Rate',
    value: 50,
  },
  {
    title: 'Avg. Open Rate',
    value: 200,
  },
];

const Roles = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
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
                Campaigns
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
              <AddCircleOutlineIcon /> Add New
            </Typography>
          </Box>

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
            <RolesTable />
          </Box>
        </Box>
      </AdminDashboardLayout>
      <CreateRoleModal setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export default Roles;
