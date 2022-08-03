import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useDebounce from '../../utils/debounce';

function SearchInput({ getData }) {
  const [input, setInput] = useState('');
  const debounced = useDebounce(input, 2000);
  useEffect(() => {
    getData(debounced);
  }, [debounced]);
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <TextField
      sx={{ width: '110%' }}
      id="standard-search"
      label="Поиск врача по имени"
      type="search"
      variant="standard"
      value={input}
      onChange={handleChange}
    />
  );
}
export default SearchInput;
