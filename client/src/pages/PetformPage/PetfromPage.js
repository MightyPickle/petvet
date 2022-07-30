import { Container } from '@mui/material';
import React, { useState } from 'react';

import PetformSetp1 from '../../components/Petform/PetformSetp1';
import PetformSetp2 from '../../components/Petform/PetformStep2';

function PetfromPage() {
  const [petForm, setPetForm] = useState({
    name: '',
    specie: '',
    breed: '',
    sex: '',
    birthday: '',
    weight: '',
    color: '',
    sterilized: '',
    sterilized_date: '',
    allergies: [],
    chronic_diseases: [],
  });

  console.log(petForm);

  const simpelInputHandler = (e) => {
    setPetForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const arrayInputHandler = (e) => {
    if (e.keyCode === 13) {
      setPetForm(
        (prev) => ({ ...prev, [e.target.name]: [...prev[e.target.name], e.target.value] }),
      );
      e.target.value = '';
    }
  };

  const removeFromArray = (property, removeIndex) => {
    setPetForm(
      (prev) => (
        {
          ...prev,
          [property]: prev[property].filter((_, index) => index !== removeIndex),
        }
      ),
    );
  };

  const inputHandlers = { simpelInputHandler, arrayInputHandler, removeFromArray };

  return (
    <Container sx={{ marginTop: '1rem' }}>
      <PetformSetp1 petForm={petForm} inputHandler={simpelInputHandler} />
      <PetformSetp2 petForm={petForm} inputHandler={inputHandlers} />

    </Container>
  );
}

export default PetfromPage;
