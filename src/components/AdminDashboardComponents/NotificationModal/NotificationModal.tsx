import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DialogContentText, Grid, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AttachmentIcon from '@mui/icons-material/Attachment';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface ModalProps {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}

// steps

const steps = [
  {
    label: 'Content',
    description: (
      <>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              fullWidth
              label="Event"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              fullWidth
              label="Title"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              fullWidth
              label="Subtitle"
              id="outlined-size-small"
              size="small"
            />
            <TextField
              multiline
              rows={4}
              fullWidth
              label="Message"
              id="outlined-size-small"
              size="small"
            />
          </div>
        </Box>
      </>
    ),
  },
  {
    label: 'Create an ad group',
    description: (
      <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Start Date" sx={{ width: '100%' }} />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="End Date" sx={{ width: '100%', my: 2 }} />
        </LocalizationProvider>
      </>
    ),
  },
  {
    label: 'Create an ad',
    description: (
      <>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            width: '100%',
            border: '1px dashed ',
            borderColor: 'grey.500',
            borderRadius: 3,
            position: 'relative',
          }}
        >
          <label htmlFor="file-input">
            <IconButton component="span">
              <AttachmentIcon
                sx={{ color: 'secondary.main', fontSize: '60px' }}
              />
            </IconButton>
          </label>
          <input
            className="hidden absolute w-full h-full"
            id="file-input"
            type="file"
            // onChange={handleFileChange}
          />
        </Box>
      </>
    ),
  },
];

const NotificationModal: React.FC<ModalProps> = ({
  openModal,
  setOpenModal,
}) => {
  const [role, setRole] = React.useState('');
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [activeStep, setActiveStep] = React.useState(0);

  // steper functions
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const fields = ['Dashboard', 'Campaigns', 'Support', 'Roles'];

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '11px',
            minWidth: { xs: '100%', sm: '530px' },
            p: { xs: 3, sm: 1 },
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{'Create User Role'}</DialogTitle>
        <DialogContent>
          {/* steps */}
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                {/* <Typography>
                  All steps completed - you&apos;re finished
                </Typography> */}
                <Button
                  variant="contained"
                  onClick={handleReset}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Submit
                </Button>
              </Paper>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NotificationModal;
