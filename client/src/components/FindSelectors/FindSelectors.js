import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

const city = [
  { title: 'Москва', class: 'врач' },
  { title: 'Санкт-Петербург', class: 'врач' },
  { title: 'Рязань', class: 'врач' },
  { title: 'Самара', class: 'врач' },
];

export default function FindSelectors({ setVetinfo, getData }) {
  const [profiles, setProfiles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);
  const [selectProfile, setSelectProfile] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3010/api/v1/doctors/profiles')
      .then((response) => response.json())
      .then((results) => setProfiles(results));
    fetch('http://localhost:3010/api/v1/doctors/categories')
      .then((response) => response.json())
      .then((results) => setCategories(results));
  }, []);

  const defaultProfiles = {
    options: profiles,
    getOptionLabel: (option) => option.name,
  };

  const defaultCategories = {
    options: categories,
    getOptionLabel: (option) => option.name,
  };

  const defaultCity = {
    options: city,
    getOptionLabel: (option) => option.title,
  };

  return (
    <Box sx={{
      minWidth: 500, minHeight: 600, border: '1px solid grey', borderRadius: '19px', backgroundColor: 'grey', ml: 10,
    }}
    >
      <Stack spacing={1} sx={{ width: 300, m: 'auto' }}>
        <Typography sx={{ mt: 10, fontWeight: 'bold' }}>
          Поиск врача по параметрам
        </Typography>
        <Autocomplete
          sx={{ mt: 2 }}
          {...defaultProfiles}
          id="controlled-demo"
          clearOnEscape
          value={selectProfile}
          onChange={async (event, newValue) => {
            setSelectProfile((prev) => {
              getData(newValue, selectCategory);
              return newValue;
            });
          }}
          renderInput={(params) => (
            <TextField
              sx={{
                mb: 5, mt: 5, backgroundColor: 'white', borderRadius: '10px',
              }}
              {...params}
              label="Тип животного"
              variant="standard"
            />
          )}
        />
        <Autocomplete
          {...defaultCategories}
          id="controlled-demo"
          name="category"
          value={selectCategory}
          onChange={(event, newValue) => {
            setSelectCategory(() => {
              getData(selectProfile, newValue);
              return newValue;
            });
          }}
          clearOnEscape
          renderInput={(params) => (
            <TextField
              sx={{ mb: 5, backgroundColor: 'white', borderRadius: '10px' }}
              {...params}
              label="Специализация врача"
              variant="standard"
            />
          )}
        />
        <Autocomplete
          {...defaultCity}
          id="clear-on-escape"
          clearOnEscape
          renderInput={(params) => (
            <TextField
              sx={{ mb: 5, backgroundColor: 'white', borderRadius: '10px' }}
              {...params}
              label="Город"
              variant="standard"
            />
          )}
        />

      </Stack>
    </Box>
  );
}
