import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import {
  Avatar, Typography, Card, Rating, Input, TextField, Container, FormControl, InputLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import ButtonMailTo from '../ButtonMailTo/ButtonMailTo';
import ButtonPhoneTo from '../ButtonPhoneTo/ButtonPhoneTo';

export default function UserCard({
  rating, guest, user,
}) {
  const iconStyles = { mx: 2, alignSelf: 'bottom' };
  const [edit, setEdit] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
  });

  const [editInput, setEditInput] = useState({
    name: '',
    email: false,
    phone: false,
  });

  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const editButtonHandler = (e, field) => {
    setEdit({ ...edit, [field]: true });
  };
  const doneButtonHandler = (e, field) => {
    // updates user.name state
    setEdit({ ...edit, [field]: false });
  };

  const dataStyles = { ml: '1rem' };

  return (
    <Card sx={{
      minWidth: 275, display: 'flex', boxShadow: 0, p: 3,
    }}
    >
      <Avatar
        alt=""
        src="https://i.pravatar.cc/200"
        sx={{
          width: '12rem', height: '12rem', border: `1px solid ${primary}`,
        }}
      />
      <CardContent sx={{
        p: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      }}
      >
        {edit.name ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            {/* <Typography variant="h5" component="div">
              <TextField
                variant="standard"
                defaultValue={`${user.first_name} ${user.last_name}`}
                // onSubmit={(e) => doneButtonHandler(e, 'name')}
              />
            </Typography> */}
            <FormControl variant="standard">
              <Input id="component-simple" defaultValue={`${user.first_name} ${user.last_name}`} />
            </FormControl>

            <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'name')} />
          </div>
        )
          : (
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography variant="h5" component="div">
                {`${user.first_name} ${user.last_name}`}
              </Typography>
              {!guest
              && <EditIcon color="primary" sx={iconStyles} onClick={(e) => editButtonHandler(e, 'name')}>edit_profile</EditIcon>}
            </div>
          )}

        {edit.email ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h6" component="h2">
              Почта
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField variant="standard" defaultValue={user.email} />
            </Typography>
            <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'email')} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" component="h2">
              Почта
            </Typography>
            <Typography variant="h6" component="h2" sx={dataStyles}>
              <ButtonMailTo label={user.email} mailto={`mailto:${user.email}`} />
            </Typography>
            {!guest
            && <EditIcon sx={iconStyles} color="primary" onClick={(e) => editButtonHandler(e, 'email')}>edit_profile</EditIcon>}
          </div>
        )}

        {edit.phone ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h6" component="h2">
              Телефон
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField variant="standard" defaultValue={user.phone} />
            </Typography>
            <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'phone')} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" component="h2">
              Телефон
            </Typography>
            <Typography variant="h6" component="h2" sx={dataStyles}>
              <ButtonPhoneTo label={user.phone} tel={`tel:${user.phone}`} />
            </Typography>
            {!guest
            && <EditIcon sx={iconStyles} color="primary" onClick={(e) => editButtonHandler(e, 'phone')}>edit_profile</EditIcon>}
          </div>
        )}

        {user.user_group === 1 && (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" component="h2">
              Адрес клиники
            </Typography>
            <Typography variant="h6" component="h2" sx={dataStyles}>
              {user.Doc_info?.clinic_address || 'Введите адрес'}
            </Typography>
            <EditIcon sx={iconStyles} color="primary">edit_profile</EditIcon>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
