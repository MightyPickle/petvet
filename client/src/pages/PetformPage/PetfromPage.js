import {
  Box,
  Button,
  Container, Step, StepLabel, Stepper, Typography,
} from '@mui/material';
import React, { useState } from 'react';

import PetformSetp1 from '../../components/Petform/PetformSetp1';
import PetformSetp2 from '../../components/Petform/PetformStep2';
import PetformStep3 from '../../components/Petform/PetformStep3';

const steps = ['Основная информация', 'Хронические болезни и аллергии', 'Прививки и обработки'];

function PetfromPage() {
  const [activeStep, setActiveStep] = useState(0);
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
    vaccinations: [],
  });

  const handleNext = () => {
    if (activeStep === steps.length - 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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

  const objectHandler = (property, obj) => {
    setPetForm(
      (prev) => ({ ...prev, [property]: [...prev[property], obj] }),
    );
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

  const inputHandlers = {
    simpelInputHandler, arrayInputHandler, removeFromArray, objectHandler,
  };

  console.log(petForm);

  return (
    <Container sx={{ marginTop: '1rem' }}>
      <Stepper activeStep={activeStep} sx={{ width: '80%', margin: 'auto', marginBottom: '2rem' }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box>
        {activeStep === 0 && <PetformSetp1 petForm={petForm} inputHandler={simpelInputHandler} />}
        {activeStep === 1 && <PetformSetp2 petForm={petForm} inputHandler={inputHandlers} />}
        {activeStep === 2 && <PetformStep3 petForm={petForm} inputHandler={inputHandlers} />}
      </Box>
      <Box sx={{ width: '80%', margin: 'auto' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />

          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default PetfromPage;
