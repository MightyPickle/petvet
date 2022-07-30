import { Box, Container } from '@mui/material';
import React from 'react';
import DoctorVisitsButtons from '../../components/DoctorVisitsButtons/DoctorVisitsButtons';
import HistoryVisits from '../../components/HistoryVisits/HistoryVisits';
import QuestComponent from '../../components/QuestComponent/QuestComponent';

export default function PagesDoctorVisits() {
  // QuestComp
  // HistoryComp
  // VisitListComp
  return (
    <Container sx={{ display: 'flex', marginTop: '1rem' }}>
      {/* <QuestComponent /> */}
      <HistoryVisits />
      <DoctorVisitsButtons />
    </Container>
  );
}
