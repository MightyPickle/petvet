import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import PetCard from '../PetCard/PetCard';

export default function AllPetCards() {
  const pets = useSelector((state) => state.user.Pets); // uncomment
  return (
    <Container sx={{ py: 3 }}>
      <Button>
        <NavLink to="/pets/new" style={{ textDecoration: 'none', color: 'inherit' }}>Добавить питомца</NavLink>
      </Button>
      <Container sx={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
      }}
      >
        {pets && pets.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
      </Container>
    </Container>
  );
}
