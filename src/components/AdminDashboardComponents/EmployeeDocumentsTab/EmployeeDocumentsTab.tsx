import React from 'react';
import { Grid, TextField } from '@mui/material';

interface EmployeeGeneralTabProps {
  setValue: (value: number) => void;
}

const EmployeeDocumentsTab: React.FC<EmployeeGeneralTabProps> = ({
  setValue,
}) => {
  return (
    <>
      <Grid container spacing={3} mt={3} sx={{ pt: 1, mb: 4, width: '100%' }}>
        <Grid item xs={12} lg={6} p={1}>
          <TextField
            type="file"
            fullWidth
            id="fullWidth"
            label="Image"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6} p={1}>
          <TextField
            type="file"
            fullWidth
            id="fullWidth"
            label="CV"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6} p={1}>
          <TextField
            type="file"
            fullWidth
            id="fullWidth"
            label="Experience"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <button
        onClick={() => setValue(2)}
        className="bg-secondary text-white px-10 py-3 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary"
      >
        Next
      </button>
    </>
  );
};

export default EmployeeDocumentsTab;
