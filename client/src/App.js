import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';
import DocFind from './pages/DocFind/DocFind';
import DoctorPublic from './pages/DocPublic/DocPublic';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthorizationPage />} />
      <Route path="/api/v1/users/doctors/:id" element={<DoctorPublic />} />
      <Route path="/docfind" element={<DocFind />} />
    </Routes>
  );
}

export default App;
