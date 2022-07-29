import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageProfile from './pages/pageProfile/PageProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users/patients/:id" element={<PageProfile />} />
      </Routes>
    </div>
  );
}

export default App;
