import React from 'react';
import { Box, Link, Stack, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch } from 'src/redux/hooks';
import { setScrollSection } from 'src/redux/common/common.slice';
import { useNavigate, useLocation } from 'react-router';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: '20px 0',
    maxWidth: 960,
    alignItems: 'center',
    textAlign: 'center',

    '& .MuiIconButton-root': {
      padding: 0,
      margin: 7,
    },

    [theme.breakpoints.down('md')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },

    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },

  Stack: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 12,
    },
  },

  MenuLink: {
    padding: '0 10px',
    fontWeight: 400,
    color: '#132150',
    fontSize: 16,

    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },

    [theme.breakpoints.down(360)]: {
      fontSize: 10,
    },
  },

  LinkRoot: {
    paddingRight: 10,
    color: '#132150',
    fontSize: 16,
    fontWeight: 400,

    [theme.breakpoints.down(360)]: {
      fontSize: 13,
    },
  },
}));

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
    link: '/feedback',
  },
];

const Footer = () => {
  const classes = useStyles();
  const navigator = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ background: '#ffffff' }}>
      <Stack
        className={classes.Root}
        component="footer"
        direction="row"
        justifyContent="space-between"
      >
        <Stack
          className={classes.Stack}
          direction="row"
          justifyContent="center"
        >
          {menuItem.map((item, index) =>
            item.link ? (
              <Typography
                key={index}
                className={classes.MenuLink}
                component={Link}
                href={item.link}
                target="_blank"
                underline="hover"
              >
                {item.label}
              </Typography>
            ) : (
              <Typography
                className={classes.MenuLink}
                underline="hover"
                key={index}
                component={Link}
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  if (item.link) {
                    navigator(item.link);
                  } else {
                    if (location.pathname !== '/') {
                      dispatch(setScrollSection(item.section));
                      navigator('/');
                    }
                    const element = document.getElementById(
                      String(item.section),
                    );
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </Typography>
            ),
          )}
        </Stack>

        <Typography
          className={classes.LinkRoot}
          component={Link}
          href="/"
          target="_blank"
          underline="hover"
        >
          &copy; 2022 Z-Order
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
