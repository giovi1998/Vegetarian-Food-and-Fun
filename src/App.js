import './App.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import Navbar from './Component/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/*" element={<ErrorPage />} />          
        </Routes>
    </Router>
  );
};

export default App;
