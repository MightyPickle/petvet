import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import PageProfile from './pages/pageProfile/PageProfile';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthorizationPage />} />
      <Route path="/profile" element={<PageProfile />} />
    </Routes>
  );
}

export default App;
