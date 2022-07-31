import {
  Box,
  Button,
  Container, Step, StepLabel, Stepper, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

import PetformSetp1 from '../../components/Petform/PetformSetp1';
import PetformSetp2 from '../../components/Petform/PetformStep2';
import PetformStep3 from '../../components/Petform/PetformStep3';
import { errorShowAC } from '../../redux/actions/errorAction';
import pageOneValidation from '../../utils/petFormValidation';
import postPetForm from '../../utils/postPetform';

const steps = ['Основная информация', 'Хронические болезни и аллергии', 'Прививки и обработки'];

function PetfromPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      const result = postPetForm(petForm);
      return result ? navigate('/profile') : null;
    }
    if (activeStep === 0 && !pageOneValidation(petForm)) {
      dispatch(errorShowAC('Заполните все поля на этом этапе'));
      return null;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    return null;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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

  const objectInputHandler = (property, obj) => {
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
    simpelInputHandler, arrayInputHandler, removeFromArray, objectInputHandler,
  };

  return (
    <>
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
      <ErrorModal />
    </>
  );
}

export default PetfromPage;
