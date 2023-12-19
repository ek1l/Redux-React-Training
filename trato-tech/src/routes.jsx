import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './Components/PaginaPadrao/PaginaPadrao';
import Home from './pages/Home/Home';
import Categoria from './pages/Categoria/Categoria';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
