import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../components/UserCard/UserCard';
import { getUserThunk } from '../../redux/actions/userActions';
import PageDocProfile from './docProfile/PageDocProfile';
import PagePatientProfile from './patientProfile/PagePatientProfile';

export default function PageProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, []);
  const rating = null; // заглушка!!!
  return (
    <Container
      sx={{ max_width: '1000px', py: 2 }}
    >

      {user.user_group === 2 && (
        <>
          <UserCard user={user} />
          <PagePatientProfile />
        </>
      )}
      {user.user_group === 1 && (
        <>
          <UserCard user={user} />
          <PageDocProfile />
        </>
      )}
    </Container>
  );
}
