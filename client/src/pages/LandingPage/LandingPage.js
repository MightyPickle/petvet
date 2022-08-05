import {
  Button, Tab, Tabs, Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TabPanel from '../../components/TabPanel/TabPanel';

const firstAnimation = {
  animation: 'appearOne .5s ease-in-out',
  '@keyframes appearOne': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '15%': {
      transform: 'translateX(-85%)',
    },
    '25%': {
      transform: 'translateX(-75%)',
    },
    '35%': {
      transform: 'translateX(-65%)',
    },
    '50%': {
      transform: 'translateX(-50%)',
    },
    '65%': {
      transform: 'translateX(-45%)',
    },
    '75%': {
      transform: 'translateX(-25%)',
    },
    '85%': {
      transform: 'translateX(-15%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
};

const secondAnimation = {
  animation: 'appearTwo .5s ease-in-out',
  '@keyframes appearTwo': {
    '0%': {
      transform: 'translateX(+100%)',
    },
    '15%': {
      transform: 'translateX(+85%)',
    },
    '25%': {
      transform: 'translateX(+75%)',
    },
    '35%': {
      transform: 'translateX(+65%)',
    },
    '50%': {
      transform: 'translateX(+50%)',
    },
    '65%': {
      transform: 'translateX(+45%)',
    },
    '75%': {
      transform: 'translateX(+25%)',
    },
    '85%': {
      transform: 'translateX(+15%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
};

function LandingPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ marginTop: '1rem' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="login-signup" centered>
          <Tab label="Я владелец питомца" />
          <Tab label="Я врач" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          className="landingbox"
          sx={{
            boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            marginLeft: 'auto',
            width: 'max-content',
            marginBottom: '1rem',
            position: 'relative',
            ...firstAnimation,
          }}
        >
          <img alt="pic1" src={`${process.env.PUBLIC_URL}landingimg/logo6.png`} height="300px" width="300px" style={{ objectFit: 'fill' }} />
          <Box sx={{ minHeight: '100%' }}>
            <Typography variant="h6" sx={{ justifySelf: 'flex-start' }}>Храните историю болезни питомца у себя</Typography>
            <Link to="/auth" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button variant="contained" sx={{ margin: '10px auto 0 auto', display: 'block' }}>
                Попробовать
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          className="landingbox"
          sx={{
            boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
            borderRadius: '10px',
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            width: 'max-content',
            alignItems: 'center',
            marginBottom: '1rem',
            position: 'relative',
            ...secondAnimation,
          }}
        >
          <img alt="pic1" src={`${process.env.PUBLIC_URL}landingimg/logo2.png`} height="300px" width="300px" />
          <Box sx={{ minHeight: '100%' }}>
            <Typography variant="h6" sx={{ justifySelf: 'flex-start' }}>Поиск ветеринаров и записи на прием</Typography>
            <Link to="/auth" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button variant="contained" sx={{ margin: '10px auto 0 auto', display: 'block' }}>
                Попробовать
              </Button>
            </Link>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          className="landingbox"
          sx={{
            boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            marginLeft: 'auto',
            width: 'max-content',
            marginBottom: '1rem',
            position: 'relative',
            ...firstAnimation,
          }}
        >
          <img alt="pic1" src={`${process.env.PUBLIC_URL}landingimg/logo8.png`} height="300px" style={{ objectFit: 'fill' }} />
          <Box sx={{ minHeight: '100%' }}>
            <Typography variant="h6" sx={{ justifySelf: 'flex-start' }}>Ведите прием онлайн</Typography>
            <Button variant="contained" sx={{ margin: '10px auto 0 auto', display: 'block' }}>
              <Link to="/auth" style={{ textDecoration: 'none', color: 'inherit' }}>Попробовать</Link>
            </Button>
          </Box>
        </Box>
        <Box
          className="landingbox"
          sx={{
            boxShadow: '4px 4px 10px rgba(0,0,0,0.3)',
            borderRadius: '10px',
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            width: 'max-content',
            alignItems: 'center',
            marginBottom: '1rem',
            position: 'relative',
            ...secondAnimation,
          }}
        >
          <img alt="pic1" src={`${process.env.PUBLIC_URL}landingimg/logo1.png`} height="300px" />
          <Box sx={{ minHeight: '100%' }}>
            <Typography variant="h6" sx={{ justifySelf: 'flex-start' }}>Управляйте своим расписанием</Typography>
            <Button variant="contained" sx={{ margin: '10px auto 0 auto', display: 'block' }}>
              <Link to="/auth" style={{ textDecoration: 'none', color: 'inherit' }}>Попробовать</Link>
            </Button>
          </Box>
        </Box>
      </TabPanel>
    </Container>
  );
}

export default LandingPage;
