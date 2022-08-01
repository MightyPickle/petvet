/* eslint-disable max-len */
import React from 'react';
import { Box, Chip } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function DocProfSpecialization({ vetinfo }) {
  return (
    <>
      <Box sx={{ width: '90%', margin: 1 }}>
        <div className="profile" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ margin: 10 }}>Кого лечу:</div>
          <div key={uuidv4()} style={{ margin: 10 }}>
            {vetinfo.Profiles?.map((el) => <Chip key={el.name} sx={{ ml: 1 }} label={el.name} />)}
          </div>
        </div>
      </Box>
      <Box sx={{ width: '90%', margin: 1 }}>
        <div className="specialization" style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ margin: 10 }}>Специализация:</div>
          <div key={uuidv4()} style={{ margin: 10 }}>{vetinfo.Categories?.map((el) => <Chip key={el.name} sx={{ ml: 1 }} label={el.name} />)}</div>
        </div>
      </Box>
    </>

  );
}

export default DocProfSpecialization;
