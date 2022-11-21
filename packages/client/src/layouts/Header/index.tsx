import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderSearch from './Buttons/Search';

const useStyles = makeStyles((theme: Theme) => ({
  HeaderWrapper: {
    padding: theme.spacing(0, 2),
    zIndex: 5,
    justifyContent: 'space-between',
    width: '100%',
  },
}));

type Props = {};

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Box
      component={'header'}
      className={classes.HeaderWrapper}
      display="flex"
      alignItems="center"
    >
      <HeaderSearch />

      <Box display="flex" alignItems="center">
        <HeaderButtons />
        <HeaderUserbox />
      </Box>
    </Box>
  );
};

export default Header;
