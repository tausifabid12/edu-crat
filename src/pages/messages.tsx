import ChatPage from '@/components/ChatPage/ChatPage';
import MessageInfo from '@/components/MessageInfo/MessageInfo';
import DashboardLayout from '@/Layouts/DashboardLayout';
import { Box, Grid, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const messages = () => {
  return (
    <DashboardLayout>
      <Box sx={{ px: { xs: 1, sm: 4 } }}>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Messages
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'text_color.main', fontWeight: '400', mt: '2' }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2} mt={3} mb={5}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: 'bg_color.main',
                  borderRadius: '14px',
                  p: 2,
                  boxShadow: '0px 0px 1px 3px rgba(0, 0, 0, 0.03)',
                }}
              >
                <MessageInfo />
              </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Box
                sx={{
                  backgroundColor: 'bg_color.main',
                  borderRadius: '14px',
                  p: 2,
                  boxShadow: '0px 0px 1px 3px rgba(0, 0, 0, 0.03)',
                }}
              >
                <ChatPage />
              </Box>
            </Grid>
          </Grid>

          {/*           
          <Grid
            container
            spacing={3}
            mt={6}
            mb={10}
            sx={{
              p: 0,
              width: '100%',
            }}
          >
            <Grid
              item
              xs={12}
              lg={4}
              sx={{
                backgroundColor: 'bg_color.main',
                borderRadius: '14px',
                p: 2,
                boxShadow: '0px 0px 1px 3px rgba(0, 0, 0, 0.03)',
              }}
            >
              <MessageInfo />
            </Grid>
            <Grid
              item
              xs={12}
              lg={7}
              sx={{
                backgroundColor: 'bg_color.main',
                borderRadius: '14px',
                p: 2,
                width: '100%',
                boxShadow: '0px 0px 1px 3px rgba(0, 0, 0, 0.03)',
              }}
            >
              
              <ChatPage />
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default messages;
