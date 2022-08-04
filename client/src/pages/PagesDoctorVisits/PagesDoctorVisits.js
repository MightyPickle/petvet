/* eslint-disable comma-dangle */
import { Box, Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddAvatarModal from '../../components/AddAvatarModal/AddAvatarModal';
import AddModal from '../../components/AddModal/AddModal';
import DoctorVisitsButtons from '../../components/DoctorVisitsButtons/DoctorVisitsButtons';
import HistoryVisits from '../../components/HistoryVisits/HistoryVisits';
import NewVisitFormComponent from '../../components/NewVisitFormComponent/NewVisitFormComponent';
import QuestComponent from '../../components/QuestComponent/QuestComponent';
import { getOnePetAC, getPetAC } from '../../redux/actions/petActions';

export default function PagesDoctorVisits() {
  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem('user'));
  const petPatient = useSelector((store) => store.pet);
  const scheduleInfo = useSelector((store) => store.schedule);

  const btnStyles = {
    boxShadow: 2,
    color: 'black',
    borderRadius: '6px',
    position: 'static',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  };

  const [visible, setVisible] = useState({
    quest: true,
    history: false,
    newVisit: false,
  });

  const visibleButtonHandler = (e) => {
    setVisible({
      quest: false,
      history: false,
      newVisit: false,
      [e.target.name]: true,
    });
  };

  const buttons = [
    <Button
      onClick={visibleButtonHandler}
      name="quest"
      sx={
        visible.quest
          ? { ...btnStyles, backgroundColor: '#fecd45' }
          : { ...btnStyles, backgroundColor: 'white' }
      }
      key="one"
    >
      Анкета
    </Button>,
    <Button
      onClick={visibleButtonHandler}
      name="history"
      sx={
        visible.history
          ? { ...btnStyles, backgroundColor: '#fecd45' }
          : { ...btnStyles, backgroundColor: 'white' }
      }
      key="two"
    >
      История
    </Button>,
    user?.user_group === 1 && (
      <Button
        onClick={visibleButtonHandler}
        name="newVisit"
        sx={
          visible.newVisit
            ? { ...btnStyles, backgroundColor: '#fecd45' }
            : { ...btnStyles, backgroundColor: 'white' }
        }
        key="three"
      >
        Лист приема
      </Button>
    ),
  ];
  const [openChronic, setOpenChronic] = React.useState(false);
  const handleOpenChronic = () => setOpenChronic(true);
  const handleCloseChronic = () => setOpenChronic(false);

  const [openAllergy, setOpenAllergy] = React.useState(false);
  const handleOpenAllergy = () => setOpenAllergy(true);
  const handleCloseAllergy = () => setOpenAllergy(false);

  const [openVac, setOpenVac] = React.useState(false);
  const handleOpenVac = () => setOpenVac(true);
  const handleCloseVac = () => setOpenVac(false);

  const [chronic, setChronic] = useState([]);
  const handleAddChronic = (newAdd) => setChronic([...chronic, newAdd]);
  const [allergy, setAllergy] = useState([]);
  const handleAddAllergy = (newAdd) => setAllergy([...allergy, newAdd]);
  const [vaccine, setVaccine] = useState([]);
  const handleAddVaccine = (newAdd) => setVaccine([...vaccine, newAdd]);
  // console.log(chronic, '<<< хронич ');

  const endVisitFetch = async (form) => {
    const visitData = await fetch('http://localhost:3010/api/v1/visits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form),
    });
    if (chronic.length > 0) {
      const newChronicData = await fetch(
        'http://localhost:3010/api/v1/chronic',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(chronic),
        }
      );
    }
    if (allergy.length > 0) {
      const newChronicData = await fetch(
        'http://localhost:3010/api/v1/allergy',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(allergy),
        }
      );
    }
    if (vaccine.length > 0) {
      const newChronicData = await fetch(
        'http://localhost:3010/api/v1/vaccine',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify(vaccine),
        }
      );
    }
    const closeSchedules = await fetch(
      'http://localhost:3010/api/v1/schedule/',
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ id: scheduleInfo.id }),
      }
    );
  };
  const { id } = useParams();
  const newAvatarFetch = async (form) => {
    const response = await fetch(`http://localhost:3010/api/v1/img/pet/${id}`, {
      method: 'PUT',
      // headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: form,
    });
    if (response.ok) {
      const data = await response.json();
      dispatch(getOnePetAC(data));
    }
  };
  const [openImgModal, setOpenImgModal] = React.useState(false);
  const handleOpenImgModal = () => {
    if (user.user_group === 2) {
      setOpenImgModal(true);
    }
  };
  const handleCloseImgModal = () => setOpenImgModal(false);
  return (
    <Container sx={{ display: 'flex', marginTop: '4rem', justifyContent: 'center' }}>
      {petPatient.length > 0 && (
        <>
          {visible.quest && (
            <QuestComponent
              name="quest"
              pet={petPatient[0]}
              handleOpenImgModal={handleOpenImgModal}
            />
          )}
          {visible.history && (
            <HistoryVisits name="history" pet={petPatient[0]} />
          )}
          {visible.newVisit && (
            <NewVisitFormComponent
              name="newVisit"
              pet={petPatient[0]}
              handleOpenAllergy={handleOpenAllergy}
              handleOpenChronic={handleOpenChronic}
              handleOpenVac={handleOpenVac}
              submitHandler={endVisitFetch}
              allergy={allergy}
              chronic={chronic}
              vaccine={vaccine}
            />
          )}
          <DoctorVisitsButtons
            buttons={buttons}
            btnStyles={btnStyles}
            visibleButtonHandler={visibleButtonHandler}
          />
          <AddModal
            scheduleInfo={scheduleInfo}
            type="allergy"
            handleOpen={handleOpenAllergy}
            handleClose={handleCloseAllergy}
            handleAdd={handleAddAllergy}
            open={openAllergy}
          />
          <AddModal
            scheduleInfo={scheduleInfo}
            type="chronic"
            handleOpen={handleOpenChronic}
            handleClose={handleCloseChronic}
            handleAdd={handleAddChronic}
            open={openChronic}
          />
          <AddModal
            scheduleInfo={scheduleInfo}
            type="vaccine"
            handleOpen={handleOpenVac}
            handleClose={handleCloseVac}
            handleAdd={handleAddVaccine}
            open={openVac}
          />
          <AddAvatarModal
            submitHandler={newAvatarFetch}
            handleClose={handleCloseImgModal}
            open={openImgModal}
          />
        </>
      )}
    </Container>
  );
}
