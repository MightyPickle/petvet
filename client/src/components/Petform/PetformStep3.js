import React, { useState } from 'react';
import {
  TextField, Box, FormControl, InputLabel, Select, MenuItem, Typography, Button,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import VacCard from '../VacCard/VacCard';

function PetformStep3({ petForm, inputHandler }) {
  const [vac, setVac] = useState({
    description: '',
    drug_name: '',
    drug_date: '',
  });

  const [focus, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const vacHandler = (e) => {
    setVac((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    if (vac.description === '' || vac.drug_date === '' || vac.drug_name === '') return;
    inputHandler.objectInputHandler('vaccinations', vac);
    setVac({
      description: '',
      drug_name: '',
      drug_date: '',
    });
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '1rem',
      width: '80%',
      margin: 'auto',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
      boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.2)',
      padding: '1rem',
    }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Прививки и обработки</Typography>
      {petForm.vaccinations.length > 0
      && petForm.vaccinations
        .map((vacData, index) => (
          <VacCard
            key={index}
            vacData={vacData}
            deleteCardHandler={() => inputHandler.removeFromArray('vaccinations', index)}
          />
        ))}
      <form style={{ width: '70%', margin: 'auto' }} onSubmit={submitHanlder}>
        <div>
          <TextField
            name="description"
            label="Что давали/кололи?"
            variant="standard"
            type="text"
            value={vac.description}
            onChange={vacHandler}
            sx={{ width: '100%' }}
          />

        </div>
        <div>
          <TextField
            name="drug_name"
            label="Название препарата"
            variant="standard"
            type="text"
            value={vac.drug_name}
            onChange={vacHandler}
            sx={{ width: '100%' }}
          />
        </div>
        <div>
          <TextField
            name="drug_date"
            label="Когда?"
            variant="standard"
            onFocus={onFocus}
            onBlur={onBlur}
            type={focus ? 'date' : 'text'}
            value={vac.drug_date}
            onChange={vacHandler}
            sx={{ width: '100%' }}
          />
        </div>
        <Button type="submit" sx={{ marginTop: '0.7rem', marginLeft: 'auto' }}>Добавить</Button>
      </form>
    </Box>
  );
}

export default PetformStep3;
