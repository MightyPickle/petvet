const pageOneValidation = (state) => {
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

export default pageOneValidation;
