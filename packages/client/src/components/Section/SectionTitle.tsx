import React from 'react';
import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  SectionTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 24,

    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },

  SectionDescription: {
    fontSize: 18,
    marginTop: 6,

    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
}));

type SectionTitleProps = {
  title?: string;
  description?: string;
  color?: string;
};

const SectionTitle = ({ title, description, color }: SectionTitleProps) => {
  const classes = useStyles();

  return (
    <Box sx={{ textAlign: 'center' }}>
      {title && (
        <Typography
          color={color}
          className={classes.SectionTitle}
          variant="body1"
        >
          {title}
        </Typography>
      )}
      {description && (
        <Typography className={classes.SectionDescription} variant="subtitle2">
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
