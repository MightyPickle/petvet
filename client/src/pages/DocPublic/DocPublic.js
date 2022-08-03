import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ButtonOne from '../../components/ButtonOne/ButtonOne';
import DocExperience from '../../components/DocExperience/DocExperience';
import DocProfSpecialization from '../../components/DocProfSpecialization/DocProfSpecialization';
import UserCard from '../../components/UserCard/UserCard';
import { getInfoCardThunk } from '../../redux/actions/infoCardAction';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid rgba(0,0,0,0.4)',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DoctorPublic() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vetinfo = useSelector((store) => store.vetinfo);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    docId: vetinfo.id,
    petId: '',
    userId: user.id,
    dateOfreceipt: '',
  });
  const [scheduleDate, setScheduleDate] = useState('');

  const handleOpenSchedule = () => setOpen(true);
  const handleCloseSchedule = () => setOpen(false);
  const handleInput = (e) => {
    setNewSchedule((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleTime = (date) => {
    setNewSchedule((prev) => ({
      ...prev,
      dateOfreceipt: date,
    }));
  };
  const handleSubmit = async () => {
    handleCloseSchedule();
    const response = await fetch('http://localhost:3010/api/v1/schedule', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(newSchedule),
    });
    if (response.ok) {
      navigate('/profile');
    }
  };

  const getTimeWindows = (date) => {
    const startHour = 9;
    const endHour = 18;
    const dateArr = [];
    for (let i = startHour; i < endHour; i += 1) {
      dateArr.push(new Date(date.getFullYear(), date.getMonth(), date.getDate(), i, 0));
      dateArr.push(new Date(date.getFullYear(), date.getMonth(), date.getDate(), i, 30));
    }
    return dateArr;
  };

  useEffect(() => {
    dispatch(getInfoCardThunk(id));
    getTimeWindows(new Date());
  }, []);
  return (
    <Container
      sx={{ max_width: '1000px', py: 3 }}
    >
      <Grid container spacing={2} sx={{ marginTop: '1.5rem' }}>
        <Grid item xs={8}>
          <Item>
            <UserCard guest user={vetinfo} />
            <DocProfSpecialization vetinfo={vetinfo} />
            <DocExperience vetinfo={vetinfo} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><ButtonOne handleOpenSchedule={handleOpenSchedule} vetinfo={vetinfo} /></Item>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleCloseSchedule}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
              Запись на прием
            </Typography>
            <Typography id="modal-subtitle-1" variant="subtitle1" sx={{ mt: 2 }}>
              Выберите питомца
            </Typography>
            <Box sx={{ marginTop: '0.6rem' }}>
              <FormControl fullWidth>
                <InputLabel id="pet-id-select-label">Питомец</InputLabel>
                <Select
                  name="petId"
                  labelId="pet-id-select-label"
                  id="pet-id-select"
                  value={newSchedule.petId}
                  label="Питомец"
                  onChange={handleInput}
                >
                  {user?.Pets?.length > 0
                    && user.Pets.map(
                      (pet, index) => <MenuItem key={index} value={pet.id}>{pet.name}</MenuItem>,
                    )}
                </Select>
              </FormControl>
            </Box>
            {newSchedule.petId
            && (
            <Box sx={{ marginTop: '1rem' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Выберите дату визита"
                  value={scheduleDate}
                  onChange={(newValue) => {
                    setScheduleDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
            )}
            {scheduleDate
            && (
            <Box sx={{
              marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '5px',
            }}
            >
              {getTimeWindows(scheduleDate ?? new Date())
                .map((date, index) => {
                  const isBusy = vetinfo.doctor
                    .some((el) => el.date_of_receipt === date.toISOString());
                  if (!isBusy) {
                    return (
                      <Button
                        key={index}
                        variant="contained"
                        onClick={() => handleTime(date)}
                      >
                        {date.toTimeString().slice(0, 5)}
                      </Button>
                    );
                  }
                  return (
                    <Button key={index} disabled variant="contained">
                      {date.toTimeString().slice(0, 5)}
                    </Button>
                  );
                })}
            </Box>
            )}
            {newSchedule.dateOfreceipt
            && (
            <Box sx={{
              marginTop: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            >
              <Typography sx={{
                backgroundColor: '#D9D9D9',
                padding: '0.5rem',
                textAlign: 'center',
                borderRadius: '5px',
              }}
              >
                Запись на
                {' '}
                {newSchedule.dateOfreceipt.toLocaleString()}
              </Typography>
              <Button variant="contained" onClick={() => handleSubmit()}>Подтвердить</Button>
            </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
}

export default DoctorPublic;
