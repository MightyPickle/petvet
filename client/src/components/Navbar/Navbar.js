import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { userLogoutThunk } from '../../redux/actions/userActions';

function Navbar() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ padding: '5px', marginRight: '5px' }}>
          <NavLink to="/">
            <img src="/LOGO5.png" alt="logo" style={{ width: '4rem', height: '4rem' }} />
          </NavLink>
        </div>
        <Box sx={{
          display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '1rem', width: '100%',
        }}
        >
          {user?.user_group === 2 && (
          <NavLink to="/vets" style={{ textDecoration: 'none', color: 'inherit', width: 'inherit' }}>
            <Typography variant="h6" component="div" sx={{ width: 'max-content' }}>
              Поиск ветеринара
            </Typography>
          </NavLink>
          )}
          {user?.user_group === 1 && (
          <NavLink to="/schedule" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" component="div">
              Приемы
            </Typography>
          </NavLink>
          ) }
          {user.first_name
            ? (
              <>
                <NavLink to="profile" style={{ textDecoration: 'none', color: 'inherit', marginLeft: 'auto' }}>
                  <Button
                    sx={{ width: 'max-content' }}
                    color="inherit"
                  >
                    Личный кабинет
                  </Button>
                </NavLink>
                <Button
                  sx={{ alignSelf: 'flex-end' }}
                  color="inherit"
                  onClick={async () => {
                    await dispatch(userLogoutThunk());
                    navigate('/auth');
                  }}
                >
                  Выйти

                </Button>
              </>
            )
            : (
              <Button color="inherit" sx={{ marginLeft: 'auto' }}>
                <NavLink
                  to="auth"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Авторизация

                </NavLink>
              </Button>
            )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
