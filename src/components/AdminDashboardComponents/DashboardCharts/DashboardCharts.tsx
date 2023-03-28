import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import StudentChart from '../StudentChart/StudentChart';
import TransactionsCharts from '../TransactionsCharts/TransactionsCharts';

const data = [30, 40, 35, 50, 49, 60, 70, 91, 125];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

const transitionData = [30, 40, 15, 10, 5];
const labels = ['Apple', 'Banana', 'Cherry', 'Orange', 'Grape'];

const DashboardCharts = () => {
  return (
    <Paper elevation={0}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <StudentChart data={data} months={months} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TransactionsCharts data={transitionData} labels={labels} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DashboardCharts;
