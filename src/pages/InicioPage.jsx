import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getProductos } from '../Services/apiService.js';
import '../App.css';

const InicioPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const items = await getProductos();
      const filteredItems = searchTerm
        ? items.filter(item =>
            item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.descripcion_producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.precio.toString().includes(searchTerm)
          )
        : items;
      navigate('/productos', { state: { items: filteredItems } });
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img src="/img/image.png" alt="Bazar Online" width="100px" />
        <h1>Bazar Universal Online</h1>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleSearch}>Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default InicioPage;