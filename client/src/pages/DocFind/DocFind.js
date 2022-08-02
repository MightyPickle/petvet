import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import FindSelectors from '../../components/FindSelectors/FindSelectors';
import SearchInput from '../../components/SearchInput/SearchInput';
import UserCard from '../../components/UserCard/UserCard';

function DocFind() {
  const [vetinfo, setVetinfo] = useState([]);
  // console.log(vetinfo);
  const [input, setInput] = useState('');
  const handleChange = (event) => {
    setInput(event.target.value);
  };

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

  console.log(input);
  return (
    <Box sx={{ display: 'flex', mt: 10 }}>
      <FindSelectors setVetinfo={setVetinfo} getData={getData} />
      <Box sx={{ ml: 10 }}>
        <SearchInput getData={getDataByName} />
        <Box sx={{ mt: 10 }}>
          {vetinfo.length > 0 && vetinfo.map((vet, index) => (
            <UserCard
              key={index}
              user={vet}
              address={vet.Doc_info?.clinic_address}
              guest
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default DocFind;
