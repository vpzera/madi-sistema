
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Cadastro from './pages/Cadastro';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/painel" element={<Painel />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  </Router>
);

export default App;
