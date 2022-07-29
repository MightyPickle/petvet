import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthorizationPage />} />
    </Routes>
  );
}

export default App;
