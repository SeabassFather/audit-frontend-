import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QRGeneratorPage from './pages/QRGeneratorPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qr" element={<QRGeneratorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
