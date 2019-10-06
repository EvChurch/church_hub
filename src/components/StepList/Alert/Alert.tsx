import { IconButton, Snackbar, SnackbarContent, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { FC, useState } from 'react';

interface AlertProps {
  initialOpen: boolean;
  alertMessage: string;
}

const Alert: FC<AlertProps> = ({ initialOpen, alertMessage }) => {
  const [openAlert, setOpenAlert] = useState(initialOpen);

  const handleClose = (): void => {
    setOpenAlert(false);
  };

  return (
    <Snackbar
      open={openAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      // autoHideDuration={3000}
      // onClose={handleClose}
    >
      <SnackbarContent
        message={<Typography>{alertMessage}</Typography>}
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  );
};

export default Alert;
