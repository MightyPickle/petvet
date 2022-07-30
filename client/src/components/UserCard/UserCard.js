import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import {
  Avatar, Typography, Card, Rating, Input, TextField, Container,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useTheme } from '@emotion/react';
import ButtonMailTo from '../ButtonMailTo/ButtonMailTo';
import ButtonPhoneTo from '../ButtonPhoneTo/ButtonPhoneTo';

export default function UserCard({ rating, address }) {
  const iconStyles = { mx: 2, alignSelf: 'bottom' };
  const [value, setValue] = useState();// не уверена что делает эта херрня, но что-то про рейтинг
  const [edit, setEdit] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const editButtonHandler = (e) => {
    setEdit({ ...edit, name: true });
  };
  return (
    <Card sx={{
      minWidth: 275, display: 'flex', boxShadow: 0, p: 3,
    }}
    >
      <Avatar
        alt=""
        src="https://i.pravatar.cc/200"
        sx={{
          width: 250, height: 250, border: `1px solid ${primary}`,
        }}
      />
      <CardContent sx={{
        ml: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        {edit.name ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h5" component="div">
              <TextField variant="standard" defaultValue="Имя Фамилия" />
            </Typography>
            <DoneIcon color="neutral" sx={iconStyles} />
          </div>
        )
          : (
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography variant="h5" component="div">
                Имя Фамилия
                {/* {user.name} */}
              </Typography>
              <EditIcon color="primary" sx={iconStyles} onClick={(e) => editButtonHandler(e)}>edit_profile</EditIcon>
            </div>
          )}

        <Typography variant="h6" component="h2">
          <ButtonMailTo label="Почта" mailto="mailto:no-reply@example.com" />
          <EditIcon sx={iconStyles} color="primary" onClick={(e) => editButtonHandler(e)}>edit_profile</EditIcon>
        </Typography>
        <Typography variant="h6" component="h2">
          <ButtonPhoneTo label="Телефон" tel="tel:+00000000000" />
          <EditIcon sx={iconStyles} color="primary" onClick={(e) => editButtonHandler(e)}>edit_profile</EditIcon>
        </Typography>

        {address && (
        <Typography variant="h6" component="h2">
          Адрес клиники
          <EditIcon sx={iconStyles} color="primary">edit_profile</EditIcon>
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
