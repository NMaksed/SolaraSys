import React from 'react';
import TextField from '@mui/material/TextField';
import styles from '../Styles/FormsStyles';

function InputField({ label, value, type, onChange, error, helperText, variant="outlined", autoFocus}) {
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
      autoFocus={autoFocus}
    />
  );
}

export default InputField;
