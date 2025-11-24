import axios from 'axios';

// URL base del backend
const API_URL = 'http://18.222.252.132:8082/api';

// Crear instancia de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar token JWT a las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de error
      if (error.response.status === 401) {
        // Token expirado o inválido
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// ==================== AUTH ====================
export const authService = {
  login: async (nombreUsuario, password) => {
    const response = await api.post('/auth/login', { nombreUsuario, password });
    return response.data;
  },

  registro: async (datosUsuario) => {
    const response = await api.post('/auth/registro', datosUsuario);
    return response.data;
  },
};

// Función para mapear producto del backend al frontend
const mapearProducto = (producto) => ({
  ...producto,
  imagenUrl: producto.imagen || producto.imagenUrl,
  enOferta: producto.oferta || producto.enOferta,
  descuento: producto.porcentajeDescuento || producto.descuento || 0
});

// ==================== PRODUCTOS ====================
export const productosService = {
  obtenerTodos: async () => {
    const response = await api.get('/productos');
    return response.data.map(mapearProducto);
  },

  obtenerPorId: async (id) => {
    const response = await api.get(`/productos/${id}`);
    return mapearProducto(response.data);
  },

  obtenerPorCategoria: async (categoria) => {
    const response = await api.get(`/productos/categoria/${categoria}`);
    return response.data.map(mapearProducto);
  },

  buscar: async (nombre) => {
    const response = await api.get(`/productos/buscar?nombre=${nombre}`);
    return response.data.map(mapearProducto);
  },

  obtenerOfertas: async () => {
    const response = await api.get('/productos/ofertas');
    return response.data.map(mapearProducto);
  },

  crear: async (producto) => {
    // Mapear campos del frontend al backend
    const productoBackend = {
      ...producto,
      imagen: producto.imagenUrl || producto.imagen,
      oferta: producto.enOferta || producto.oferta
    };
    const response = await api.post('/productos', productoBackend);
    return mapearProducto(response.data);
  },

  actualizar: async (id, producto) => {
    // Mapear campos del frontend al backend
    const productoBackend = {
      ...producto,
      imagen: producto.imagenUrl || producto.imagen,
      oferta: producto.enOferta || producto.oferta
    };
    const response = await api.put(`/productos/${id}`, productoBackend);
    return mapearProducto(response.data);
  },

  eliminar: async (id) => {
    const response = await api.delete(`/productos/${id}`);
    return response.data;
  },
};

// ==================== CARRITO ====================
export const carritoService = {
  obtener: async () => {
    const response = await api.get('/carrito');
    return response.data;
  },

  agregarItem: async (productoId, cantidad) => {
    const response = await api.post('/carrito/items', { productoId, cantidad });
    return response.data;
  },

  actualizarCantidad: async (itemId, cantidad) => {
    const response = await api.put(`/carrito/items/${itemId}?cantidad=${cantidad}`);
    return response.data;
  },

  eliminarItem: async (itemId) => {
    const response = await api.delete(`/carrito/items/${itemId}`);
    return response.data;
  },

  vaciar: async () => {
    const response = await api.delete('/carrito');
    return response.data;
  },
};

// ==================== PEDIDOS ====================
export const pedidosService = {
  crear: async (direccionEnvio, notas) => {
    const response = await api.post('/pedidos', { direccionEnvio, notas });
    return response.data;
  },

  obtenerMios: async () => {
    const response = await api.get('/pedidos');
    return response.data;
  },

  obtenerPorId: async (id) => {
    const response = await api.get(`/pedidos/${id}`);
    return response.data;
  },

  cancelar: async (id) => {
    const response = await api.put(`/pedidos/${id}/cancelar`);
    return response.data;
  },
};

export default api;
