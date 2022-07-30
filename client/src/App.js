import { Route, Routes } from 'react-router-dom';
import './App.css';
import QuestComponent from './components/QuestComponent/QuestComponent';
import PagesDoctorVisits from './pages/PagesDoctorVisits/PagesDoctorVisits';
// добавить :id к PagesDoctorVisits
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api/v1/visits/" element={<PagesDoctorVisits />} />
      </Routes>
    </div>
  );
}

export default App;
