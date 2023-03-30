import React from 'react';
import { Box, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import NotificationTable from '@/components/AdminDashboardComponents/NotificationTable/NotificationTable';
import NotificationModal from '@/components/AdminDashboardComponents/NotificationModal/NotificationModal';

const Notification = () => {
  const [openModal, setOpenModal] = React.useState(false);

  // const style = document.createElement('style');
  // style.textContent = `body { font-family: Edu NSW ACT Foundation, sans-serif; }`;
  // document.head.appendChild(style);

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
                Notification
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
            <NotificationTable />
          </Box>
        </Box>
      </AdminDashboardLayout>
      <NotificationModal setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
};

export default Notification;
