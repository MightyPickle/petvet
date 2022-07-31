import React from 'react';
import { useSelector } from 'react-redux';
import DocAccordionsAll from '../../../components/DocAccordionsAll/DocAccordionsAll';

export default function PageDocProfile() {
  const doc = useSelector((state) => state.user);
  return (
    <div>
      <DocAccordionsAll doc={doc} />
    </div>
  );
}
