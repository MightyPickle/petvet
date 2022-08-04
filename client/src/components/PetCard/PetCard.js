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

  return (
    <Card sx={{
      minWidth: 150, backgroundColor: neutral, borderRadius: '9px',
    }}
    >
      <CardActionArea
        onClick={(e) => navigateMoreHandler(pet.id)}
        sx={{
          height: '24rem',
          width: '17rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <Avatar
          alt="{pet.avatar}"
          src="https://loremflickr.com/320/240/dog"
          sx={{
            width: 185, height: 185, m: 2, border: `1px solid ${primary}`,
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
