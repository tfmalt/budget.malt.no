import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#ff9800',
    },
    success: {
      main: '#66bb6a',
    },
    info: {
      main: '#673ab7',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto Slab',
    },
    h2: {
      fontFamily: 'Roboto Slab',
      fontSize: 'clamp(1.8rem, 5vw, 2.4rem)',
      fontWeight: '400',
    },
    h3: {
      fontFamily: 'Roboto Slab',
    },
    h4: {
      fontFamily: 'Roboto Slab',
    },
    h5: {
      fontFamily: 'Roboto Slab',
    },
    h6: {
      fontFamily: 'Roboto',
    },
  },
});
