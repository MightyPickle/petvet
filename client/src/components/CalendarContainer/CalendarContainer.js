import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const getTimeWindows = () => {
  const date = new Date();
  const startHour = 9;
  const endHour = 18;
  const dateArr = [];
  for (let i = startHour; i < endHour; i += 1) {
    dateArr.push(new Date(date.getFullYear(), date.getMonth(), date.getDate(), i, 0));
    dateArr.push(new Date(date.getFullYear(), date.getMonth(), date.getDate(), i, 30));
  }
  // dateArr.push(new Date(date.getFullYear(), date.getMonth(), date.getDate(), endHour, 0));
  return dateArr;
};

function CalendarContainer() {
  return (
    <Box sx={{ marginLeft: '3rem' }}>
      {getTimeWindows().map((el, index) => (
        <Box key={index} sx={{ position: 'relative' }}>
          <Typography sx={{ position: 'absolute', left: '-2.7rem', top: '2.4rem' }}>{el.toLocaleTimeString().slice(0, 5)}</Typography>
          <Box
            sx={{
              width: '100%',
              height: '6rem',
              backgroundColor: '#D9D9D9',
              marginBottom: '0.2rem',
              borderRadius: '10px',
              boxShadow: '3px 3px 8px rgba(0,0,0,0.3)',
            }}
          />
        </Box>
      ))}
    </Box>
  );
}

export default CalendarContainer;
