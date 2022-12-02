import { FormControl, InputBase, InputAdornment, Button } from '@mui/material';
import React from 'react';
import useResponsive from 'src/hooks/useResponsive';

type TextInputProps = {
  endAdornment?: React.ReactNode;
  placeholder?: string;
  rows?: number;
  multiline?: boolean;
};

const TextInput = ({
  endAdornment,
  placeholder,
  rows,
  multiline,
}: TextInputProps) => {
  const matchDownMd = useResponsive({ query: 'down', key: 'md' });

  return (
    <FormControl
      sx={{
        background: matchDownMd ? 'inherit' : '#FFFFFF',
        borderRadius: '8px',
        height: matchDownMd ? '34px' : 'inherit',
      }}
      variant="outlined"
      fullWidth
    >
      <InputBase
        multiline={multiline}
        rows={rows}
        sx={{
          padding: '11.25px 15px',
          borderRadius: '8px',
          paddingRight: 0,
          border: '1px solid rgba(0, 0, 0, 0.23)',
        }}
        placeholder={placeholder}
        endAdornment={endAdornment}
      />
    </FormControl>
  );
};

export default TextInput;
