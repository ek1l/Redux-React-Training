import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './Components/PaginaPadrao/PaginaPadrao';
import Home from './pages/Home/Home';
import Categoria from './pages/Categoria/Categoria';
import Carrinho from './pages/Carrinho/Carrinho';
import Anuncie from './pages/Anuncie/Anuncie';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="/categoria/:nomeCategoria" element={<Categoria />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/anuncie/:nomeCategoria" element={<Anuncie />} />
          <Route path="/anuncie" element={<Anuncie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
