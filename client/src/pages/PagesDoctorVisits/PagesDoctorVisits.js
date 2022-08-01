import { Box, Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DoctorVisitsButtons from '../../components/DoctorVisitsButtons/DoctorVisitsButtons';
import HistoryVisits from '../../components/HistoryVisits/HistoryVisits';
import NewVisitFormComponent from '../../components/NewVisitFormComponent/NewVisitFormComponent';
import QuestComponent from '../../components/QuestComponent/QuestComponent';
import { getPetThunk } from '../../redux/actions/petActions';

export default function PagesDoctorVisits() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  console.log(user, 'user<<<<<');
  const addVisitThunk = async (form) => {
    const response = await fetch('http://localhost:3010/api/v1/visits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(form),
    });
  };

  const dispatch = useDispatch();
  const { id } = useParams();

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

  // const resetStylesBtn = () => {
  //   buttons.map((el) => (el.props.style = btnStyles));
  // };

  useEffect(() => {
    dispatch(getPetThunk(id));
  }, []);

  const pet = useSelector((store) => store.pet);

  return (
    <Container sx={{ display: 'flex', marginTop: '1rem' }}>
      {pet && (
        <>
          {visible.quest && <QuestComponent name="quest" pet={pet} />}
          {visible.history && <HistoryVisits name="history" pet={pet} />}
          {visible.newVisit && (
            <NewVisitFormComponent
              name="newVisit"
              pet={pet}
              submitHandler={addVisitThunk}
            />
          )}
          <DoctorVisitsButtons
            buttons={buttons}
            btnStyles={btnStyles}
            visibleButtonHandler={visibleButtonHandler}
          />
        </>
      )}
    </Container>
  );
}
