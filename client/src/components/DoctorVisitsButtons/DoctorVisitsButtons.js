import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

export default function DoctorVisitsButtons({ buttons }) {
  return (
    <div>
      <ButtonGroup
        sx={{
          m: '0.5rem',
        }}
        orientation="vertical"
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
}
