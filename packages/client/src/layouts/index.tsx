import { Box } from '@mui/material';

import Header from './Header';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <main>{children}</main>
      <></>
    </Box>
  );
};

export default Layout;
