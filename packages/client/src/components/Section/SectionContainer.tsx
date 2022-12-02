import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  Root: {
    margin: '0 auto',
    padding: '60px 0',
    maxWidth: 960,
    paddingLeft: 10,
    paddingRight: 10,

    [theme.breakpoints.down(1000)]: {
      paddingLeft: 20,
      paddingRight: 20,
    },

    [theme.breakpoints.down('md')]: {
      padding: '60px 20px',
    },

    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px',
    },
  },
}));

const SectionContainer = ({ children, ...props }: any) => {
  const classes = useStyles(props);

  return (
    <Box
      component={'section'}
      sx={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <Box sx={props.sx} className={classes.Root}>
        {children}
      </Box>
    </Box>
  );
};

export default SectionContainer;
