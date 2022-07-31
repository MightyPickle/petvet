/* eslint-disable max-len */
import React from 'react';
import { Box, Chip } from '@mui/material';

function DocProfSpecialization({ info }) {
  return (
    <>
      <Box sx={{ width: '90%', margin: 1 }}>
        <div className="profile" style={{ display: 'flex' }}>
          <div style={{ margin: 10 }}>Кого лечу:</div>
          <div style={{ margin: 10 }}>
            {info.Profiles?.map((el) => <Chip sx={{ ml: 1 }} label={el.name} />)}
          </div>
        </div>
      </Box>
      <Box sx={{ width: '90%', margin: 1 }}>
        <div className="specialization" style={{ display: 'flex' }}>
          <div style={{ margin: 10 }}>Специализация:</div>
          <div style={{ margin: 10 }}>{info.Categories?.map((el) => <Chip sx={{ ml: 1 }} label={el.name} />)}</div>
        </div>
      </Box>
    </>

  );
}

export default DocProfSpecialization;
