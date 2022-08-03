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
import { addPetThunk } from '../../redux/actions/petActions';
import { pageOneValidation, pageTwoValidation } from '../../utils/petFormValidation';

const steps = ['Основная информация', 'Хронические болезни и аллергии', 'Прививки и обработки'];

function PetfromPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [isPetAdd, setIsPetAdd] = useState(false);
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
    if (activeStep === steps.length - 1 && !isPetAdd) {
      setIsPetAdd(true);
      dispatch(addPetThunk(petForm));
    }
    if (activeStep === steps.length) {
      navigate('/profile');
    }
    if (activeStep === 0 && !pageOneValidation(petForm)) {
      dispatch(errorShowAC('Заполните все поля на этом этапе'));
      return null;
    }
    if (activeStep === 1 && !pageTwoValidation(petForm)) {
      dispatch(errorShowAC('Заполните информацию о стерелизации'));
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
          {activeStep === 3 && (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1rem',
            width: '80%',
            margin: 'auto',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.5)',
            padding: '2rem 2rem 0 2rem',
            minHeight: '60vh',
          }}
          >
            <Typography
              sx={{
                width: 'max-content', m: 'auto', mt: 2, mb: 1,
              }}
              variant="h2"
            >
              Питомец добавлен!🐒
            </Typography>
          </Box>
          )}
        </Box>
        <Box sx={{ width: '80%', margin: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Назад
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext} variant="contained">
              {activeStep === steps.length ? 'Завершить' : 'Далее'}
            </Button>
          </Box>
        </Box>
      </Container>
      <ErrorModal />
    </>
  );
}

export default PetfromPage;
