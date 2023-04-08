import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import MainLayout from '@/Layouts/MainLayout';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthProvider';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import LoadingButton from '@mui/lab/LoadingButton';
import { GoogleAuthProvider } from 'firebase/auth';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

type Inputs = {
  email: string;
  name: string;
  username: string;
  phone: string;
  password: string;
  CPassword: string;
};

const CREATE_NEW_USER = gql`
  mutation SignUp($signUpInput: SignUpInput) {
    signUp(signUpInput: $signUpInput) {
      token
    }
  }
`;

const SignUp = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [gLoading, setGLoading] = useState(false);
  const { socialLogin, createUser, user } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // sending userData to server and getting token and setting token in cookies
  const [SignUp, { data: signUpToken, error: regError }] =
    useMutation(CREATE_NEW_USER);

  // redirecting to home page after login and getting token
  useEffect(() => {
    if (signUpToken) {
      setError('');
      router.push('/');
      toast.success('SignUp success');
      setLoading(false);
      Cookies.set('edu_cart_token', `Bearer ${signUpToken.signUp.token}`);
    }
  }, [signUpToken, router]);

  // console.log(Cookies.get('edu_cart_token'), 'token');

  // handling SIGN UP
  const handleAuthentication: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    const newUserInfo = {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
    };

    createUser(data.email, data.password)
      .then((result: { user: { uid: string } }) => {
        if (result?.user?.uid) {
          SignUp({ variables: { signUpInput: newUserInfo } });
          if (signUpToken) {
            setError('');
            router.push('/');
            toast.success('Sign Up success');
            setLoading(false);
          } else {
            setError('Something went wrong');
            setLoading(false);
          }
        }
      })
      .catch((error: { message: string }) => {
        setError(error.message);
        // e.target.reset();
        setLoading(false);
      });
  };

  // handling google login
  const handleGoogleSignIn = () => {
    setGLoading(true);
    socialLogin(googleProvider)
      .then((result: { user: { uid: string } }) => {
        if (result?.user?.uid) {
          setError('');
          router.push('/');
          toast.success('login success');
          setGLoading(false);
        }
      })
      .catch((error: { message: string }) => {
        setError(error.message);
        setGLoading(false);
      });
  };

  return (
    <MainLayout>
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
                sx={{
                  color: 'secondary.main',
                  ml: 1,
                  textDecoration: 'underline',
                }}
              >
                {' '}
                Login
              </Typography>
            </Typography>

            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'red', textAlign: 'center', mx: 'auto' }}
            >
              {error.slice(10, error.length)}
            </Typography>

            {/* ------------- */}

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
                  error={errors.name ? true : false}
                  id="outlined-error"
                  label="Name "
                  helperText=""
                  sx={{ width: '100%' }}
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'red' }}
                  >
                    required
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  error={errors.username ? true : false}
                  id="outlined-error"
                  label="UserName "
                  helperText=""
                  sx={{ width: '100%' }}
                  {...register('username', { required: true })}
                />
                {errors.username && (
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'red' }}
                  >
                    required
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} lg={6}>
                {' '}
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
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  error={errors.phone ? true : false}
                  id="outlined-error"
                  label="phone "
                  helperText=""
                  sx={{ width: '100%' }}
                  {...register('phone', { required: true })}
                />
                {errors.phone && (
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'red' }}
                  >
                    required
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} lg={6}>
                {' '}
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
              </Grid>
              <Grid item xs={12} lg={6}>
                {' '}
                <TextField
                  fullWidth
                  error={false}
                  id="outlined-error"
                  label="Conform Password"
                  {...register('CPassword', {
                    required: true,
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
                {watch('CPassword') !== watch('password') && (
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: 'red' }}
                  >
                    password not match
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} lg={12}>
                <LoadingButton
                  type="submit"
                  size="large"
                  // onClick={() => setLoading(true)}
                  loading={loading}
                  variant="contained"
                  sx={{ width: '100%' }}
                >
                  <span>Sign Up</span>
                </LoadingButton>
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
              <LoadingButton
                size="large"
                onClick={handleGoogleSignIn}
                // loading={gLoading}

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
    </MainLayout>
  );
};

export default SignUp;
