import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import MainLayout from '@/Layouts/MainLayout';

const SignUp = () => {
  return (
    <MainLayout>
      <Grid
        className=""
        container
        spacing={5}
        sx={{
          marginTop: { xs: '70px', lg: '110px' },
          minHeight: '100vh',
          backgroundColor: 'info.light',
          position: 'relative',
        }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          py={19}
          sx={{
            background: `url('/assets/login/bg.png')`,
            backgroundColor: 'primary.main',
            display: { xs: 'none', lg: 'flex' },
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
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
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
              width: { xs: '100%', lg: '85%' },
              height: 'auto',
              borderRadius: '10px',
              padding: { xs: '20px', lg: '50px' },
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" color="primary" sx={{ fontWeight: '600' }}>
              Sign up advertise
            </Typography>
            <Typography
              mt={1}
              variant="subtitle2"
              sx={{ color: 'text_color.main', display: 'flex' }}
            >
              {`Already have an account `}
              <Typography
                component="span"
                variant="subtitle2"
                sx={{ color: 'secondary.main' }}
              >
                {' '}
                Login
              </Typography>
            </Typography>
            <Grid
              className=""
              container
              mt={6}
              sx={{ width: '100%' }}
              spacing={2}
            >
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="Name "
                  helperText=""
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="User Name "
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
                  label="Email"
                  helperText=""
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                {' '}
                <TextField
                  error={false}
                  id="outlined-error"
                  label="Phone Number"
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
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="Conform Password"
                  helperText=""
                />
              </Grid>
              <Grid item xs={12} lg={12}>
                {' '}
                <button className="bg-highlight py-3 text-primary w-full rounded-lg font-semibold">
                  Sign up
                </button>
              </Grid>
            </Grid>
            {/* ======== */}
            {/* <Stack spacing={2} mt={6} sx={{ width: '100%' }}>
              <TextField
                error={false}
                id="outlined-error"
                label="UserName or Email"
                helperText=""
                sx={{ width: '100%' }}
              />
              <TextField
                error={false}
                id="outlined-error"
                label="Password"
                helperText=""
              />
              <button className="bg-highlight py-3 text-primary w-full rounded-lg font-semibold">
                Sign up
              </button>
            </Stack> */}
            <Typography
              mt={3}
              variant="subtitle1"
              sx={{ color: 'primary.main', textAlign: 'center' }}
            >
              Or SingIn Using
            </Typography>
            <Stack direction="row" spacing={2} mt={3}>
              <button className="bg-white py-3 text-sm text-blue-500 border-2 border-blue-500 w-full rounded-lg font-semibold">
                Login vai Facebook
              </button>
              <button className="bg-white py-3 text-sm text-red-500 border-2 border-red-500 w-full rounded-lg font-semibold">
                Login vai Google
              </button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default SignUp;
