import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

export default function DoctorVisitsButtons({ buttons }) {
  return (
    <div>
      <ButtonGroup
        sx={{
          width: '200%',
          height: '200%',
          paddingLeft: '0.5rem',
        }}
        orientation="vertical"
      >
        {buttons}
      </ButtonGroup>
    </div>
  );
}
