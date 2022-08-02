import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocAccordionsAll from '../../../components/DocAccordionsAll/DocAccordionsAll';
import { getCategoriesThunk } from '../../../redux/actions/categoriesAction';
import { getProfilesThunk } from '../../../redux/actions/profilesAction';

export default function PageDocProfile() {
  const doc = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesThunk());
    dispatch(getProfilesThunk());
  }, []);
  return (
    <div>
      <DocAccordionsAll doc={doc} />
    </div>
  );
}
