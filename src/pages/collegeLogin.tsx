import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';

const CollegeLogin = () => {
  return (
    <>
      <Navbar />
      <Grid
        className=""
        container
        spacing={5}
        sx={{
          marginTop: '70px',
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
              backgroundColor: 'bg_color.main',
              width: '70%',
              height: 'auto',
              borderRadius: '10px',
              padding: '50px',
              py: 6,
              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h4" color="primary" sx={{ fontWeight: '600' }}>
              Partner Login
            </Typography>
            <Typography
              mt={1}
              variant="subtitle2"
              sx={{ color: 'text_color.main', display: 'flex' }}
            >
              {`Please Login to access your account `}{' '}
              {/* <Typography
                component="span"
                variant="subtitle2"
                sx={{ color: 'secondary.main' }}
              >
                Sign up for free
              </Typography> */}
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
              <Typography
                mt={1}
                variant="subtitle2"
                sx={{
                  color: 'text_color.main',
                  display: 'flex',
                  textAlign: 'center',
                }}
              >
                {`Don't have an account yet? `}{' '}
                <Link href="/collegeSignUp">
                  <Typography
                    component="span"
                    variant="subtitle2"
                    sx={{ color: 'secondary.main' }}
                  >
                    Sign up for free
                  </Typography>
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CollegeLogin;
