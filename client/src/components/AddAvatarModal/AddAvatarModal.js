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
  width: '35%',
  bgcolor: 'background.paper',
  border: '2px solid #FFD35A',
  borderRadius: '9px',
  boxShadow: 24,
  px: 3,
  py: 4,
  display: 'flex',
  justifyContent: 'space-around',
};

export default function AddAvatarModal({ submitHandler, handleClose, open }) {
  const [file, setFile] = React.useState(null);
  const formData = new FormData();
  const selectFile = (e) => {
    setFile(e.target.files[0]);
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ display: 'block', grow: 1, alignSelf: 'center' }}
          >
            Загрузите фотографию профиля:
          </Typography>
          <Box sx={{ width: 'fit-content' }}>
            <form
              onChange={selectFile}
              onSubmit={(e) => {
                e.preventDefault();
                formData.append('files', file);
                submitHandler(formData);
                handleClose();
              }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Button variant="contained" component="label">
                Загрузить файл
                <input name="img" type="file" hidden />
              </Button>
              <Button
                variant="contained"
                sx={{ marginTop: '1rem' }}
                type="submit"
              >
                Отправить
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
