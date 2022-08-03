/* eslint-disable react/jsx-props-no-spreading */

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TabPanel from '../../components/TabPanel/TabPanel';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/Signup';
import { userLoginThunk, userSignupThunk } from '../../redux/actions/userActions';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

export default function AuthorizationPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (user.first_name) {
      navigate('/profile');
    }
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loginHandler = (form) => {
    dispatch(userLoginThunk(form));
  };

  const signupHandler = (form) => {
    dispatch(userSignupThunk(form));
  };

  return (
    <main>
      <Box sx={{ width: '40%', margin: 'auto', marginTop: '3rem' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="login-signup">
            <Tab label="Войти" />
            <Tab label="Зарегистрироваться" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Login submitHandler={loginHandler} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup submitHandler={signupHandler} />
        </TabPanel>
      </Box>
      <ErrorModal />
    </main>
  );
}
