import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';

const AddCollegeCourseFees = () => {
  const [Semester, setSemester] = React.useState(0);
  return (
    <Paper elevation={0} sx={{ mt: 5 }}>
      <Paper elevation={0}>
        <Typography
          variant="h6"
          sx={{ color: 'primary.main', fontWeight: '600', mb: 2 }}
        >
          Course Name
        </Typography>
        <TextField label="title" />
      </Paper>
      <Grid
        container
        spacing={3}
        sx={{ mt: 2, width: { xs: '100%', sm: '80%' } }}
      >
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Total Fees" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            onChange={(e) => setSemester(parseFloat(e.target.value))}
            fullWidth
            label="Semester"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Years" />
        </Grid>
        {[...Array((Semester === 0 ? 1 : Semester) || 1).keys()].map(
          (item, i) => (
            <Grid key={i} item xs={12} lg={6}>
              <TextField fullWidth label={`Semester -${i + 1} `} />
            </Grid>
          )
        )}
      </Grid>
    </Paper>
  );
};

export default AddCollegeCourseFees;
