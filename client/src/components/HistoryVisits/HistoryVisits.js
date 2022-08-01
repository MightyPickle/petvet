import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function HistoryVisits({ pet }) {
  const styleCards = {
    backgroundColor: '#d9d9d9',
    width: '700px',
    height: '100px',
    borderRadius: '19px',
    marginBottom: '1rem',
  };
  // const pet = useSelector((state) => state.pet);
  // const pet = {
  //   id: 1,
  //   name: 'Bobik',
  //   specie: 'dog',
  //   breed: 'like',
  //   sex: 1,
  //   birthday: new Date(),
  //   weight: 2.44,
  //   color: 'black',
  //   sterilized: true,
  //   sterilized_date: new Date(),
  //   Chronic_diseases: [
  //     {
  //       id: 1,
  //       disease: 'nasmork',
  //     },
  //   ],
  //   Allergies: [
  //     {
  //       id: 1,
  //       allergy_name: 'fish allergy',
  //     },
  //     {
  //       id: 2,
  //       allergy_name: 'milk allergy',
  //     },
  //     {
  //       id: 3,
  //       allergy_name: 'sun allergy',
  //     },
  //   ],
  //   Vaccinations: [
  //     {
  //       id: 1,
  //       drug_name: 'SPUTNIK-V',
  //       drug_date: new Date(),
  //     },
  //     {
  //       id: 2,
  //       drug_name: 'НЕБЕСИТ-V',
  //       drug_date: new Date(),
  //     },
  //   ],
  //   Visits: [
  //     {
  //       id: 1,
  //       doc_id: {
  //         id: 1,
  //         first_name: 'Иван',
  //         last_name: 'Петров',
  //       },
  //       visit_date: new Date(),
  //       description: 'Жалобы на избыточную милость',
  //       diagnose: 'Воспаление миловидности',
  //       treatment: 'Лечение не требуется',
  //     },
  //     {
  //       id: 2,
  //       doc_id: {
  //         id: 1,
  //         first_name: 'Иван',
  //         last_name: 'Петров',
  //       },
  //       visit_date: new Date(),
  //       description: 'Жалобы на избыточную милость',
  //       diagnose: 'Воспаление миловидности',
  //       treatment: 'Лечение не требуется',
  //     },
  //   ],
  // };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
        Вакцинация / Обработка:
      </Typography>
      {pet.Vaccinations.map((el) => (
        <Box className="container" key={el.id} style={styleCards}>
          <Grid
            style={{ marginTop: '1rem', marginLeft: '1rem' }}
            container
            spacing={2}
          >
            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="span"
                sx={{ fontWeight: 'bold' }}
              >
                Препарат:
                {` ${el.drug_name}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6"
                component="span"
                sx={{ fontWeight: 'bold' }}
              >
                Дата обработки:
                {` ${new Date(el.drug_date).toLocaleDateString()}`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}

      <Typography variant="h6" component="span" sx={{ fontWeight: 'bold' }}>
        История визитов:
      </Typography>
      {pet.Visits.map((el) => (
        <Box className="container" key={el.id} style={styleCards}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', m: '1rem' }}
          >
            Врач:
            {` ${el.doctor.first_name} ${el.doctor.last_name}`}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mx: '1rem',
            }}
          >
            <Typography
              variant="p"
              component="span"
              sx={{ fontWeight: 'bold' }}
            >
              Дата визита:
              {` ${new Date(el.visit_date).toLocaleDateString()}`}
            </Typography>

            <Typography
              variant="p"
              component="span"
              sx={{ fontWeight: 'bold' }}
            >
              Диагноз:
              {` ${el.diagnose}`}
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
}
