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
import { MenuOutlined } from '@mui/icons-material';

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
    display: 'flex',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',

    [theme.breakpoints.down('md')]: {
      paddingLeft: 20,
      paddingRight: 20,

      '& > a > img': {
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
    opacity: 0.8,
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: 400,
    width: 'auto',

    '&:hover': {
      opacity: 1,
    },
  },

  ButtonSignIn: {
    marginLeft: 12,
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  ButtonSignUp: {
    marginLeft: 6,
    minWidth: 100,
    background: '#F3BA00',
    borderRadius: 8,
    color: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: 16,

    '&:hover': {
      background: 'bisque',
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
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          {displayToggle ? (
            <Box component="span">
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
                >
                  <MenuOutlined />
                </Avatar>
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
                <Button className={classes.ButtonSignIn} disableRipple>
                  Sign in
                </Button>
                <Button variant="contained" className={classes.ButtonSignUp}>
                  Sign up
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Header;
