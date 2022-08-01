/* eslint-disable object-curly-newline */
import React from 'react';
import { Avatar, Box, Chip, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function QuestComponent({ pet }) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

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
      {/* с позиционировать аватар и имя */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
          Имя:
          {` ${pet.name}`}
        </Typography>
        <Avatar
          alt="{pet.avatar}"
          src="https://loremflickr.com/320/240/animal"
          sx={{
            width: 185,
            height: 185,
            m: 2,
            border: `1px solid ${primary}`,
          }}
        />
      </Box>

      <Grid
        style={{ marginTop: '1rem', marginLeft: '1rem' }}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Дата рождения:
            {` ${new Date(pet.birthday).toLocaleDateString()}`}
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
              {` ${new Date(pet.sterilized_date).toLocaleDateString()}`}
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
              <Chip sx={{ mx: '3px' }} key={el.id} label={el.allergy_name} />
            ))}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
