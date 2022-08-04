import {
  Avatar,
  Button,
  Card,
  CardActionArea, CardActions, CardContent, Typography,
} from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPetThunk } from '../../redux/actions/petActions';

export default function PetCard({ pet }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const neutral = theme.palette.neutral.main;

  const navigate = useNavigate();
  const navigateMoreHandler = async (id) => {
    await dispatch(getPetThunk(id));
    navigate(`/pets/${id}`);
  };
  const avatarUrl = `${process.env.REACT_APP_HOST}${pet.img}`;
  return (
    <Card sx={{
      minWidth: 'fit-content',
      width: '15rem',
      backgroundColor: neutral,
      borderRadius: '9px',
      boxShadow: 3,
      transition: 'all .3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.03)',
      },
    }}
    >
      <CardActionArea
        onClick={(e) => navigateMoreHandler(pet.id)}
        sx={{
          height: '23rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt={pet.name}
          src={avatarUrl}
          sx={{
            width: '11rem', height: '11rem', m: 2, border: `1px solid ${primary}`,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pet.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
