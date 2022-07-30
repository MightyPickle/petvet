import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function SearchInput() {
  return (
    <TextField
      id="standard-search"
      label="Поиск врача по имени"
      type="search"
      variant="standard"
    />
  );
}
export default SearchInput;
