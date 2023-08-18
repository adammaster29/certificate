import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './componets/Home';
import Detalles from './componets/Detalles';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalles/:id" element={<Detalles />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
