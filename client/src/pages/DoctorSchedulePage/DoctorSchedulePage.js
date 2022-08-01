import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Box, Button, Typography } from '@mui/material';
import { errorShowAC } from '../../redux/actions/errorAction';
import { getPetThunk } from '../../redux/actions/petActions';

const fetchDocVisits = async (id) => {
  const response = await fetch(`http://localhost:3010/api/v1/doctors/${id}/schedule`);
  if (response.ok) {
    const schedule = await response.json();
    return { success: true, schedule };
  }
  const { errorMessage } = await response.json();
  return { success: false, errorMessage };
};

function DoctorSchedulePage() {
  const doctor = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchDocVisits(doctor.id)
      .then((res) => {
        if (res.success) {
          setSchedule(res.schedule);
        } else {
          dispatch(errorShowAC(res.errorMessage));
        }
      })
      .catch((error) => dispatch(errorShowAC(error)));
  }, []);

  const startVisithandler = async (id) => {
    await dispatch(getPetThunk(id));
    navigate('/visits/new');
  };

  return (
    <Container sx={{ padding: '1rem' }}>
      {schedule.length > 0 && schedule.map((el, index) => (
        <Box
          key={index}
          sx={{
            height: 'max-content',
            padding: '1rem',
            border: '1px solid rgba(0,0,0,0.3)',
            borderRadius: '10px',
            marginBottom: '0.7rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h5">
              {`${el.patient.first_name} ${el.patient.last_name}`}
            </Typography>
            <Typography variant="h6">
              {`${el.Pet.name} ${el.Pet.specie}`}
            </Typography>
          </Box>
          <Box>
            <Button onClick={() => { startVisithandler(el.Pet.id); }}>Начать прием</Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default DoctorSchedulePage;
