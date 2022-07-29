import {
  Box, Button, FormControl, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import React, { useState } from 'react';

function Signup({ submitHandler }) {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    user_group: '',
  });

  const inputHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box>
      <form onSubmit={(e) => {
        e.preventDefault();
        submitHandler(form);
      }}
      >
        <TextField
          label="Имя"
          variant="standard"
          sx={{ width: '100%' }}
          name="first_name"
          required
          value={form.first_name}
          onChange={inputHandler}
        />
        <TextField
          label="Фамилия"
          variant="standard"
          sx={{ width: '100%', marginTop: '0.5rem' }}
          name="last_name"
          required
          value={form.last_name}
          onChange={inputHandler}
        />
        <TextField
          label="Email"
          variant="standard"
          sx={{ width: '100%', marginTop: '0.5rem' }}
          name="email"
          required
          value={form.email}
          onChange={inputHandler}
        />
        <TextField
          label="Телефон"
          variant="standard"
          sx={{ width: '100%', marginTop: '0.5rem' }}
          name="phone"
          required
          value={form.phone}
          onChange={inputHandler}
        />
        <TextField
          label="Пароль"
          variant="standard"
          sx={{ width: '100%', marginTop: '0.5rem' }}
          name="password"
          type="password"
          required
          value={form.password}
          onChange={inputHandler}
        />
        <Box sx={{ minWidth: 120, mt: 1 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Кто вы?</InputLabel>
            <Select
              value={form.user_group}
              label="Кто вы?"
              name="user_group"
              onChange={inputHandler}
              required
            >
              <MenuItem value={1}>Врач</MenuItem>
              <MenuItem value={2}>Владелец питомца</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          sx={{ marginTop: '1rem' }}
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </Box>
  );
}

export default Signup;
