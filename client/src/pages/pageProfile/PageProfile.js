import React from 'react';
import UserCard from '../../components/UserCard/UserCard';
import PagePatientProfile from './patientProfile/PagePatientProfile';

export default function PageProfile() {
  return (
    <div>
      pageProfile
      <UserCard />
      <PagePatientProfile />
    </div>
  );
}
