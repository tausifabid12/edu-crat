import { createTheme } from '@mui/material/styles';

// Define the custom colors
interface CustomPaletteColor {
  light: string;
  main: string;
}

declare module '@mui/material/styles' {
  interface Palette {
    custom: CustomPaletteColor;
  }

  interface PaletteOptions {
    custom?: CustomPaletteColor;
    bg_color?: CustomPaletteColor;
    text_color?: CustomPaletteColor;

  }
}

// Create the custom theme
const theme = createTheme({

  palette: {
    // mode: 'dark',
    primary: {
        main: '#140342',
      },
      secondary: {
        main: '#6440fb',
        contrastText: '#8a9099'
    },
    info: {
        main: '#f5f7fe',
        light: '#fefbf4'
      },
    custom: {
      light: '#ffa726',
      main: '#f57c00',

    },
    bg_color: {
      light: '#f5f7fe',
      // main: '#1a1a1a',
      main: '#fff',
      
    },
    text_color: {
      light: '#ffa726',
      main: '#777777',
      
    },
  },
  
});



export default theme