import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';
import PagePatientProfile from './patientProfile/PagePatientProfile';

export default function PageProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
  }, []);
  const rating = null; // заглушка!!!
  const address = null; // заглушка!!!
  return (
    <Container
      sx={{
        max_width: '1000px', py: 3,
      }}
    >
      {user.user_group === 2 ? (
        <>
          <UserCard />
          <PagePatientProfile />
        </>
      )
        : (
          <>
            <UserCard rating={rating} address={address} />
            {/* <PageDoctorProfile /> */}
          </>
        )}

    </Container>
  );
}
