import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function HistoryVisits({ pet }) {
  const styleCards = {
    backgroundColor: '#d9d9d9',
    minWidth: '32rem',
    width: '40rem',
    borderRadius: '19px',
    marginBottom: '1rem',
    display: 'flex',
    flexFlow: 'column',
    padding: '1rem 1.5rem 1rem 1.5rem',
    boxShadow: 3,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', py: 1 }}>
        Вакцинация / Обработка:
      </Typography>
      {pet.Vaccinations.map((el) => (
        <Box className="container" key={el.id} sx={styleCards}>
          {/* <Grid
            style={{ marginTop: '1rem', marginLeft: '1rem' }}
            container
            spacing={2}
          > */}
          {/* <Grid item xs={6}> */}
          <Typography
            variant="h6"
            component="span"
            // sx={{ fontWeight: 'bold' }}
          >
            <b>Препарат:</b>
            {` ${el.drug_name}`}
          </Typography>
          {/* </Grid> */}
          {/* <Grid item xs={6}> */}
          <Typography
            variant="p"
            component="span"
            // sx={{ fontWeight: 'bold' }}
          >
            <b> Дата обработки: </b>
            {` ${new Date(el.drug_date).toLocaleDateString()}`}
          </Typography>
          {/* </Grid> */}
          {/* </Grid> */}
        </Box>
      ))}

      <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', py: 1 }}>
        История визитов:
      </Typography>
      {pet.Visits.map((el) => (
        <Box className="container" key={el.id} sx={styleCards}>
          <Typography
            variant="h6"
            component="div"
            // sx={{ fontWeight: 'bold' }}
          >
            <b> Врач: </b>
            {` ${el.doctor.first_name} ${el.doctor.last_name}`}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              // mx: '1rem',
            }}
          >
            <Typography
              variant="p"
              component="span"
              // sx={{ fontWeight: 'bold' }}
            >
              <b> Дата визита: </b>
              {` ${new Date(el.visit_date).toLocaleDateString()}`}
            </Typography>

            <Typography
              variant="p"
              component="span"
              // sx={{ fontWeight: 'bold' }}
            >
              <b>  Диагноз:</b>
              {` ${el.diagnose}`}
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
}
