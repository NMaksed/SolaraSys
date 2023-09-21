import React from 'react';
import ReactInputMask from 'react-input-mask';
import TextField from '@mui/material/TextField';
import styles from '../styles/FormsStyles';

function MaskedInput({ mask, label, value, onChange, error, helperText }) {
  return (
    <ReactInputMask mask={mask} onChange={onChange}>
      {() => (
        <TextField style={styles.textInput}
          variant="outlined"
          label={label}
          fullWidth
          required
          error={!!error}
          helperText={error && helperText}
        />
      )}
    </ReactInputMask>
  );
}

export default MaskedInput;
