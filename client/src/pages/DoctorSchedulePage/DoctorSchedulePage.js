import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import { errorShowAC } from '../../redux/actions/errorAction';

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
  const today = new Date();

  const [schedule, setSchedule] = useState([]);

  console.log(schedule);

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
  return (
    <Container>
      {schedule.length > 0 && schedule.map((el) => (
        <Box sx={{ width: '100%', height: 'max-content', padding: '1rem' }}>
          <Typography variant="h5">
            {`${el.patient.first_name} ${el.patient.last_name}`}
          </Typography>
          <Typography variant="h6">
            {`${el.Pet.name} ${el.Pet.specie}`}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}

export default DoctorSchedulePage;
