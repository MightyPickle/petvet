import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import {
  Box, Button, Divider, Typography,
} from '@mui/material';
import { errorShowAC } from '../../redux/actions/errorAction';
import { getPetThunk } from '../../redux/actions/petActions';
import { scheduleAddCurrentAC } from '../../redux/actions/scheduleAction';
import ActionBarComponent from '../../components/Calendar/Calendar';

const fetchDocVisits = async (id, date) => {
  const response = await fetch(`http://localhost:3010/api/v1/doctors/${id}/schedule/?year=${date.getFullYear()}&month=${date.getMonth()}&date=${date.getDate()}`);
  if (response.ok) {
    const data = await response.json();

    return { success: true, data };
  }
  const { errorMessage } = await response.json();
  return { success: false, errorMessage };
};

function DoctorSchedulePage() {
  const doctor = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [schedule, setSchedule] = useState([]);
  const [busyDays, setBusyDays] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetchDocVisits(doctor.id, date)
      .then((res) => {
        if (res.success) {
          setSchedule(res.data.schedule);
          setBusyDays(res.data.daysWithVisits);
        } else {
          dispatch(errorShowAC(res.errorMessage));
        }
      })
      .catch((error) => dispatch(errorShowAC(error)));
  }, [date]);

  const startVisithandler = async (petId, scheduleObj) => {
    await dispatch(getPetThunk(petId));
    await dispatch(scheduleAddCurrentAC(scheduleObj));
    navigate('/visits/new');
  };

  return (
    <Container sx={{ padding: '1rem', display: 'flex' }}>
      <ActionBarComponent date={date} setDate={setDate} busyDays={busyDays} />
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Визиты на
          {' '}
          {date.toDateString()}
        </Typography>
        <Divider variant="middle" />
        {schedule.length > 0
          && schedule.map(
            (el, index) => (
              <Box
                key={index}
                sx={{
                  height: 'max-content',
                  padding: '1rem',
                  boxShadow: '4px 4px 8px rgba(0,0,0,0.4)',
                  borderRadius: '10px',
                  marginBottom: '0.7rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '1rem',
                  transition: 'all .7s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Box>
                  <Typography variant="h5">
                    {`В ${new Date(el.date_of_receipt).toLocaleTimeString().slice(0, 5)}`}
                  </Typography>
                  <Typography variant="h5">
                    {`${el.patient.first_name} ${el.patient.last_name}`}
                  </Typography>
                  <Typography variant="h6">
                    {`Питомец ${el.Pet.name} вида ${el.Pet.specie}`}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    onClick={() => {
                      startVisithandler(el.Pet.id, el);
                    }}
                  >
                    Начать прием
                  </Button>
                </Box>
              </Box>
            ),

          )}
        {schedule.length === 0
          && <Typography variant="h3" sx={{ textAlign: 'center', marginTop: '4rem' }}>Приемов на сегодня нет🐣</Typography>}
      </Container>
    </Container>
  );
}

export default DoctorSchedulePage;
