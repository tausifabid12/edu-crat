import { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import MainLayout from '@/Layouts/MainLayout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
// import { Send } from '@material-ui/icons';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  return (
    <MainLayout>
      <Paper elevation={0} sx={{ mt: { xs: '70px', sm: '110px' } }}>
        <Box
          sx={{
            background: `linear-gradient( rgba(20, 3, 66, .5), rgba(20, 3, 66, .5)),  url('/assets/contact.jpg')`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h3" sx={{ color: 'white', fontWeight: '600' }}>
            Contact Us
          </Typography>
        </Box>
        {/* <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography> */}
        <Grid container spacing={2} sx={{ py: 15, px: { xs: 2, sm: 10 } }}>
          <Grid item xs={12} sm={6} sx={{ mb: { xs: 7, lg: 0 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  color: 'primary.main',
                  bgcolor: 'primary.main',
                  borderColor: 'primary.main',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: 2,
                }}
              >
                <LocationOnIcon sx={{ color: 'white' }} />
              </Typography>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: '600', color: 'primary.main' }}
                >
                  Address
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: '600', color: 'text_color.main' }}
                >
                  Gaibandha-5700, Rangpur, Bangladesh
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
              <Typography
                sx={{
                  color: 'primary.main',
                  bgcolor: 'primary.main',
                  borderColor: 'primary.main',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: 2,
                }}
              >
                <LocationOnIcon sx={{ color: 'white' }} />
              </Typography>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: '600', color: 'primary.main' }}
                >
                  Address
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: '600', color: 'text_color.main' }}
                >
                  Gaibandha-5700, Rangpur, Bangladesh
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
              <Typography
                sx={{
                  color: 'primary.main',
                  bgcolor: 'primary.main',
                  borderColor: 'primary.main',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: 2,
                }}
              >
                <LocationOnIcon sx={{ color: 'white' }} />
              </Typography>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: '600', color: 'primary.main' }}
                >
                  Address
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: '600', color: 'text_color.main' }}
                >
                  Gaibandha-5700, Rangpur, Bangladesh
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* from */}
          <Grid item xs={12} sm={6}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="name"
                    label="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    error={nameError}
                    helperText={nameError && 'Please enter your name'}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={emailError}
                    helperText={
                      emailError && 'Please enter a valid email address'
                    }
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="email"
                    label="Phone"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    error={emailError}
                    helperText={
                      emailError && 'Please enter a valid email address'
                    }
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    error={messageError}
                    helperText={messageError && 'Please enter your message'}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    startIcon={<SendIcon />}
                    type="submit"
                    sx={{ px: 5, py: 2 }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </MainLayout>
  );
};

export default ContactUs;
