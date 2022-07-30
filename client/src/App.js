import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import Navbar from './components/Navbar/Navbar';
import PageProfile from './pages/pageProfile/PageProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<AuthorizationPage />} />
        <Route path="/users/patients/:id" element={<PageProfile />} />
      </Routes>
    </>
  );
}

export default App;
