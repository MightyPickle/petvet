import { Box, Grid } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import BasicCard from '../../components/BasicCard/BasicCard';
import ButtonOne from '../../components/ButtonOne/ButtonOne';
import DocExperience from '../../components/DocExperience/DocExperience';
import DocProfSpecialization from '../../components/DocProfSpecialization/DocProfSpecialization';
import UserCard from '../../components/UserCard/UserCard';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DoctorPublic() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>
          <UserCard guest />
          <DocProfSpecialization />
          <DocExperience />

        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item><ButtonOne /></Item>
      </Grid>
    </Grid>
  );
}

export default DoctorPublic;
