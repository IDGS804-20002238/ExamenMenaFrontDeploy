import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioPage from './pages/InicioPage';
import ProductoPage from './pages/ProductoPage';
import DetalleProductoPage from './pages/DetalleProductoPage';
import ComprasRegistradasPage from './pages/ComprasRegistradasPage';
import Navbar from './Components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/productos" element={<ProductoPage />} />
        <Route path="/productos/:id" element={<DetalleProductoPage />} />
        <Route path="/ComprasRegistradas" element={<ComprasRegistradasPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;