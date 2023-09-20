import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
    fontWeightBold: 700,
    h1: {
      fontSize: '24px',
    },
    h4: {
      fontSize: '18px',
    },
  },
  palette: {
    primary: {
      main: '#000A10',
      light: '#aaa',
    },
    secondary: {
      main: '#F9F9F9',
    },

    blue: {
      main: '#D8E1ED',
    },
    black: {
      main: '#000A10',
    },
    gray: {
      main: '#ACADAD',
      dark: '#686868',
    },
    white: {
      main: '#FAFDFE',
    },
  },
});
