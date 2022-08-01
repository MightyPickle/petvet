import { Box, Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddAllegryModal from '../../components/AddAllegryModal/AddAllegryModal';
import AddChronicModal from '../../components/AddChronicModal/AddChronicModal';
import DoctorVisitsButtons from '../../components/DoctorVisitsButtons/DoctorVisitsButtons';
import HistoryVisits from '../../components/HistoryVisits/HistoryVisits';
import NewVisitFormComponent from '../../components/NewVisitFormComponent/NewVisitFormComponent';
import QuestComponent from '../../components/QuestComponent/QuestComponent';
import { getPetThunk } from '../../redux/actions/petActions';

export default function PagesDoctorVisits() {
  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem('user'));
  console.log(user, 'user<<<<<');
  const { id } = useParams();

  useEffect(() => {
    console.log('IN USE EFFECT!!');
    dispatch(getPetThunk(id));
  }, []);

  const addVisitThunk = async (form) => {
    const response = await fetch('http://localhost:3010/api/v1/visits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form),
    });
  };

  const btnStyles = {
    color: 'black',
    borderRadius: '9px',
    marginBottom: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    border: '1px solid',
    borderColor: 'black',
    width: '250px',
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
    console.log('EDIT BUTTONS!!', [e.target.name]);
  };

  const buttons = [
    <Button
      onClick={visibleButtonHandler}
      name="quest"
      style={
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
      style={
        visible.history
          ? { ...btnStyles, backgroundColor: '#fecd45' }
          : { ...btnStyles, backgroundColor: 'white' }
      }
      key="two"
    >
      История
    </Button>,
    user.user_group === 1 && (
      <Button
        onClick={visibleButtonHandler}
        name="newVisit"
        style={
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
  const pet = useSelector((store) => store.pet);

  const [chronic, setChronic] = useState([]);
  const handleAddChronic = (newAdd) => setChronic([...chronic, newAdd]);
  const [allergy, setAllergy] = useState([]);
  const handleAddAllergy = (newAdd) => setAllergy(...allergy, newAdd);

  return (
    <Container sx={{ display: 'flex', marginTop: '1rem' }}>
      {pet.length > 0 && (
        <>
          {visible.quest && <QuestComponent name="quest" pet={pet[0]} />}
          {visible.history && <HistoryVisits name="history" pet={pet[0]} />}
          {visible.newVisit && (
            <NewVisitFormComponent
              name="newVisit"
              pet={pet[0]}
              handleOpenAllergy={handleOpenAllergy}
              handleOpenChronic={handleOpenChronic}
              submitHandler={addVisitThunk}
              chronic={chronic}
              allergy={allergy}
            />
          )}
          <DoctorVisitsButtons
            buttons={buttons}
            btnStyles={btnStyles}
            visibleButtonHandler={visibleButtonHandler}
          />
          <AddAllegryModal
            handleOpen={handleOpenAllergy}
            handleClose={handleCloseAllergy}
            handleAddAllergy={handleAddAllergy}
            open={openAllergy}
          />
          <AddChronicModal
            handleOpen={handleOpenChronic}
            handleClose={handleCloseChronic}
            handleAddChronic={handleAddChronic}
            open={openChronic}
          />
        </>
      )}
    </Container>
  );
}
