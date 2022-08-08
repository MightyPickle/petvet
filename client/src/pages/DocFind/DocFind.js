import { CardActionArea, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FindSelectors from '../../components/FindSelectors/FindSelectors';
import SearchInput from '../../components/SearchInput/SearchInput';
import UserCard from '../../components/UserCard/UserCard';

const sxMaimConteiner = {
  display: 'flex',
  mt: 10,
  width: '100%',
};
const sxVetCard = {
  mt: 2,
  borderRadius: '15px',
  boxShadow: 3,
  transition: 'all .3s ease-in-out',
  '&:hover': {
    cursor: 'pointer',
    transform: 'scale(1.02)',
  },
};
const sxAllVetCardsContainer = {
  ml: '5rem',
  minWidth: '56%',
  flexGrow: 1,
};

function DocFind() {
  const [vetinfo, setVetinfo] = useState([]);
  const navigate = useNavigate();

  const getData = async (one = '', two = '') => {
    const response = await fetch(`http://localhost:3010/api/v1/doctors?profile=${one?.name}&category=${two?.name}`);
    const data = await response.json();
    setVetinfo(data);
  };

  const getDataByName = async (doctorName = '') => {
    const response = await fetch(`http://localhost:3010/api/v1/doctors/name?doctorname=${doctorName}`);
    const data = await response.json();
    setVetinfo(data);
  };

  return (
    <Container sx={sxMaimConteiner}>
      <FindSelectors setVetinfo={setVetinfo} getData={getData} />
      <Box sx={sxAllVetCardsContainer}>
        <SearchInput getData={getDataByName} />
        <Box sx={{ mt: 10 }}>
          {vetinfo.length > 0 && vetinfo.map((vet, index) => (
            <Box
              sx={sxVetCard}
              key={index}
              onClick={() => {
                navigate(`/doctors/${vet.id}`);
              }}
            >
              <CardActionArea>
                <UserCard
                  user={vet}
                  address={vet.Doc_info?.clinic_address || 'Отсутствует'}
                  guest
                  small
                />
              </CardActionArea>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default DocFind;
