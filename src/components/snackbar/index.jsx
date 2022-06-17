import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppSnackbar = ({ error, resetError }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    resetError();
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error?.severity} sx={{ width: '100%' }}>
          {error?.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AppSnackbar;
