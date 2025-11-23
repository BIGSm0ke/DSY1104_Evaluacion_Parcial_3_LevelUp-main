// src/components/CartItem.jsx
import React from 'react';

function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
  return (
    <article className="carrito-item" aria-label={`Producto en carrito: ${item.nombre}`}>
      <figure className="carrito-item-figure">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="carrito-item-img"
        />
      </figure>
      <div className="carrito-item-info">
        <h3 className="carrito-item-titulo">{item.nombre}</h3>
        <p className="carrito-item-codigo">
          Código: <span>{item.codigo}</span>
        </p>
      </div>
      <div className="carrito-item-cant-precio">
        <div
          className="cantidad-control"
          role="group"
          aria-label={`Modificar cantidad de ${item.nombre}`}
        >
          <button
            className="cantidad-btn"
            aria-label="Disminuir cantidad"
            onClick={() => onUpdateQuantity(item.id, item.cantidad - 1)}
            disabled={item.cantidad <= 1}
            tabIndex={0}
          >
            −
          </button>
          <span className="cantidad-text" aria-live="polite">
            {item.cantidad}
          </span>
          <button
            className="cantidad-btn"
            aria-label="Aumentar cantidad"
            onClick={() => onUpdateQuantity(item.id, item.cantidad + 1)}
            tabIndex={0}
          >
            +
          </button>
        </div>
        <p className="carrito-item-price">
          <strong>${(item.precio * item.cantidad).toLocaleString()} CLP</strong>
        </p>
      </div>

      <button
        className="btn-eliminar"
        onClick={() => onRemoveItem(item.id)}
        aria-label={`Eliminar ${item.nombre} del carrito`}
        title="Eliminar producto"
        tabIndex={0}
      >
        ×
      </button>
    </article>
  );
}

export default CartItem;
