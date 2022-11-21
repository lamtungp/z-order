import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Button,
  CSSObject,
  Drawer,
  Stack,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { SortOutlined, MenuOutlined } from '@mui/icons-material';

import { items } from './items';
import SidebarItems from './SidebarItems';

const openedMixin = (theme: Theme): CSSObject => ({
  width: 240,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const useStyles = makeStyles((theme: Theme) => ({
  Drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
    },
  },

  DrawerPaper: {
    flexShrink: 0,

    '& .MuiDrawer-paper': {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      width: 240,
      boxSizing: 'border-box',
    },
  },

  ArrowBack: {
    display: 'flex',
    justifyContent: 'end',
    padding: theme.spacing(1, 1, 0),

    '& .MuiButtonBase-root': {
      minWidth: 'auto',
    },
  },

  Divider: {
    borderColor: 'rgb(238, 238, 238) !important',
  },
}));

const Sidebar = ({ drawerOpen, drawerToggle, window }: any) => {
  const classes = useStyles();
  const theme = useTheme();

  const getMixin = (theme: Theme) => {
    return drawerOpen
      ? {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }
      : {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        };
  };

  const drawer = (
    <React.Fragment>
      <Box className={classes.ArrowBack}>
        <Button color="primary" onClick={drawerToggle}>
          {drawerOpen ? <MenuOutlined /> : <SortOutlined />}
        </Button>
      </Box>

      {items.map((menuItem, index) => (
        <SidebarItems key={index} drawerOpen={drawerOpen} menuItem={menuItem} />
      ))}

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}
        >
          <Box sx={{ textAlign: 'center', userSelect: 'none' }}>
            <Typography variant="body2" color="primary">
              v1.0.0
            </Typography>
          </Box>
        </Stack>
      </Box>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component={'nav'} className={classes.Drawer}>
      <Drawer
        id="sidebar"
        container={container}
        variant={'permanent'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        className={classes.DrawerPaper}
        sx={getMixin(theme)}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
