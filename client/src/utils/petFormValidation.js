export const pageOneValidation = (state) => {
  if (
    state.name === ''
   || state.specie === ''
   || state.breed === ''
   || state.sex === ''
   || state.birthday === ''
   || state.weight === ''
   || state.color === ''
  ) {
    return false;
  }
  return true;
};

export const pageTwoValidation = (state) => {
  if (state.sterilized === '') {
    return false;
  }
  if (state.sterilized !== '' && state.sterilized_date === '') {
    return false;
  }
  return true;
};
