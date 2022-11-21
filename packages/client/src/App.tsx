import React from 'react';
import { useRoutes } from 'react-router';
import { ThemeProvider, useTheme } from '@mui/material';

import './styles/global.scss';
import routes from './routes';

function App() {
  const content = useRoutes(routes);
  const theme = useTheme();

  return <ThemeProvider theme={theme}>{content}</ThemeProvider>;
}

export default App;
