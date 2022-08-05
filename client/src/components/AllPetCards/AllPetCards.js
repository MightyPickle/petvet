import { useTheme } from '@emotion/react';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PetCard from '../PetCard/PetCard';

export default function AllPetCards() {
  const pets = useSelector((state) => state.user.Pets);
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  return (
    <Container sx={{ py: 3, width: 'max-content', m: 0 }}>
      <Button sx={{
        backgroundColor: primary, px: 1.5, boxShadow: 2, borderRadius: '9px',
      }}
      >
        <NavLink to="/pets/new" style={{ textDecoration: 'none', color: 'black' }}>Добавить питомца</NavLink>
      </Button>
      <Box sx={{
        display: 'flex', flexFlow: 'row wrap', justifyContent: 'start', gap: '2rem', mt: '1rem',
      }}
      >
        {pets && pets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
      </Box>
    </Container>
  );
}
