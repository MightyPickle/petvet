import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddChronicModal({
  handleOpen,
  handleClose,
  open,
  handleAddChronic,
}) {
  console.log(open, '<<<< OPEN!');
  const [form, setForm] = React.useState('');
  const inputHandler = (e) => {
    setForm(e.target.value);
    console.log(form);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавление новой хронической болезни:
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddChronic(form);
            }}
          >
            <TextField
              label="Название хронической болезни"
              variant="standard"
              sx={{ width: '100%' }}
              name="allergy"
              type="text"
              value={form}
              onChange={inputHandler}
              required
            />
            <Button
              variant="contained"
              sx={{ marginTop: '1rem', display: 'block' }}
              type="submit"
            >
              Добавить
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
