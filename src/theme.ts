import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
    fontWeightBold: 700,
    h1: {
      fontSize: '24px',

      '@media (max-width: 600px)': {
        fontSize: '20px',
      },

      '@media (max-width: 450px)': {
        fontSize: '20px',
      },
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      textAlign: 'center',

      '@media (max-width: 600px)': {
        fontSize: '18px',
      },

      '@media (max-width: 450px)': {
        fontSize: '16px',
      },
    },
    h4: {
      fontSize: '18px',

      '@media (max-width: 600px)': {
        fontSize: '16px',
      },

      '@media (max-width: 450px)': {
        fontSize: '14px',
      },
    },
  },

  palette: {
    accent: {
      main: '#FEE2C5',
    },
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
