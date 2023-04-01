import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { FormControlLabel, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import Radio from '@mui/material/Radio';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const SignUp = () => {
  const [selectedValue, setSelectedValue] = React.useState('singleCollege');
  const [count, setCount] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Navbar />
      <Grid
        className=""
        container
        spacing={5}
        sx={{
          marginTop: '120px',
          minHeight: '100vh',
          backgroundColor: 'info.light',
          position: 'relative',
        }}
      >
        {/* <Grid
          item
          xs={12}
          lg={6}
          py={19}
          sx={{
            background: `url('/assets/login/bg.png')`,
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box>
            <Image
              src="/assets/login/1.png"
              height={400}
              width={400}
              alt="login"
            />
          </Box>
        </Grid> */}
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="form"
            sx={{
              backgroundColor: 'bg_color.main',
              width: { xs: '100%', lg: '70%' },
              height: 'auto',
              borderRadius: '10px',
              padding: '50px',
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" color="primary" sx={{ fontWeight: '600' }}>
              Sign up
            </Typography>
            <Typography
              mt={1}
              variant="subtitle2"
              sx={{ color: 'text_color.main', display: 'flex' }}
            >
              {`Already have an account `}
              <Link href="/collegeLogin">
                <Typography
                  component="span"
                  variant="subtitle2"
                  sx={{ color: 'secondary.main' }}
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
            <Grid
              className=""
              container
              mt={6}
              sx={{ width: '100%' }}
              spacing={2}
            >
              <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  mt={1}
                  variant="subtitle1"
                  sx={{ color: 'text_color.main', mr: 3 }}
                >
                  Want to access
                </Typography>
                <div>
                  <FormControlLabel
                    value="singleCollege"
                    control={
                      <Radio
                        size="small"
                        checked={selectedValue === 'singleCollege'}
                        onChange={handleChange}
                        value="singleCollege"
                      />
                    }
                    label="Single College"
                  />
                  <FormControlLabel
                    value="multipleCollege"
                    control={
                      <Radio
                        size="small"
                        checked={selectedValue === 'multipleCollege'}
                        value="multipleCollege"
                        onChange={handleChange}
                      />
                    }
                    label="Multiple College"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="College Name "
                  helperText=""
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="Email "
                  helperText=""
                  sx={{ width: '100%' }}
                />
              </Grid>

              <Grid item xs={12} lg={6}>
                {' '}
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="User Name"
                  helperText=""
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                {' '}
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="Password"
                  helperText=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                {' '}
                <TextField
                  type="file"
                  fullWidth
                  id="fullWidth"
                  label="Document"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            {selectedValue === 'multipleCollege' && count ? (
              <>
                <Stack spacing={2} mt={2}>
                  <Typography
                    mt={3}
                    pl={3}
                    variant="subtitle1"
                    sx={{ color: 'primary.main' }}
                  >
                    Associate Colleges
                  </Typography>

                  {[...Array(count)].map((_, i) => (
                    <Grid key={i} container spacing={3} sx={{ width: '100%' }}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          error={false}
                          id="outlined-error"
                          label="College Name "
                          helperText=""
                          sx={{ width: '100%' }}
                        />
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        {' '}
                        <TextField
                          type="file"
                          fullWidth
                          id="fullWidth"
                          label="Document"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  ))}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      onClick={() => setCount(count + 1)}
                      mt={3}
                      pl={3}
                      variant="subtitle1"
                      sx={{ color: 'primary.main' }}
                    >
                      Add Another <AddCircleOutlineIcon />
                    </Typography>
                    {count > 1 && (
                      <Typography
                        onClick={() => setCount(count - 1)}
                        mt={3}
                        pl={3}
                        variant="subtitle1"
                        sx={{ color: 'primary.main' }}
                      >
                        Remove One <RemoveCircleOutlineIcon />
                      </Typography>
                    )}
                  </Box>
                </Stack>
              </>
            ) : null}
            <Grid item xs={12} lg={12}>
              {' '}
              <button className="bg-highlight w-40 py-3 text-primary mt-7 rounded-lg font-semibold">
                Sign up
              </button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
