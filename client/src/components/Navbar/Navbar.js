import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { userLogoutThunk } from '../../redux/actions/userActions';

function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ padding: '5px', marginRight: '5px' }}>
          <img src="/LOGO5.png" alt="logo" style={{ width: '4rem', height: '4rem' }} />
        </div>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, width: 'max-content' }}>
          <NavLink to="/vets" style={{ textDecoration: 'none', color: 'inherit', width: 'inherit' }}>Поиск ветеринара</NavLink>
        </Typography>
        {user?.user_group === 1 && (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/schedule" style={{ textDecoration: 'none', color: 'inherit' }}>Приемы</NavLink>
        </Typography>
        ) }
        {user.first_name
          ? (
            <>
              <Button color="inherit"><NavLink to="profile" style={{ textDecoration: 'none', color: 'inherit' }}>Личный кабинет</NavLink></Button>
              <Button
                color="inherit"
                onClick={() => dispatch(userLogoutThunk())}
              >
                Выйти

              </Button>
            </>
          )
          : <Button color="inherit"><NavLink to="auth" style={{ textDecoration: 'none', color: 'inherit' }}>Авторизация</NavLink></Button>}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
