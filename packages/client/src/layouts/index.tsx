import { Box } from '@mui/material';
import { useEffect } from 'react';
import useResponsive from 'src/hooks/useResponsive';
import {
  selectOpenSidebar,
  setOpenSidebar,
} from 'src/redux/common/common.slice';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';

import Header from './Header';
import Sidebar from './Sidebar';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const openSidebar = useAppSelector(selectOpenSidebar);
  const dispatch = useAppDispatch();
  const matchDownMd = useResponsive({ query: 'down', key: 'md' });

  const handleLeftDrawerToggle = () => {
    dispatch(setOpenSidebar(!openSidebar));
  };

  useEffect(() => {
    dispatch(setOpenSidebar(!matchDownMd));
  }, [dispatch, matchDownMd]);

  return (
    <Box>
      <Header
        displayToggle={matchDownMd}
        handleLeftDrawerToggle={handleLeftDrawerToggle}
      />
      <Sidebar
        displaySidebar={matchDownMd}
        drawerOpen={openSidebar}
        drawerToggle={handleLeftDrawerToggle}
      />
      <main>{children}</main>
      <></>
    </Box>
  );
};

export default Layout;
