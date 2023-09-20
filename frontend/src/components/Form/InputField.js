import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './styles';

function InputField({ label, value, type, onChange, error, helperText }) {
  return (
    <TextField style={styles.textInput}
      variant="outlined"
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth
      required
      error={!!error}
      helperText={error && helperText}
    />
  );
}

export default InputField;
