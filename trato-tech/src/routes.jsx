import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaPadrao from './Components/PaginaPadrao/PaginaPadrao';
import Home from './pages/Home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
