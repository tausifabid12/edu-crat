import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Stack, Typography, NoSsr } from '@mui/material';
import Image from 'next/image';
import MainLayout from '@/Layouts/MainLayout';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthProvider';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import LoadingButton from '@mui/lab/LoadingButton';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

type Inputs = {
  email: string;
  password: string;
};

const LOGIN_USER = gql`
  mutation LoginToken($input: LoginInput!) {
    login(loginInput: $input) {
      token
    }
  }
`;

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [gLoading, setGLoading] = useState(false);
  const [fLoading, setFLoading] = useState(false);
  const { socialLogin, login } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // sending userData to server and getting token
  const [LoginToken, { data: loginToken, loading: tokenLoading }] =
    useMutation(LOGIN_USER);

  // redirecting to home page after login and getting token and setting token in cookies
  useEffect(() => {
    if (loginToken) {
      setError('');
      router.push('/');
      toast.success('Log in success');
      setLoading(false);
      Cookies.set('edu_cart_token', `Bearer ${loginToken.login.token}`);
    }
  }, [loginToken, router, tokenLoading]);

  // handling login
  const handleAuthentication: SubmitHandler<Inputs> = (data) => {
    setLoading(true);

    const loginInfo = {
      email: data.email,
    };

    login(data.email, data.password)
      .then((result: { user: { uid: string } }) => {
        if (result?.user?.uid) {
          LoginToken({ variables: { input: loginInfo } });
        }
      })
      .catch((error: { message: string }) => {
        setError(error.message);
        // e.target.reset();
        setLoading(false);
      });
  };

  // handling facebook login
  const handleFacebookSignIn = () => {
    console.log('helllo');
    setFLoading(true);
    socialLogin(facebookProvider)
      .then((result: { user: { uid: string; email: string } }) => {
        if (result?.user?.uid) {
          LoginToken({ variables: { input: { email: result?.user?.email } } });
        }
      })
      .catch((error: { message: string }) => {
        setError(error.message);
        setFLoading(false);
      });
  };
  // handling google login
  const handleGoogleSignIn = () => {
    setGLoading(true);
    socialLogin(googleProvider)
      .then((result: { user: { uid: string; email: string } }) => {
        if (result?.user?.uid) {
          LoginToken({ variables: { input: { email: result?.user?.email } } });
        }
      })
      .catch((error: { message: string }) => {
        setError(error.message);
        setGLoading(false);
      });
  };

  return (
    <NoSsr>
      <MainLayout>
        {/* <form> */}
        <Grid
          className=""
          container
          spacing={5}
          sx={{
            marginTop: { xs: '70px', lg: '100px' },
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
              onSubmit={handleSubmit(handleAuthentication)}
              sx={{
                backgroundColor: 'bg_color.main',
                width: { xs: '100%', lg: '80%' },
                height: 'auto',
                borderRadius: '10px',
                padding: '50px',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
              }}
              noValidate
              autoComplete="off"
            >
              <Typography
                variant="h4"
                color="primary"
                sx={{ fontWeight: '600' }}
              >
                Login
              </Typography>
              <Typography
                mt={1}
                variant="subtitle2"
                sx={{ color: 'text_color.main', display: 'flex' }}
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

              <Typography
                component="span"
                variant="body2"
                sx={{ color: 'red', ml: 2, textAlign: 'center' }}
              >
                {error.slice(10, error.length)}
              </Typography>

              {/* -------------- */}
              <Stack spacing={2} mt={6} sx={{ width: '100%' }}>
                <Box>
                  <TextField
                    error={errors.email ? true : false}
                    type="email"
                    id="outlined-error"
                    label="email"
                    {...register('email', {
                      required: 'required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format',
                      },
                    })}
                    sx={{ width: '100%' }}
                  />
                  {errors.email && (
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'red' }}
                    >
                      {errors.email.message}
                    </Typography>
                  )}
                </Box>
                <Box>
                  <TextField
                    fullWidth
                    error={errors.password ? true : false}
                    id="outlined-error"
                    label="password"
                    {...register('password', {
                      required: true,
                      minLength: 6,
                    })}
                  />
                  {errors.password && errors.password.type === 'required' && (
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'red' }}
                    >
                      required
                    </Typography>
                  )}
                  {errors.password && errors.password.type === 'minLength' && (
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'red' }}
                    >
                      Password must have 6 character
                    </Typography>
                  )}
                </Box>

                <LoadingButton
                  type="submit"
                  size="large"
                  // onClick={() => setLoading(true)}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  <span>Log in</span>
                </LoadingButton>
              </Stack>
              <Typography
                mt={3}
                variant="subtitle1"
                sx={{ color: 'primary.main', textAlign: 'center' }}
              >
                Or SingIn Using
              </Typography>
              <Stack direction="row" spacing={2} mt={3}>
                <LoadingButton
                  size="large"
                  onClick={handleFacebookSignIn}
                  loading={fLoading}
                  loadingPosition="end"
                  variant="outlined"
                  sx={{
                    color: 'rgb(59, 130 ,246, 1)',
                    border: '2px solid',
                    borderColor: 'rgb(59, 130 ,246, 1)',
                    fontWeight: '600',
                    width: '100%',
                    fontSize: '13px',
                  }}
                >
                  <span>Login vai Facebook</span>
                </LoadingButton>
                <LoadingButton
                  size="large"
                  onClick={handleGoogleSignIn}
                  loading={gLoading}
                  loadingPosition="end"
                  variant="outlined"
                  sx={{
                    color: 'crimson',
                    border: '2px solid',
                    borderColor: 'crimson',
                    fontWeight: '600',
                    width: '100%',
                    fontSize: '12px',
                  }}
                >
                  <span> Login vai Google</span>
                </LoadingButton>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        {/* </form> */}
      </MainLayout>
    </NoSsr>
  );
};

export default Login;
