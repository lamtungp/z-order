import { Box, Link, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import useResponsive from 'src/hooks/useResponsive';
import { selectOpenSidebar } from 'src/redux/common/common.slice';
import { useAppSelector } from 'src/redux/hooks';

const useStyles = makeStyles((theme: Theme) => ({
  FooterWrapper: {
    borderRadius: 0,
    padding: theme.spacing(0, 2),
    display: 'flex',
    justifyContent: 'end',
  },

  FooterContent: {
    padding: theme.spacing(2, 0),
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'block',
    textAlign: 'center',

    [theme.breakpoints.up('md')]: {
      display: 'flex',
      textAlign: 'left',
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Box component={'footer'} className={classes.FooterWrapper}>
      <Box className={classes.FooterContent}>
        <Box>
          <Typography variant="subtitle1">&copy; 2022 - Zinza Order</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
