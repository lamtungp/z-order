import { FC, Fragment, ReactNode } from 'react';
import { Box, Theme, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import {
  selectOpenSidebar,
  setOpenSidebar,
} from 'src/redux/common/common.slice';
import useResponsive from 'src/hooks/useResponsive';

import Header from '../Header';
import Footer from '../Footer';

import Sidebar from './Sidebar';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  MainContent: {
    flex: '1 1 auto',
    overflow: 'auto',
  },

  MainWrapper: {
    height: '100%',
    width: '100%',

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const openSidebar = useAppSelector(selectOpenSidebar);
  const matchUpMd = useResponsive({ query: 'up', key: 'md' });

  const handleLeftDrawerToggle = () => {
    dispatch(setOpenSidebar(!openSidebar));
  };

  return (
    <Fragment>
      <Box sx={{ display: 'flex' }}>
        <Box>
          <Sidebar
            drawerOpen={openSidebar}
            drawerToggle={handleLeftDrawerToggle}
          />
        </Box>

        <Box component={'main'} className={classes.MainWrapper}>
          <Header />
          <Box className={classes.MainContent}>
            <Outlet />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Fragment>
  );
};

export default SidebarLayout;
