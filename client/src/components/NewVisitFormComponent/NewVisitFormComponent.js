import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

export default function NewVisitFormComponent({ pet, submitHandler }) {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const [form, setForm] = useState({
    doc_id: user.id,
    user_id: pet.owner_id,
    pet_id: pet.id,
    description: '',
    diagnose: '',
    treatment: '',
  });
  const inputHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(form);
  };
  return (
    <Box
      className="container"
      style={{
        backgroundColor: '#d9d9d9',
        width: '700px',
        height: '700px',
        borderRadius: '19px',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(form);
        }}
      >
        <TextField
          label="Описание проблемы"
          variant="standard"
          sx={{ width: '100%' }}
          name="description"
          type="text"
          value={form.description}
          onChange={inputHandler}
          required
        />
        <TextField
          label="Диагноз"
          variant="standard"
          sx={{ width: '100%', marginTop: '0.5rem' }}
          name="diagnose"
          type="text"
          value={form.diagnose}
          onChange={inputHandler}
          required
        />
        <TextField
          label="Лечение"
          variant="standard"
          sx={{ width: '100%', marginTop: '0.5rem' }}
          name="treatment"
          type="text"
          value={form.treatment}
          onChange={inputHandler}
          required
        />
        <Button variant="contained" sx={{ marginTop: '1rem' }} type="submit">
          Завершить
        </Button>
      </form>
    </Box>
  );
}
