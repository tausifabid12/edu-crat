import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
  Stack,
} from '@mui/material';
import { CheckCircle, Cancel } from '@mui/icons-material';

import { useRouter } from 'next/router';
import CollegeDashboardLayout from '@/Layouts/CollegeDashboardLayout';

const Pricing = () => {
  const router = useRouter();

  return (
    <CollegeDashboardLayout>
      <Box py={3}>
        <Box mb={7} pl={4}>
          <Typography
            variant="h4"
            sx={{ color: 'primary.main', fontWeight: '600' }}
          >
            Pricing
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'text_color.main',
              fontWeight: '400',
              mt: '3',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur.
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ py: 3, borderRadius: '14px' }}>
                {/* <CardHeader title="Basic" /> */}
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box pb={5}>
                    <Typography
                      variant="h5"
                      pb={1}
                      color="primary"
                      sx={{ fontWeight: '600' }}
                    >
                      Basic Plan
                    </Typography>
                    <Typography variant="h4" color="primary">
                      $9.99/mo
                    </Typography>
                  </Box>

                  <Stack spacing={3}>
                    <Typography variant="subtitle1">
                      <CheckCircle color="primary" /> 100 Leads
                    </Typography>
                    <Typography variant="subtitle1">
                      <CheckCircle color="primary" /> 30 Days Slider Ads
                    </Typography>
                    <Typography variant="subtitle1">
                      <Cancel color="error" /> Limited features
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => router.push('/checkout')}
                    >
                      Buy Now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ py: 3, borderRadius: '14px' }}>
                {/* <CardHeader title="Basic" /> */}
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box pb={5}>
                    <Typography
                      variant="h5"
                      pb={1}
                      color="primary"
                      sx={{ fontWeight: '600' }}
                    >
                      Business Plan
                    </Typography>
                    <Typography variant="h4" color="primary">
                      $29.99/mo
                    </Typography>
                  </Box>

                  <Stack spacing={3}>
                    <Typography variant="subtitle1">
                      <CheckCircle color="primary" /> 500 Leads
                    </Typography>
                    <Typography variant="subtitle1">
                      <CheckCircle color="primary" /> 120 Days Slider Ads
                    </Typography>
                    <Typography variant="subtitle1">
                      <Cancel color="error" /> Limited features
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => router.push('/checkout')}
                    >
                      Buy Now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ py: 3, borderRadius: '14px' }}>
                {/* <CardHeader title="Basic" /> */}
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box pb={5}>
                    <Typography
                      variant="h5"
                      pb={1}
                      color="primary"
                      sx={{ fontWeight: '600' }}
                    >
                      Advanced Plan
                    </Typography>
                    <Typography variant="h4" color="primary">
                      $99.99/mo
                    </Typography>
                  </Box>

                  <Stack spacing={3}>
                    <Typography variant="subtitle1">
                      <CheckCircle color="primary" /> 1000 Leads
                    </Typography>
                    <Typography variant="subtitle1">
                      <CheckCircle color="primary" /> 300 Days Slider Ads
                    </Typography>
                    <Typography variant="subtitle1">
                      <CheckCircle color="primary" /> All features
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => router.push('/checkout')}
                    >
                      Buy Now
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </CollegeDashboardLayout>
  );
};

export default Pricing;
