import React, { useEffect, useState } from 'react';
import { getVentas } from '../Services/apiService.js';
import '../App.css';

const ComprasRegistradasPage = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const data = await getVentas();
        setSales(data);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };

    fetchSales();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Compras Registradas</h1>
      {sales.length > 0 ? (
        <ul className="list-group">
          {sales.map(sale => (
            <li key={sale.venta_id} className="list-group-item">
              <h5>{sale.titulo_ventas}</h5>
              <p>Precio: ${sale.precio_venta}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Compras Registradas.</p>
      )}
    </div>
  );
};

export default ComprasRegistradasPage;