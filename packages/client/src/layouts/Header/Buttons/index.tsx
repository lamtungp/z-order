import React from 'react';
import { Box } from '@mui/material';

import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';

export type Props = {};

const HeaderButtons: React.FC<Props> = () => {
  return (
    <Box sx={{ mr: 1 }}>
      <Box sx={{ mx: 0.5 }} component="span">
        <HeaderNotifications />
      </Box>
    </Box>
  );
};

export default HeaderButtons;
