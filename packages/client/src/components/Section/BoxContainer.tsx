import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles(() => ({
  Root: {
    backgroundImage: 'url(/images/judge-bg.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

type BoxContainerProps = {
  children?: React.ReactNode;
};

const BoxContainer = ({ children }: BoxContainerProps) => {
  const classes = useStyles();
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight);
      window.onresize = () => {
        setWindowHeight(window.innerHeight);
      };
    }
  }, []);

  return (
    <Box
      className={classes.Root}
      sx={{ minHeight: `calc(${windowHeight}px - 64px)` }}
    >
      {children}
    </Box>
  );
};

export default BoxContainer;
