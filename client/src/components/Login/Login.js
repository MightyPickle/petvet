import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';

function Login({ submitHandler }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
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
          label="Email"
          variant="standard"
          sx={{ width: '100%' }}
          name="email"
          type="email"
          value={form.email}
          onChange={inputHandler}
          required
        />
        <TextField
          label="Пароль"
          variant="standard"
          sx={{ width: '100%', marginTop: '0.5rem' }}
          type="password"
          name="password"
          value={form.password}
          onChange={inputHandler}
          required
        />
        <Button variant="contained" sx={{ marginTop: '1rem' }} type="submit">Log in</Button>
      </form>
    </Box>
  );
}

export default Login;
