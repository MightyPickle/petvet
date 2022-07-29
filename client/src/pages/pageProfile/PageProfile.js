import { Container } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import UserCard from '../../components/UserCard/UserCard';
import PagePatientProfile from './patientProfile/PagePatientProfile';

export default function PageProfile() {
  const location = useLocation();
  const rating = null; // заглушка!!!
  const address = null; // заглушка!!!
  return (
    <Container
      sx={{
        max_width: '1000px', py: 3,
      }}
    >
      {location.pathname.includes('patients') ? (
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
