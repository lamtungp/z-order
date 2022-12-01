import React from 'react';
import { useRoutes } from 'react-router';
import { ThemeProvider } from '@mui/material';

import './styles/global.scss';
import routes from './routes';
import customTheme from './styles/theme/createTheme';

function App() {
  const content = useRoutes(routes);
  const theme = customTheme();

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
}

export default App;
