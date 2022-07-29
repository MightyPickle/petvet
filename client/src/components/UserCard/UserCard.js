import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import {
  Avatar, Typography, Card, Rating,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ButtonMailTo from '../ButtonMailTo/ButtonMailTo';
import ButtonPhoneTo from '../ButtonPhoneTo/ButtonPhoneTo';

export default function UserCard({ rating, address }) {
  const iconStyles = { color: '#FECD45', mx: 2 };
  const [value, setValue] = useState();
  return (
    <Card sx={{ minWidth: 275, display: 'flex' }}>
      <Avatar
        alt=""
        src="https://i.pravatar.cc/200"
        sx={{
          width: 250, height: 250,
        }}
      />
      <CardContent sx={{
        ml: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        <Typography variant="h5" component="div">
          Имя Фамилия
          <EditIcon color="primary">edit_profile</EditIcon>
        </Typography>
        <Typography variant="h6" component="h2">
          <ButtonMailTo label="Почта" mailto="mailto:no-reply@example.com" />
          <EditIcon sx={iconStyles}>edit_profile</EditIcon>
        </Typography>
        <Typography variant="h6" component="h2">
          <ButtonPhoneTo label="Телефон" tel="tel:+00000000000" />
          <EditIcon sx={iconStyles}>edit_profile</EditIcon>
        </Typography>

        {address && (
        <Typography variant="h6" component="h2">
          Адрес клиники
          <EditIcon sx={iconStyles}>edit_profile</EditIcon>
        </Typography>
        )}
        {rating && (
        <div>
          <Typography component="legend">Рейтинг1</Typography>
          <Rating
            name="simple-controlled"
            value={value}
          />

        </div>
        )}
      </CardContent>
    </Card>
  );
}
