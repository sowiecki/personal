import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
});

// Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   ...
// }

export const wrapPageElement = ({ element, props }) => {
  const [hasRedirectedState, setHasRedirectedState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !hasRedirectedState) {
      setHasRedirectedState(true);
      navigate('/redirect');
    }
  }, [hasRedirectedState]);

  return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
);
  }
