import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Politik from './static/fonts/Politik.ttf';

const primary = '#1A2027';
const secondary = '#FB5012';
const tertiary = '#01FDF6';
const q = '#03FCBA';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#F6FEAA',
      main: '#FCE694',
      dark: '#F05D5E',
      contrastText: '#373737',
    },
    secondary: {
      light: '#ff7961',
      main: '#01BAEF',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  // typography: {
  //   fontFamily: 'Politik, Arial',
  // },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'Politik';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('Politik'), local('Politik-Regular'), url(${Politik}) format('ttf');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //   },
  // },
});

// Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   ...
// }

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme} {...props}>
    <CssBaseline />
    {element}
  </ThemeProvider>
);
