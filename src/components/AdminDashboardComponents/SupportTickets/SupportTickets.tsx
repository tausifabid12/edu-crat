import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

const SupportTickets = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        backgroundColor: 'bg_color.main',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,.1)',
        borderRadius: '10px',
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: '600', color: 'secondary.main' }}
      >
        All Ticket
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ mt: 2 }}
        size="small"
      />
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #E5E5E5',
            py: 2,
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ color: 'text_color.main' }}>
              ID: TicketID0
            </Typography>
            <Typography variant="body2" sx={{ color: 'text_color.main' }}>
              Assignee: assignee-0
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box pr={2}>
              <Typography variant="body2" sx={{ color: 'text_color.main' }}>
                Mar 30, 2023
              </Typography>
              <Typography variant="body2" sx={{ color: 'text_color.main' }}>
                16:23
              </Typography>
            </Box>
            <Button size="small" variant="contained">
              connect
            </Button>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default SupportTickets;
