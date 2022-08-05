/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
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
import { Box } from '@mui/system';
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
    console.log('cancelhandler');
    setEdit({ ...edit, [field]: false });
  };

  const dispatch = useDispatch();
  const doneButtonHandler = async (e, field) => {
    console.log('donehandler');
    // updates user.name state
    if (field === 'address') {
      await dispatch(docUpdateThunk(docInputController(field, editInput[field])));
    } else if (field === 'fullName') {
      const { first_name, last_name } = editInput;
      await dispatch(userUpdateThunk({ type: 'first_name', input: first_name }));
      await dispatch(userUpdateThunk({ type: 'last_name', input: last_name }));
    } else {
      await dispatch(userUpdateThunk({ type: field, input: editInput[field] }));
    }
    setEdit({ ...edit, [field]: false });
  };

  const dataStyles = { ml: '.5rem' };
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

      {!guest
      && (
      <CardActionArea onClick={handleOpenImgModal} sx={{ width: 'fit-content', borderRadius: '50%' }}>
        <Avatar
          alt={user.name}
          src={avatarUrl}
          sx={{
            width: (small ? '10rem' : '12rem'),
            height: (small ? '10rem' : '12rem'),
            border: `1px solid ${primary}`,
            transition: 'all .3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.01)',
            },
          }}
        />
      </CardActionArea>
      )}

      <Avatar
        alt={user.name}
        src={avatarUrl}
        sx={{
          width: (small ? '10rem' : '12rem'),
          height: (small ? '10rem' : '12rem'),
          border: `1px solid ${primary}`,
          transition: 'all .3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.01)',
          },
          alignSelf: 'center',
        }}
      />

      <CardContent
        sx={{
          p: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {edit.fullName ? (
          <div
            tabIndex={1}
            style={{ display: 'flex', alignItems: 'end' }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                cancelButtonHandler(e, 'fullName');
              }
            }}
          >
            <FormGroup
              tabIndex={1}
              variant="standard"
              sx={{ display: 'flex', flexDirection: 'row' }}
              name="fullName"

            >
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
          <div
            tabIndex={1}
            style={{ display: 'flex', alignItems: 'end' }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                cancelButtonHandler(e, 'email');
              }
            }}
          >
            <Typography variant="h6" component="h2">
              Почта
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField
                variant="standard"
                value={editInput.email}
                name="email"
                onChange={(e) => inputHandler(e)}

              />
            </Typography>
            <Box
              onClick={(e) => doneButtonHandler(e, 'email')}
            >
              <DoneIcon
                color="secondary"
                sx={iconStyles}

              />
            </Box>
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
              <Box
                onClick={(e) => editButtonHandler(e, 'email')}
              >
                <EditIcon
                  sx={iconStyles}
                  color="primary"
                >
                  edit_profile
                </EditIcon>
              </Box>
            )}
          </div>
        )}

        {edit.phone ? (
          <div
            tabIndex={1}
            style={{ display: 'flex', alignItems: 'end' }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                cancelButtonHandler(e, 'phone');
              }
            }}
          >
            <Typography variant="h6" component="h2">
              Телефон
            </Typography>
            <Typography variant="h5" component="div" sx={dataStyles}>
              <TextField
                variant="standard"
                name="phone"
                onChange={(e) => inputHandler(e)}
                value={editInput.phone}
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
              <div
                tabIndex={1}
                style={{ display: 'flex', alignItems: 'end', width: 'fit-content' }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    cancelButtonHandler(e, 'address');
                  }
                }}
              >
                <Typography variant="h6" component="h2">
                  Адрес клиники
                </Typography>
                <Typography variant="h6" component="div" sx={dataStyles}>
                  <TextField
                    fullWidth
                    variant="standard"
                    name="address"
                    onChange={(e) => inputHandler(e)}
                    value={editInput.address}
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
