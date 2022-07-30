import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

export default function DoctorVisitsButtons() {
  const btnStyles = {
    backgroundColor: '#fecd45',
    // backgroundColor: 'white',
    color: 'black',
    borderRadius: '9px',
    marginBottom: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  };
  const buttons = [
    <Button style={btnStyles} key="one">
      Анкета
    </Button>,
    <Button style={btnStyles} key="two">
      История
    </Button>,
    <Button style={btnStyles} key="three">
      Лист приема
    </Button>,
  ];
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
