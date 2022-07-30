import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const animals = [
  { title: 'Аквариумная рыбка', class: 'животное' },
  { title: 'Кошка', class: 'животное' },
  { title: 'Собака', class: 'животное' },
  { title: 'Хомячок', class: 'животное' },
];
const specialization = [
  { title: 'Хирург', class: 'врач' },
  { title: 'Терапевт', class: 'врач' },
  { title: 'Эндокринолог', class: 'врач' },
  { title: 'Уролог', class: 'врач' },
];
const city = [
  { title: 'Москва', class: 'врач' },
  { title: 'Санкт-Петербург', class: 'врач' },
  { title: 'Рязань', class: 'врач' },
  { title: 'Самара', class: 'врач' },
];

export default function FindSelectors() {
  const defaultAnimals = {
    options: animals,
    getOptionLabel: (option) => option.title,
  };
  const defaultSpecialization = {
    options: specialization,
    getOptionLabel: (option) => option.title,
  };
  const defaultCity = {
    options: city,
    getOptionLabel: (option) => option.title,
  };

  const [value, setValue] = React.useState(null);

  return (
    <Box sx={{
      minWidth: 400, minHeight: 500, border: '1px solid grey', borderRadius: '19px', backgroundColor: 'grey', ml: 10,
    }}
    >
      <Stack spacing={1} sx={{ width: 300, m: 'auto' }}>
        <Typography sx={{ mt: 10, fontWeight: 'bold' }}>
          Поиск врача по параметрам
        </Typography>
        <Autocomplete
          sx={{ mt: 2 }}
          {...defaultAnimals}
          id="disable-close-on-select"
          disableCloseOnSelect
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
        {/* <Typography sx={{ mt: 10, fontWeight: 'bold' }}>
          Специализация
        </Typography> */}
        <Autocomplete
          {...defaultSpecialization}
          id="disable-close-on-select"
          disableCloseOnSelect
          renderInput={(params) => (
            <TextField
              sx={{ mb: 5, backgroundColor: 'white', borderRadius: '10px' }}
              {...params}
              label="Специализация врача"
              variant="standard"
            />
          )}
        />
        {/* <Typography sx={{ mt: 10, fontWeight: 'bold' }}>
          Город
        </Typography> */}
        <Autocomplete
          {...defaultCity}
          id="disable-close-on-select"
          disableCloseOnSelect
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
