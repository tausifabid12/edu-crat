import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  Stack,
  TextField,
  Paper,
  Box,
  Typography,
  Grid,
  Button,
} from '@mui/material';

interface TabProps {
  setValue: (value: number) => void;
  value: number;
}

const AddCollegeFacultyTab: React.FC<TabProps> = ({ setValue, value }) => {
  const [faculty, setFaculty] = useState(1);
  return (
    <>
      <Box sx={{ width: { xs: '100%', md: '50%' }, my: 5 }}>
        <Typography
          variant="h5"
          sx={{ color: 'primary.main', fontWeight: '600', mb: 3 }}
        >
          Number of Faculties
        </Typography>
        <Stack direction="row" spacing={2}>
          <Stack
            onClick={() => setFaculty(faculty - 1)}
            sx={{
              backgroundColor: 'secondary.main',
              p: 2,
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <RemoveIcon sx={{ color: 'white' }} />
          </Stack>

          <TextField
            onChange={(e) => {
              Number(e.target.value) <= 0
                ? setFaculty(1)
                : setFaculty(Number(e.target.value));
            }}
            id="outlined-basic"
            type="number"
            label="faculties"
            value={faculty}
            variant="outlined"
            sx={{ width: '90px' }}
          />
          <Stack
            onClick={() => setFaculty(faculty + 1)}
            sx={{
              backgroundColor: 'secondary.main',
              p: 2,
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            <AddIcon sx={{ color: 'white' }} />
          </Stack>
        </Stack>
      </Box>
      {/* end of top section */}
      {[...Array((faculty === 0 ? 1 : faculty) || 1).keys()].map((item) => (
        <Paper key={item} elevation={0}>
          <Typography variant="h5" sx={{ color: 'primary.main', mb: 3 }}>
            Faculty Details-{item + 1}
          </Typography>
          <Grid container spacing={3} sx={{ width: { xs: '100%' }, mb: 4 }}>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Faculty Name" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Position" />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth label="Specialty" />
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Button
        onClick={() => setValue(value + 1)}
        variant="outlined"
        color="secondary"
        size="large"
        sx={{ mt: 3 }}
      >
        next
      </Button>
    </>
  );
};

export default AddCollegeFacultyTab;
