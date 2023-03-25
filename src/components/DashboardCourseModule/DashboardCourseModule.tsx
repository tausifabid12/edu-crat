import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const DashboardCourseModule = () => {
  const [modules, setModules] = useState(1);
  return (
    <Box>
      <Box sx={{ width: { xs: '100%', md: '50%' }, my: 5 }}>
        <Typography
          variant="h5"
          sx={{ color: 'primary.main', fontWeight: '600', mb: 3 }}
        >
          Course Modules
        </Typography>
        <Stack direction="row" spacing={2}>
          <Stack
            onClick={() => setModules(modules - 1)}
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
                ? setModules(1)
                : setModules(Number(e.target.value));
            }}
            id="outlined-basic"
            type="number"
            label="Modules"
            value={modules}
            variant="outlined"
            sx={{ width: '100%' }}
          />
          <Stack
            onClick={() => setModules(modules + 1)}
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
      <Grid container spacing={3} mt={3} sx={{ pt: 1, width: '100%' }}>
        {[...Array((modules === 0 ? 1 : modules) || 1).keys()].map(
          (item, i) => (
            <Grid key={i} item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label={`Module ${i + 1}`}
                variant="outlined"
                sx={{ width: '100%' }}
              />
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="description"
                multiline
                rows={4}
                sx={{ mt: 2 }}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default DashboardCourseModule;
