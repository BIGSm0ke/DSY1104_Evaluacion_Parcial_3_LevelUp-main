import React from 'react';
import { useCarrito } from '../context/CarritoContext';

function ProductCard({ producto, onNotificacion, onClickDetalle }) {
  const { dispatch } = useCarrito();

  const handleCardClick = onClickDetalle
    ? () => onClickDetalle(producto)
    : () => {};

  const agregarAlCarrito = (e) => {
    e.stopPropagation();
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    if (onNotificacion) onNotificacion(`${producto.nombre} agregado al carrito`);
  };

  return (
    <div
      className="producto-card"
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {producto.oferta && (
        <div className="etiqueta-oferta">¡EN OFERTA!</div>
      )}
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="producto-info">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        {producto.oferta && producto.precioOriginal && (
          <p className="precio-original">${producto.precioOriginal.toLocaleString()} CLP</p>
        )}
        <p className="precio-oferta">
          ${producto.precio.toLocaleString()} CLP
        </p>
        {producto.descuento && producto.oferta && (
          <p className="descuento">{producto.descuento}% OFF</p>
        )}
        <button onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
