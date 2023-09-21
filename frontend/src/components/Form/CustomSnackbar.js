import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function CustomSnackbar({ message, severity = 'info', open, onClose }) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
      <MuiAlert
        elevation={6}
        variant="filled"
        severity={severity}
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}

export default CustomSnackbar;
