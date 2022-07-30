import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import Navbar from './components/Navbar/Navbar';
import PageProfile from './pages/pageProfile/PageProfile';
import { userLoginAC } from './redux/actions/userActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user?.first_name) dispatch(userLoginAC(user));
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/profile" element={<PageProfile />} />
      </Routes>
    </>
  );
}

export default App;
