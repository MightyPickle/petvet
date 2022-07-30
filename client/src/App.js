import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthorizationPage />} />
      <Route path="/users/patients/:id" element={<PageProfile />} />
    </Routes>
  );
}

export default App;
