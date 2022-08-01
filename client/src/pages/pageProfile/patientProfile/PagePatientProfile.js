import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AllPetCards from '../../../components/AllPetCards/AllPetCards';
// import { getPetsThunk } from '../../../redux/actions/petsAction';

export default function PagePatientProfile() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPetsThunk());
  // }, []);
  return (
    <div>
      <AllPetCards />
    </div>
  );
}
