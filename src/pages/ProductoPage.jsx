import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

function ProductoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const items = location.state?.items || [];
  const [searchTerm, setSearchTerm] = useState('');

  const handleCardClick = (id) => {
    navigate(`/productos/${id}`);
  };

  const filteredItems = items.filter(item =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.descripcion_producto.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.categoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.precio.toString().includes(searchTerm)
  );

  return (
    <div className="mt-4">
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <img src="/img/image.png" alt="Bazar Online" width="50px" />
        <input
          type="text"
          className="form-control ml-2"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="mt-4">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div
              key={item.producto_id}
              className="card mb-3"
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => handleCardClick(item.producto_id)}
            >
              <img
                src={item.thumbnail}
                alt={item.titulo}
                style={{ width: '250px', height: '250px', borderRadius: '50%', marginRight: '15px' }}
              />
              <div className="card-body" style={{ flex: '1' }}>
                <h5 className="card-title">
                  {item.titulo}
                  <span style={{ fontSize: '0.8em', color: 'gray', marginLeft: '10px' }}>{item.categoria}</span>
                </h5>
                <p className="card-text">{item.descripcion_producto}</p>
                <p className="card-text" style={{ fontWeight: 'bold', fontSize: '1.2em', color: '#333' }}>
                  ${item.precio}
                </p>
                <div>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} style={{ color: index < Math.floor(item.calificacion) ? '#FFD700' : 'lightgray' }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
}

export default ProductoPage;