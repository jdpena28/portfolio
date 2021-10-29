import * as React from 'react';
import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const ValidationTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: 'gray',
    },
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
  ' & label.Mui-focused': { 
    color: 'gray'
  },
  ' & label': {
    color: 'gray'
  },
  
});

export default function CustomizedInputs() {
  return (
      <ValidationTextField
        label="Email"
        required
        variant="outlined"
      />
  );
}