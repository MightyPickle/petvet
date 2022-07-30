import { Box, Typography } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

function VacCard({ vacData, deleteCardHandler }) {
  return (
    <Box sx={{
      height: 'max-content',
      padding: '0.7rem',
      width: '80%',
      margin: 'auto',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      borderRadius: '10px',
    }}
    >
      <Box sx={{ width: 'max-content', marginLeft: 'auto' }}>
        <ClearIcon sx={{ cursor: 'pointer' }} onClick={() => deleteCardHandler()} />
      </Box>
      <Typography variant="subtitle1">{vacData.description}</Typography>
      <Typography variant="subtitle2">{vacData.drug_name}</Typography>
      <Typography variant="body1">{vacData.drug_date}</Typography>
    </Box>
  );
}

export default VacCard;
