import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Rating } from '@mui/material';
import Stars from '../Stars/Stars';

export default function BasicCard() {
  const value = 5;
  return (
    <Card sx={{ width: 500, display: 'flex', margin: 1 }}>
      <Avatar
        alt="Remy Sharp"
        src=""
        sx={{
          width: 100, height: 100, mt: 3, ml: 1.5,
        }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          Имя Фамилия
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ mt: 0.5 }}
        >
          Телефон
        </Typography>
        <Typography variant="h6" component="div">
          Адрес клиники
        </Typography>
        {/* <Typography component="legend">Рейтинг1</Typography>
        <div>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography component="legend">Рейтинг2</Typography>
          <Rating name="read-only" value={value} readOnly />
          <Typography component="legend">Рейтинг3</Typography>
          <Rating name="no-value" value={null} />
        </div> */}
      </CardContent>
    </Card>
  );
}
