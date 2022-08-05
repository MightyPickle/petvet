/* eslint-disable object-curly-newline */
import React from 'react';
import { Avatar, Box, Chip, Grid, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';

export default function QuestComponent({ pet, handleOpenImgModal }) {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const avatarUrl = `${process.env.REACT_APP_HOST}${pet.img}`;
  return (
    <Box
      className="container"
      sx={{
        backgroundColor: 'paper',
        minWidth: '32rem',
        width: '43rem',
        height: 'max-content',
        borderRadius: '19px',
        display: 'flex',
        flexFlow: 'column',
        padding: '1.5rem 1.5rem 3.5rem 1.5rem',
        boxShadow: 4,
        boxSizing: 'border-box',
        alignItems: 'start',
      }}
    >
      {/* спозиционировать аватар и имя */}
      <Box sx={{ display: 'flex', justifyContent: 'start', height: 'fit-content', gap: 2 }}>
        <Avatar
          alt={pet.name}
          src={avatarUrl}
          sx={{
            width: '10rem',
            height: '10rem',
            m: 2,
            border: `1px solid ${primary}`,
          }}
          onClick={handleOpenImgModal}
        />
        <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', alignSelf: 'center' }}>
          Имя:
          {` ${pet.name}`}
        </Typography>
      </Box>

      <Grid
        style={{ marginTop: '1rem', marginLeft: '.5rem', baclgroundColor: 'white' }}
        container
        spacing={3}
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Дата рождения:
          </Typography>
          <Typography variant="h6" component="span">
            {` ${new Date(pet.birthday).toLocaleDateString()}`}
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Вид:
          </Typography>
          <Typography variant="h6" component="span">
            {` ${pet.specie}`}
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Порода:
          </Typography>
          <Typography variant="h6" component="span">
            {` ${pet.breed}`}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Пол:
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            {pet.sex === 1 ? ' М' : ' Ж'}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Вес:
          </Typography>
          <Typography variant="h6" component="span">
            {` ${pet.weight}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            Окрас:
          </Typography>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            {` ${pet.color}`}
          </Typography>

        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
            {pet.sex === 1 ? 'Кастрирован:' : 'Стерелизована:'}
          </Typography>
          <Typography variant="h6" component="span">
            {pet.sterilized === true ? ' да' : ' нет'}
          </Typography>

        </Grid>
        {pet.sterilized === true ? (
          <Grid item xs={8}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontWeight: 'bold' }}
            >
              Дата:
            </Typography>
            <Typography
              variant="h6"
              component="span"
            >
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
