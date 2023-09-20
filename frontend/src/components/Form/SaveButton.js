import React from 'react';
import Button from '@mui/material/Button';

function SaveButton({ disabled }) {
  return (
    <Button variant="contained" disabled={disabled}>
      Salvar
    </Button>
  );
}

export default SaveButton;
