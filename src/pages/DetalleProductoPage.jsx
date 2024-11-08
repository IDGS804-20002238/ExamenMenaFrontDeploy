import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductosbyId, crearVenta } from '../Services/apiService.js';
import '../App.css';

const DetalleProductoPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getProductosbyId(id);
        setItem(data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  const handleBuy = async () => {
    if (item) {
      console.log('item:', item);
      const sale = {
        venta_id: 0,
        titulo_ventas: item.titulo,
        precio_venta: item.precio,
      };
      console.log('sale:', sale);
      try {
        await crearVenta(sale);
        alert('Compra realizada con éxito');
      } catch (error) {
        console.error('Error creating sale:', error);
        alert('Error al realizar la compra');
      }
    }
  };

  if (!item) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '15px' }}>
          {item.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={item.titulo}
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
            />
          ))}
        </div>
        <div className="card-body" style={{ flex: '1' }}>
          <h5 className="card-title">
            {item.titulo}
            <span style={{ fontSize: '0.8em', color: 'gray', marginLeft: '10px' }}>{item.category}</span>
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
          <div>
            <button className="btn btn-success" onClick={handleBuy} style={{ alignItems: 'center' }}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProductoPage;