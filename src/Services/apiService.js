const API_BASE_URL = 'https://examenmenabazar.azurewebsites.net/api/Productos';
const VENTAS_API_BASE_URL = 'https://examenmenabazar.azurewebsites.net/api/Ventas';

export const getProductos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/productos`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const getProductosbyId = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/productos/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching item with id ${id}:`, error);
    throw error;
  }
};

export const crearVenta = async (sale) => {
  try {
    const response = await fetch(`${VENTAS_API_BASE_URL}/ventas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sale),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating sale:', error);
    throw error;
  }
};

export const getVentas = async () => {
  try {
    const response = await fetch(`${VENTAS_API_BASE_URL}/ventas`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching ventas:', error);
    throw error;
  }
};