import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllPetCards from '../../../components/AllPetCards/AllPetCards';
// import { getPetsThunk } from '../../../redux/actions/petsAction';

export default function PagePatientProfile() {
  return (
    <div>
      <AllPetCards />
    </div>
  );
}
