import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ variant = 'outlined', text = 'Salvar', onClick }) => {

  return (
    <Button variant={variant} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CustomButton;