import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';

const Login = () => {
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
        <Grid
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
              backgroundColor: 'white',
              width: '70%',
              height: 'auto',
              borderRadius: '10px',
              padding: '50px',
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" color="primary" sx={{ fontWeight: '600' }}>
              Login
            </Typography>
            <Typography
              mt={1}
              variant="subtitle2"
              sx={{ color: 'secondary.contrastText', display: 'flex' }}
            >
              {`Don't have an account yet? `}{' '}
              <Typography
                component="span"
                variant="subtitle2"
                sx={{ color: 'secondary.main' }}
              >
                Sign up for free
              </Typography>
            </Typography>
            <Stack spacing={2} mt={6} sx={{ width: '100%' }}>
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
                Login
              </button>
            </Stack>
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
    </>
  );
};

export default Login;