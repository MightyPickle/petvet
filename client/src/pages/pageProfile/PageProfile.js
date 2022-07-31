import { Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';
import PageDocProfile from './docProfile/PageDocProfile';
import PagePatientProfile from './patientProfile/PagePatientProfile';

export default function PageProfile() {
  const user = useSelector((state) => state.user);
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
            <PageDocProfile />
          </>
        )}

    </Container>
  );
}
