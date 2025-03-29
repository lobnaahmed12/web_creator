import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StartBuilding from './pages/StartBuilding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-building" element={<StartBuilding />} />
      </Routes>
    </Router>
  );
}

export default App;