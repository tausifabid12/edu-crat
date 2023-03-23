import React from 'react';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';
import { Box, Typography, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DashboardAddPhotoModal from '@/components/DashboardAddPhotoModal/DashboardAddPhotoModal';

const Photos = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const data = [
    {
      title: 'Event-1',
      desc: 'Lorem ipsum dolor sit amet',
      image: '/assets/events/1.png',
    },
    {
      title: 'Event-2',
      desc: 'Lorem ipsum dolor sit amet',
      image: '/assets/events/2.png',
    },
    {
      title: 'Event-3',
      desc: 'Lorem ipsum dolor sit amet',
      image: '/assets/events/3.png',
    },
    {
      title: 'Event-4',
      desc: 'Lorem ipsum dolor sit amet',
      image: '/assets/events/4.png',
    },
    {
      title: 'Event-5',
      desc: 'Lorem ipsum dolor sit amet',
      image: '/assets/events/5.png',
    },
    {
      title: 'Event-6',
      desc: 'Lorem ipsum dolor sit amet',
      image: '/assets/events/6.png',
    },
  ];

  return (
    <>
      <CollegeDashboardLayout>
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2,
            }}
          >
            <Box mb={3}>
              <Typography
                variant="h4"
                sx={{ color: 'primary.main', fontWeight: '600' }}
              >
                Media Library
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: 'secondary.contrastText',
                  fontWeight: '400',
                  mt: '3',
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
                mt: 1,
                cursor: 'pointer',
              }}
            >
              <AddCircleOutlineIcon /> Add New Photos
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid key={index} item sm={12} lg={4}>
                <Box
                  sx={{
                    width: '100%',
                    background: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.image}')`,
                    height: '100%',
                    minHeight: '260px',
                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'end',
                    flexDirection: 'column',
                    p: 5,
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: 'White', fontWeight: '600' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: '600',
                    }}
                  >
                    {item.desc}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      p: 1,
                      borderRadius: '50%',
                      top: 10,
                      right: 10,
                      position: 'absolute',
                    }}
                  >
                    <DeleteIcon sx={{ color: 'white' }}></DeleteIcon>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CollegeDashboardLayout>
      <DashboardAddPhotoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Photos;
