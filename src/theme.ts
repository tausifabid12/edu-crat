import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#140342',
    },
    secondary: {
        main: '#6440fb',
        contrastText: '#8a9099'
    },
    info: {
      main: '#f5f7fe'
    },
   
  },
});


export default theme