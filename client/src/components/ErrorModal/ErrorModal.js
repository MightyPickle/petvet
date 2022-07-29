import {
  Box, Button, Modal, Typography, Stack,
} from '@mui/material';
import React, { useState } from 'react';

function ErrorModal() {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
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
          Error
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Stack direction="row-reverse" sx={{ mt: '0.7rem' }}>
          <Button variant="contained" sx={{ width: 'max-content' }} onClick={handleClose}>Close</Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ErrorModal;
