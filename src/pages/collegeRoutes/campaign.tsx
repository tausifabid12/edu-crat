import React from 'react';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import { Box, Typography, Grid } from '@mui/material';

import CampaignCard from '@/components/CampaignCard/CampaignCard';

import CampaignTable from '@/components/CampaignTable/CampaignTable';
import CampaignModal from '@/components/CampaignModal/CampaignModal';

import { Scrollbars } from 'react-custom-scrollbars-2';
import ActiveCampaignCard from '@/components/ActiveCampaignCard/ActiveCampaignCard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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

const Campaign = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <CollegeDashboardLayout>
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
          <Grid
            container
            spacing={1}
            sx={{ width: '100%', overflow: 'hidden' }}
          >
            {/* top campaign cards */}
            <Grid item xs={12} lg={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  fontWeight: '600',
                  p: 1,
                }}
              >
                Overview
              </Typography>
              <Grid container spacing={0}>
                {statistics.map((statistic, i) => (
                  <Grid key={i} item xs={12} lg={4} sx={{ p: 1 }}>
                    <CampaignCard statistic={statistic} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {/* Active  campaign cards */}

            <Grid
              item
              xs={12}
              lg={6}
              sx={
                {
                  // border: '1px solid red',
                }
              }
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'primary.main',
                  fontWeight: '600',
                  p: 1,
                }}
              >
                Active Campaigns
              </Typography>
              <Scrollbars autoHide autoHeight style={{ width: '100%' }}>
                <Box sx={{ display: 'flex' }}>
                  {[1, 2, 3].map((item, i) => (
                    <Box key={i} sx={{ p: 1 }}>
                      <ActiveCampaignCard />
                    </Box>
                  ))}
                </Box>
              </Scrollbars>
            </Grid>
          </Grid>

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
            <CampaignTable />
          </Box>
        </Box>
      </CollegeDashboardLayout>
      <CampaignModal setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export default Campaign;
