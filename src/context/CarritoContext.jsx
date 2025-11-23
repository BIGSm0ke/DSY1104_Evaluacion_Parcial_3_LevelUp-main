// src/contexto/CarritoContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { carritoService } from '../services/api';

const CarritoContext = createContext();

const carritoInicial = {
  items: [],
  total: 0,
  cantidad: 0,
  carritoId: null
};

// Reducer para manejar las acciones del carrito
const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'CARGAR_CARRITO':
      // Cargar carrito desde el backend
      return {
        items: action.items || [],
        total: action.total || 0,
        cantidad: action.cantidad || 0,
        carritoId: action.carritoId
      };

    case 'AGREGAR_PRODUCTO':
      const productoExistente = state.items.find(item => item.productoId === action.producto.id);
      let nuevosItems;

      if (productoExistente) {
        nuevosItems = state.items.map(item =>
          item.productoId === action.producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        nuevosItems = [...state.items, { ...action.producto, productoId: action.producto.id, cantidad: 1 }];
      }

      const nuevaCantidad = nuevosItems.reduce((acc, item) => acc + item.cantidad, 0);
      const nuevoTotal = nuevosItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

      return { ...state, items: nuevosItems, cantidad: nuevaCantidad, total: nuevoTotal };

    case 'ELIMINAR_PRODUCTO':
      const item = state.items.find(item => item.id === action.id || item.productoId === action.id);
      if (!item) return state;
      const nuevosItemsSinItem = state.items.filter(i => i.id !== action.id && i.productoId !== action.id);
      const nuevaCantidadSinItem = state.cantidad - (item.cantidad || 0);
      const nuevoTotalSinItem = state.total - ((item.precio || 0) * (item.cantidad || 0));

      return { ...state, items: nuevosItemsSinItem, cantidad: nuevaCantidadSinItem, total: nuevoTotalSinItem };

    case 'VACIAR_CARRITO':
      return { items: [], total: 0, cantidad: 0, carritoId: state.carritoId };

    case 'ACTUALIZAR_CANTIDAD':
      const itemsActualizados = state.items.map(item =>
        (item.id === action.id || item.productoId === action.id)
          ? { ...item, cantidad: action.cantidad }
          : item
      );
      const nuevaCantidadTotal = itemsActualizados.reduce((acc, item) => acc + item.cantidad, 0);
      const nuevoTotalGeneral = itemsActualizados.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

      return { ...state, items: itemsActualizados, cantidad: nuevaCantidadTotal, total: nuevoTotalGeneral };

    case 'CARGAR_DEL_STORAGE':
      return action.carrito;

    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInicial);

  // Cargar carrito desde backend al iniciar (si hay token)
  useEffect(() => {
    const cargarCarritoDesdeBackend = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const carrito = await carritoService.obtener();
          const items = carrito.items?.map(item => ({
            id: item.id,
            productoId: item.productoId,
            nombre: item.nombreProducto,
            precio: item.precioUnitario,
            cantidad: item.cantidad,
            imagenUrl: item.imagenUrl
          })) || [];

          const cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
          const total = items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

          dispatch({
            type: 'CARGAR_CARRITO',
            items,
            cantidad,
            total,
            carritoId: carrito.id
          });
        } catch (error) {
          console.error('Error al cargar carrito:', error);
          // Si falla, cargar del localStorage como fallback
          const carritoGuardado = localStorage.getItem('carrito');
          if (carritoGuardado) {
            dispatch({ type: 'CARGAR_DEL_STORAGE', carrito: JSON.parse(carritoGuardado) });
          }
        }
      } else {
        // Sin token, usar localStorage
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
          dispatch({ type: 'CARGAR_DEL_STORAGE', carrito: JSON.parse(carritoGuardado) });
        }
      }
    };

    cargarCarritoDesdeBackend();
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(state));
  }, [state]);

  // Funciones auxiliares para sincronizar con backend
  const agregarProducto = async (producto) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await carritoService.agregarItem(producto.id, 1);
        // Recargar carrito del backend
        const carrito = await carritoService.obtener();
        const items = carrito.items?.map(item => ({
          id: item.id,
          productoId: item.productoId,
          nombre: item.nombreProducto,
          precio: item.precioUnitario,
          cantidad: item.cantidad,
          imagenUrl: item.imagenUrl
        })) || [];

        const cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
        const total = items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

        dispatch({ type: 'CARGAR_CARRITO', items, cantidad, total, carritoId: carrito.id });
      } catch (error) {
        console.error('Error al agregar al carrito:', error);
        dispatch({ type: 'AGREGAR_PRODUCTO', producto });
      }
    } else {
      dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    }
  };

  const eliminarProducto = async (itemId) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await carritoService.eliminarItem(itemId);
        const carrito = await carritoService.obtener();
        const items = carrito.items?.map(item => ({
          id: item.id,
          productoId: item.productoId,
          nombre: item.nombreProducto,
          precio: item.precioUnitario,
          cantidad: item.cantidad,
          imagenUrl: item.imagenUrl
        })) || [];

        const cantidad = items.reduce((acc, item) => acc + item.cantidad, 0);
        const total = items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

        dispatch({ type: 'CARGAR_CARRITO', items, cantidad, total, carritoId: carrito.id });
      } catch (error) {
        console.error('Error al eliminar del carrito:', error);
        dispatch({ type: 'ELIMINAR_PRODUCTO', id: itemId });
      }
    } else {
      dispatch({ type: 'ELIMINAR_PRODUCTO', id: itemId });
    }
  };

  const actualizarCantidad = async (itemId, cantidad) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await carritoService.actualizarCantidad(itemId, cantidad);
        const carrito = await carritoService.obtener();
        const items = carrito.items?.map(item => ({
          id: item.id,
          productoId: item.productoId,
          nombre: item.nombreProducto,
          precio: item.precioUnitario,
          cantidad: item.cantidad,
          imagenUrl: item.imagenUrl
        })) || [];

        const cantidadTotal = items.reduce((acc, item) => acc + item.cantidad, 0);
        const total = items.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

        dispatch({ type: 'CARGAR_CARRITO', items, cantidad: cantidadTotal, total, carritoId: carrito.id });
      } catch (error) {
        console.error('Error al actualizar cantidad:', error);
        dispatch({ type: 'ACTUALIZAR_CANTIDAD', id: itemId, cantidad });
      }
    } else {
      dispatch({ type: 'ACTUALIZAR_CANTIDAD', id: itemId, cantidad });
    }
  };

  const vaciarCarrito = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await carritoService.vaciar();
        dispatch({ type: 'VACIAR_CARRITO' });
      } catch (error) {
        console.error('Error al vaciar carrito:', error);
        dispatch({ type: 'VACIAR_CARRITO' });
      }
    } else {
      dispatch({ type: 'VACIAR_CARRITO' });
    }
  };

  return (
    <CarritoContext.Provider value={{
      state,
      dispatch,
      agregarProducto,
      eliminarProducto,
      actualizarCantidad,
      vaciarCarrito
    }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  }
  return context;
};

export { carritoReducer };