import {
  Box, Button, Modal, Typography, Stack,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { errorHideAC } from '../../redux/actions/errorAction';

function ErrorModal() {
  const { isError, errorText } = useSelector((store) => store.error);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(errorHideAC());
  };

  return (
    <Modal
      open={isError}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={{
        width: '50%',
        height: 'max-content',
        margin: 'auto',
        marginTop: '20%',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        padding: '1rem',
      }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            margin: 'auto', width: 'max-content', fontWeight: 'bold',
          }}
        >
          Ошибка
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {errorText}
        </Typography>
        <Stack direction="row-reverse" sx={{ mt: '0.7rem' }}>
          <Button variant="contained" sx={{ width: 'max-content' }} onClick={handleClose}>Close</Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ErrorModal;
