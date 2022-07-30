/* eslint-disable object-curly-newline */
import React from 'react';
import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function QuestComponent() {
  //   const pet = useSelector((store) => store.pet);
  const pet = {
    id: 1,
    name: 'Bobik',
    specie: 'dog',
    breed: 'like',
    sex: 1,
    birthday: new Date(),
    weight: 2.44,
    color: 'black',
    sterilized: true,
    sterilized_date: new Date(),
    Chronic_diseases: [
      {
        id: 1,
        disease: 'nasmork',
      },
    ],
    Allergies: [
      {
        id: 1,
        allergy_name: 'fish allergy',
      },
      {
        id: 2,
        allergy_name: 'milk allergy',
      },
      {
        id: 3,
        allergy_name: 'sun allergy',
      },
    ],
  };
  return (
    <Box
      className="container"
      style={{
        backgroundColor: '#d9d9d9',
        width: '700px',
        height: '700px',
        borderRadius: '19px',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Grid
        style={{ marginTop: '1rem', marginLeft: '1rem' }}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Имя:
            {` ${pet.name}`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Дата рождения:
            {` ${pet.birthday.toLocaleDateString()}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Вид:
            {` ${pet.specie}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Порода:
            {` ${pet.breed}`}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Пол:
            {pet.sex === 1 ? ' М' : ' Ж'}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Вес:
            {` ${pet.weight}`}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Окрас:
            {` ${pet.color}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            {pet.sex === 1 ? 'Кастрирован:' : 'Стерелизована:'}
            {pet.sterilized === true ? ' да' : ' нет'}
          </Typography>
        </Grid>
        {pet.sterilized === true ? (
          <Grid item xs={6}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontWeight: 'bold' }}
            >
              Дата:
              {` ${pet.sterilized_date.toLocaleDateString()}`}
            </Typography>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Хронические болезни:
            {pet.Chronic_diseases.map((el) => (
              <Chip sx={{ mx: '1rem' }} key={el.id} label={el.disease} />
            ))}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Аллергии:
            {pet.Allergies.map((el) => (
              <Chip sx={{ mx: '1rem' }} key={el.id} label={el.allergy_name} />
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
