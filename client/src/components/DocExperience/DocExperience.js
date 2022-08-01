import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function DocExperience({ vetinfo }) {
  return (
    <Box sx={{
      border: '2px solid grey', maxWidth: 700, minHeight: 150, margin: 1, borderRadius: '19px', bgcolor: 'text.disabled',
    }}
    >
      <Typography sx={{
        fontSize: 16, textAlign: 'left', mt: 1, ml: 1,
      }}
      >
        Описание
      </Typography>
      <Typography
        sx={{
          fontSize: 14, mt: 3, textAlign: 'left', ml: 1,
        }}
        color="text.secondary"
        gutterBottom
      >
        {vetinfo.Doc_info?.exeprience}
      </Typography>
    </Box>
  );
}

export default DocExperience;
