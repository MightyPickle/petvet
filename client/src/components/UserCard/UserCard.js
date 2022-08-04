/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import {
  Avatar,
  Typography,
  Card,
  TextField,
  FormGroup,
  CardActionArea,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import ButtonMailTo from '../ButtonMailTo/ButtonMailTo';
import ButtonPhoneTo from '../ButtonPhoneTo/ButtonPhoneTo';
import { docUpdateThunk, userUpdateThunk } from '../../redux/actions/userActions';
import docInputController from '../../utils/docInputController';

export default function UserCard({ rating, guest, user, address, handleOpenImgModal, small }) {
  const iconStyles = { mx: 2, alignSelf: 'bottom', cursor: 'pointer' };
  const [edit, setEdit] = useState({
    fullName: false,
    email: false,
    phone: false,
    address: false,
  });

  const [editInput, setEditInput] = useState({
    // fullName: {
    first_name: user.first_name,
    last_name: user.last_name,
    // },
    email: user.email,
    phone: user.phone,
    address,
  });

  const inputHandler = (e) => {
    setEditInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const editButtonHandler = (e, field) => {
    setEdit({ ...edit, [field]: true });
  };
  const cancelButtonHandler = (e, field) => {
    setEdit({ ...edit, [field]: false });
  };

  const dispatch = useDispatch();
  const doneButtonHandler = (e, field) => {
    // updates user.name state
    if (field === 'address') {
      dispatch(docUpdateThunk(docInputController(field, editInput[field])));
    } else if (field === 'fullName') {
      const { first_name, last_name } = editInput;
      dispatch(userUpdateThunk({ type: 'first_name', input: first_name }));
      dispatch(userUpdateThunk({ type: 'last_name', input: last_name }));
    } else {
      dispatch(userUpdateThunk({ type: field, input: editInput[field] }));
    }
    setEdit({ ...edit, [field]: false });
  };

  const dataStyles = { ml: '1rem' };
  const avatarUrl = `${process.env.REACT_APP_HOST}${user.img}`;
  return (
    <Card
      sx={{
        minWidth: 275,
        display: 'flex',
        boxShadow: 0,
        p: 3,
        borderRadius: '15px',
      }}
    >
      <CardActionArea onClick={handleOpenImgModal} sx={{ width: 'fit-content', borderRadius: '50%' }}>
        <Avatar
          alt=""
          src={avatarUrl}
          sx={{
            width: (small ? '10rem' : '12rem'),
            height: (small ? '10rem' : '12rem'),
            border: `1px solid ${primary}`,
          }}
        />
      </CardActionArea>
      <CardContent
        sx={{
          p: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {edit.fullName ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <FormGroup variant="standard" sx={{ display: 'flex', flexDirection: 'row' }} name="fullName" onBlur={(e) => cancelButtonHandler(e, 'fullName')}>
              <TextField
                variant="standard"
                sx={{ width: 'fit-content' }}
                name="first_name"
                value={editInput.first_name}
                onChange={(e) => inputHandler(e)}
                placeholder="Имя"
              />
              <TextField
                variant="standard"
                sx={{ width: 'fit-content', ml: '.3rem' }}
                name="last_name"
                value={editInput.last_name}
                onChange={(e) => inputHandler(e)}
                placeholder="Фамилия"
              />

            </FormGroup>

            <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'fullName')} />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h5" component="div">
              {`${user.first_name} ${user.last_name}`}
            </Typography>
            {!guest && (
              <EditIcon
                color="primary"
                sx={iconStyles}
                onClick={(e) => editButtonHandler(e, 'fullName')}
              >
                edit_profile
              </EditIcon>
            )}
          </div>
        )}

        {edit.email ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h6" component="h2">
              Почта
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField
                variant="standard"
                value={editInput.email}
                name="email"
                onChange={(e) => inputHandler(e)}
                onBlur={(e) => cancelButtonHandler(e, 'email')}
              />
            </Typography>
            <DoneIcon
              color="secondary"
              sx={iconStyles}
              onClick={(e) => doneButtonHandler(e, 'email')}
            />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" component="h2">
              Почта
            </Typography>
            <Typography variant="h6" component="h2" sx={dataStyles}>
              <ButtonMailTo
                label={user.email}
                mailto={`mailto:${user.email}`}
              />
            </Typography>
            {!guest && (
              <EditIcon
                sx={iconStyles}
                color="primary"
                onClick={(e) => editButtonHandler(e, 'email')}
              >
                edit_profile
              </EditIcon>
            )}
          </div>
        )}

        {edit.phone ? (
          <div style={{ display: 'flex', alignItems: 'end' }}>
            <Typography variant="h6" component="h2">
              Телефон
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField
                variant="standard"
                name="phone"
                onChange={(e) => inputHandler(e)}
                value={editInput.phone}
                onBlur={(e) => cancelButtonHandler(e, 'phone')}
              />
            </Typography>
            <DoneIcon
              color="secondary"
              sx={iconStyles}
              onClick={(e) => doneButtonHandler(e, 'phone')}
            />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography variant="h6" component="h2">
              Телефон
            </Typography>
            <Typography variant="h6" component="h2" sx={dataStyles}>
              <ButtonPhoneTo label={user.phone} tel={`tel:${user.phone}`} />
            </Typography>
            {!guest && (
              <EditIcon
                sx={iconStyles}
                color="primary"
                onClick={(e) => editButtonHandler(e, 'phone')}
              >
                edit_profile
              </EditIcon>
            )}
          </div>
        )}

        {address
          && (
            edit.address ? (
              <div style={{ display: 'flex', alignItems: 'end' }}>
                <Typography variant="h6" component="h2">
                  Адрес клиники
                </Typography>
                <Typography variant="h5" component="div" sx={dataStyles}>
                  <TextField
                    variant="standard"
                    name="address"
                    onChange={(e) => inputHandler(e)}
                    value={editInput.address}
                    onBlur={(e) => cancelButtonHandler(e, 'address')}
                  />
                </Typography>
                <DoneIcon color="secondary" sx={iconStyles} onClick={(e) => doneButtonHandler(e, 'address')} />
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography variant="h6" component="h2">
                  Адрес клиники
                </Typography>
                <Typography variant="h6" component="h2" sx={dataStyles}>
                  {address}
                </Typography>
                {!guest
            && <EditIcon sx={iconStyles} color="primary" onClick={(e) => editButtonHandler(e, 'address')}>edit_profile</EditIcon>}
              </div>
            )
          )}
      </CardContent>
    </Card>
  );
}
