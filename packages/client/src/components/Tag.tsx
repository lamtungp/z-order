import * as React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import { SxProps } from '@mui/material';

const TagStyle: SxProps = {
  borderRadius: '6px',

  '& .MuiChip-label': {
    fontWeight: 500,
  },
};

const Tag = ({ sx, ...props }: ChipProps) => {
  return <Chip sx={{ ...TagStyle, ...sx }} {...props} />;
};

export default Tag;
