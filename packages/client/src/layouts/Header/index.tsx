import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Theme,
  Box,
  Button,
  List,
  ListItem,
  Typography,
  Avatar,
  ButtonBase,
} from '@mui/material';
import { Link } from 'react-router-dom';

const menuItem = [
  {
    label: 'Trang chủ',
    link: '/',
  },
  {
    label: 'Khám phá',
    section: 'explore',
  },
  {
    label: 'Đặt đồ ăn',
    link: '/order',
  },
  {
    label: 'Lịch đặt đồ',
    link: '/schedule',
  },
  {
    label: 'Phản hồi',
    section: 'feedback',
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    top: 0,
    zIndex: 1100,
    padding: '0.5rem 0',
    position: 'fixed',
    width: '100%',
    color: '#ffffff',

    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },

  ButtonToggle: {
    [theme.breakpoints.down('sm')]: {
      width: 30,
      height: 30,
    },
  },

  Header: {
    maxWidth: 960,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down(1000)]: {
      paddingLeft: 20,
      paddingRight: 20,
    },

    [theme.breakpoints.down('md')]: {
      padding: '14px 20px',
    },

    [theme.breakpoints.down('sm')]: {
      padding: '6px 20px',

      '& > img': {
        width: 120,
      },
    },
  },

  RightNav: {
    display: 'flex',
    alignItems: 'center',
  },

  ListItem: {
    cursor: 'pointer',
    padding: '0.5rem',
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: 400,
    width: 'auto',

    '&:hover': {
      opacity: 1,
    },
  },

  ButtonRegister: {
    width: 120,
    color: '#250f8a',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    fontWeight: 600,
    fontSize: 16,
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
}));

const Header = ({ displayToggle, handleLeftDrawerToggle }: any) => {
  const classes = useStyles();

  const [windowScroll, setWindowScroll] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onscroll = () => setWindowScroll(window.scrollY);
    }
  }, []);

  useEffect(() => {
    window.location.hash = '';
  });

  return (
    <>
      <Box
        className={classes.Root}
        sx={
          windowScroll > 0
            ? {
                background: 'rgba(19, 104, 189, 0.95)',
                backdropFilter: 'blur(6px)',
              }
            : { background: 'transparent' }
        }
        component="header"
      >
        <Box className={classes.Header} component="nav">
          <Link to={'/'}>
            <img src="/favicon.ico" alt="logo" />
          </Link>
          {displayToggle ? (
            <Box component="span">
              <Typography
                component="span"
                sx={{ marginRight: '4px', color: '#ffffff' }}
              ></Typography>
              <ButtonBase
                sx={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                <Avatar
                  variant="rounded"
                  className={classes.ButtonToggle}
                  sx={{ background: 'transparent' }}
                  onClick={handleLeftDrawerToggle}
                  color="inherit"
                ></Avatar>
              </ButtonBase>
            </Box>
          ) : (
            <>
              <Box className={classes.RightNav}>
                <List sx={{ display: 'flex', flexGrow: 1 }}>
                  {menuItem.map((item) => (
                    <ListItem
                      className={classes.ListItem}
                      sx={{}}
                      key={item.label}
                      disableGutters
                    >
                      <Typography
                        component={'span'}
                        onClick={() => {
                          if (item.link) {
                          } else {
                            const element = document.getElementById(
                              String(item.section),
                            );
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        sx={{
                          flexGrow: 1,
                          fontSize: '15px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.label}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>

              <Box>
                <Avatar src="" alt="s" />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
