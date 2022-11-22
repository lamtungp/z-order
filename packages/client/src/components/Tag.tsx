import * as React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';
import { SxProps } from '@mui/material';

const TagStyle: SxProps = {
  borderRadius: '6px',

  '& .MuiChip-label': {
    fontWeight: 500,
  },
};

const Tag = ({ ...props }: ChipProps) => {
  return <Chip sx={TagStyle} {...props} />;
};

export default Tag;
