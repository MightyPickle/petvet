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
  border: '2px solid #FFD35A',
  borderRadius: '9px',

  boxShadow: 24,
  p: 4,
};

export default function AddModal({
  type,
  handleOpen,
  handleClose,
  open,
  handleAdd,
  scheduleInfo,
}) {
  const [form, setForm] = React.useState({
    input1: '',
    input2: '',
    doc_id: scheduleInfo.doc_id,
    pet_id: scheduleInfo.pet_id,
  });
  const inputHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
            Добавление новой
            {type === 'chronic' && ' хронической болезни'}
            {type === 'allergy' && ' алергии'}
            {type === 'vaccine' && ' вакцинации'}
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAdd(form);
              handleClose();
              setForm({
                input1: '',
                input2: '',
                doc_id: scheduleInfo.doc_id,
                pet_id: scheduleInfo.pet_id,
              });
            }}
          >
            <TextField
              label="Введите название"
              variant="standard"
              sx={{ width: '100%' }}
              name="input1"
              type="text"
              value={form.input1}
              onChange={inputHandler}
              required
            />
            {type === 'vaccine' && (
              <TextField
                label="Введите название препарата"
                variant="standard"
                sx={{ width: '100%' }}
                name="input2"
                type="text"
                value={form.input2}
                onChange={inputHandler}
                required
              />
            )}
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
