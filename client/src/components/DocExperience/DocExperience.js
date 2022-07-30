import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function DocExperience() {
  return (
    <Box sx={{
      border: '2px solid grey', width: '70%', margin: 1, borderRadius: '19px', bgcolor: 'text.disabled',
    }}
    >
      <h4>Описание</h4>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        50 лет лечу кошек, собак, аквариумных рыбок и хомячков. Высшее ветеринарное образование.
      </Typography>
    </Box>
  );
}

export default DocExperience;
