import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
} from '@mui/material';
import { useAppDispatch } from 'src/redux/hooks';
import { setScrollSection } from 'src/redux/common/common.slice';
import { useNavigate, useLocation } from 'react-router';

import { items } from './items';

const useStyles = makeStyles((theme: Theme) => ({
  Drawer: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
    },
  },

  DrawerPaper: {
    width: '240px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '240px',
      boxSizing: 'border-box',
    },
  },

  AccountStyle: {
    alignItems: 'center',
    padding: theme.spacing(1, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    overflow: 'hidden',
    // backgroundColor: theme.palette.grey[500],
  },

  Button: {
    marginLeft: 12,
    color: '#132150',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Sidebar = ({ displaySidebar, drawerOpen, drawerToggle, window }: any) => {
  const classes = useStyles();
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const drawer = (
    <React.Fragment>
      <Box>
        <List disablePadding sx={{ p: 1 }}>
          {items.map((item: any, index: number) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.section) {
                    if (location.pathname !== '/') {
                      dispatch(setScrollSection(item.section));
                      navigator('/');
                    }
                    const element = document.getElementById(
                      String(item.section),
                    );
                    element?.scrollIntoView({ behavior: 'smooth' });

                    drawerToggle();
                  } else {
                    navigator(item.link);
                  }
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    displaySidebar && (
      <Box
        component={'nav'}
        className={classes.Drawer}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant={'temporary'}
          anchor="right"
          open={drawerOpen}
          onClose={drawerToggle}
          className={classes.DrawerPaper}
          ModalProps={{ keepMounted: true }}
          color="inherit"
        >
          {drawer}
        </Drawer>
      </Box>
    )
  );
};

export default Sidebar;
