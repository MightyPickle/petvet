import Container from '@mui/material/Container';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PetCard from '../PetCard/PetCard';

export default function AllPetCards() {
  // const pets = useSelector((state) => state.pets) //uncomment
  const pets = ['lol', 'hah', 'heh'];
  return (
    <Container sx={{
      display: 'flex', flexDirection: 'row', py: 3, justifyContent: 'space-between',
    }}
    >
      {pets && pets.map((pet) => <PetCard key={uuidv4()} pet={pet} />)}
    </Container>
  );
}
