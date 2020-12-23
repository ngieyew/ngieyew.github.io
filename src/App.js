import React, { useMemo } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './theme';
import MainRouter from './MainRouter';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const extendedTheme = useMemo(
    () =>
      responsiveFontSizes(
        createMuiTheme({
          ...theme,
          palette: {
            ...theme.palette,
            mode: prefersDarkMode ? 'dark' : 'light',
          },
          components: {
            MuiAppBar: {
              styleOverrides: {
                colorPrimary: {
                  backgroundColor: prefersDarkMode
                    ? theme.palette.primary.dark
                    : theme.palette.primary.light,
                },
              },
            },
          },
        })
      ),
    [prefersDarkMode]
  );

  return (
    <Router>
      <ThemeProvider theme={extendedTheme}>
        <CssBaseline />
        <MainRouter />
      </ThemeProvider>
    </Router>
  );
};

export default App;
