import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function Stars() {
  const value = 5;
  return (
    <div>
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      {/* <Typography component="legend">Рейтинг2</Typography> */}
      <Rating name="read-only" value={value} readOnly />
      {/* <Typography component="legend">Рейтинг3</Typography>
      <Rating name="no-value" value={null} /> */}
    </div>
  );
}
