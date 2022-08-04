import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddAvatarModal from '../../components/AddAvatarModal/AddAvatarModal';
import UserCard from '../../components/UserCard/UserCard';
import { getUserThunk, userLoginAC } from '../../redux/actions/userActions';
import PageDocProfile from './docProfile/PageDocProfile';
import PagePatientProfile from './patientProfile/PagePatientProfile';

export default function PageProfile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserThunk());
  }, []);
  const newAvatarFetch = async (form) => {
    const response = await fetch('http://localhost:3010/api/v1/img/user', {
      method: 'PUT',
      // headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: form,
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(userLoginAC(data));
    }
  };
  const rating = null; // заглушка!!!
  const [openImgModal, setOpenImgModal] = React.useState(false);
  const handleOpenImgModal = () => setOpenImgModal(true);
  const handleCloseImgModal = () => setOpenImgModal(false);
  return (
    <Container sx={{ max_width: '1000px', py: 2 }}>
      {user.user_group === 2 && (
        <>
          <UserCard user={user} handleOpenImgModal={handleOpenImgModal} />
          <PagePatientProfile />
        </>
      )}
      {user.user_group === 1 && (
        <>
          <UserCard
            user={user}
            address={user.Doc_info?.clinic_address || 'Введите адрес'}
            handleOpenImgModal={handleOpenImgModal}
          />
          <PageDocProfile />
        </>
      )}
      <AddAvatarModal
        id={user.id}
        submitHandler={newAvatarFetch}
        handleOpen={handleOpenImgModal}
        handleClose={handleCloseImgModal}
        open={openImgModal}
      />
    </Container>
  );
}
