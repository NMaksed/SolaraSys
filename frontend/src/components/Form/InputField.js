import React from 'react';
import TextField from '@mui/material/TextField';
import styles from '../styles/FormsStyles';

function InputField({ label, value, type, onChange, error, helperText, variant="outlined" }) {
  return (
    <TextField style={styles.textInput}
      variant={variant}
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
