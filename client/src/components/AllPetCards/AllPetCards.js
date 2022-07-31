import Container from '@mui/material/Container';
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PetCard from '../PetCard/PetCard';

export default function AllPetCards() {
  const pets = useSelector((state) => state.user.pets); // uncomment
  return (
    <Container sx={{
      display: 'flex', flexDirection: 'row', py: 3, justifyContent: 'space-between',
    }}
    >
      {pets && pets.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
    </Container>
  );
}
