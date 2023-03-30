import SupportChat from '@/components/AdminDashboardComponents/SupportChat/SupportChat';
import SupportTickets from '@/components/AdminDashboardComponents/SupportTickets/SupportTickets';
import TicketDrawer from '@/components/AdminDashboardComponents/TicketDrawer/TicketDrawer';
import AdminDashboardLayout from '@/Layouts/AdminDashboardLayout';
import { Button, Grid, TextField, Typography, Box } from '@mui/material';
import React from 'react';

const Support = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <AdminDashboardLayout>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5} sx={{}}>
            <SupportTickets />
          </Grid>
          <Grid item xs={12} md={7} sx={{}}>
            <SupportChat setIsOpen={setIsOpen} />
          </Grid>
        </Grid>
        <Button onClick={() => setIsOpen(true)}>{'right'} </Button>

        <TicketDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>
    </AdminDashboardLayout>
  );
};

export default Support;
