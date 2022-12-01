import { createTheme } from '@mui/material/styles';

const customTheme = (customization?: any) => {
  const fontFamily = ['Source Sans Pro', 'sans-serif'].join(',');

  return createTheme({
    typography: {
      fontFamily,
    },
  });
};

export default customTheme;
