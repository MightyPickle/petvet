import React from 'react';
import {
  TextField, Box, FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';

function PetformSetp1({ petForm, inputHandler }) {
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
      <TextField id="petname" label="Имя" variant="standard" name="name" type="text" value={petForm.name} onChange={inputHandler} />
      <TextField id="petspice" label="Вид" variant="standard" name="specie" type="text" value={petForm.specie} onChange={inputHandler} />
      <TextField id="petbreed" label="Порода" variant="standard" name="breed" type="text" value={petForm.breed} onChange={inputHandler} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormControl sx={{ width: '48%' }}>
          <InputLabel id="petsex">Пол</InputLabel>
          <Select
            labelId="petsex"
            id="petsex-select"
            label="Пол"
            name="sex"
            value={petForm.sex}
            onChange={inputHandler}
          >
            <MenuItem value={0}>Ж</MenuItem>
            <MenuItem value={1}>М</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="petweight"
          label="Вес"
          variant="standard"
          name="weight"
          type="number"
          value={petForm.weight}
          onChange={inputHandler}
          sx={{ width: '48%' }}
        />
      </Box>
      <TextField
        id="petbday"
        label="Дата рождения"
        variant="standard"
        name="birthday"
        type="date"
        value={petForm.birthday}
        onChange={inputHandler}
      />
      <TextField
        id="petcolor"
        label="Окрас"
        variant="standard"
        name="color"
        type="text"
        value={petForm.color}
        onChange={inputHandler}
      />
    </Box>
  );
}

export default PetformSetp1;
