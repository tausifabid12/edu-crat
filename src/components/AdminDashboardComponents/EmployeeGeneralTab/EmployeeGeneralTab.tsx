import React from 'react';
import { Grid, TextField } from '@mui/material';

interface EmployeeGeneralTabProps {
  setValue: (value: number) => void;
}

const EmployeeGeneralTab: React.FC<EmployeeGeneralTabProps> = ({
  setValue,
}) => {
  return (
    <>
      <Grid container spacing={3} mt={3} sx={{ pt: 1, mb: 4, width: '100%' }}>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label=" Name"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Adhar No."
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <TextField
            id="outlined-basic"
            label="Pan Card No."
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <TextField
            multiline
            rows={4}
            id="outlined-basic"
            label="Experience."
            variant="outlined"
            sx={{ width: '100%' }}
          />
        </Grid>
      </Grid>
      <button
        onClick={() => setValue(1)}
        className="bg-secondary text-white px-10 py-3 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary"
      >
        Next
      </button>
    </>
  );
};

export default EmployeeGeneralTab;
