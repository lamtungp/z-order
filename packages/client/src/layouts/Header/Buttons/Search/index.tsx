import { useState, ChangeEvent } from 'react';
import { Box, IconButton, Theme, InputBase } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  Search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },

  SearchIconWrapper: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  InputBase: {
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  },
}));

const HeaderSearch = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.Search}>
        <Box className={classes.SearchIconWrapper}>
          <IconButton color="primary">
            <SearchTwoToneIcon />
          </IconButton>
        </Box>
        <InputBase
          className={classes.InputBase}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
    </>
  );
};

export default HeaderSearch;
