import React, { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import CartItem from '../components/CartItem';
import '../styles/Carrito.css';

const CarritoPage = () => {
  const { state, dispatch } = useCarrito();
  const [showPago, setShowPago] = useState(false);

  const handleUpdateQuantity = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', id, cantidad: nuevaCantidad });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', id });
  };

  const handleClearCart = () => {
    if (
      window.confirm('¿Estás seguro de vaciar el carrito? Esta acción no se puede deshacer.')
    ) {
      dispatch({ type: 'VACIAR_CARRITO' });
    }
  };

  const handlePagar = () => {
    setShowPago(true);
    setTimeout(() => setShowPago(false), 2300);
    // Agrega aquí dispatch({ type: 'VACIAR_CARRITO' }) si quieres vaciarlo tras "pago".
    // O navega a otra página si deseas.
  };

  if (state.items.length === 0) {
    return (
      <main className="carrito-vacio" aria-label="Carrito vacío">
        <div>🛒</div>
        <h2>Carrito vacío</h2>
        <p>Aún no has agregado productos a tu carrito.</p>
      </main>
    );
  }

  return (
    <main className="carrito-container">
      <h1>Tu Carrito de Compras</h1>
      <div className="carrito-layout">
        <section className="carrito-lista">
          {state.items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          ))}
        </section>
        <aside className="carrito-resumen">
          <h2>Resumen de compra</h2>
          <div>Productos en carrito: <strong>{state.cantidad}</strong></div>
          <div className="total-precio">
            Total a pagar: ${(state.total).toLocaleString()} CLP
          </div>
          <button className="btn-vaciar" onClick={handleClearCart}>
            Vaciar carrito
          </button>
          <button className="btn-comprar" onClick={handlePagar}>
            Proceder al pago
          </button>
        </aside>
      </div>
      {showPago && (
        <div className="toast-pago-exito">
          <span role="img" aria-label="pago">✅</span>
          <b>¡Pago Simulado!</b> Tu pedido ha sido procesado exitosamente.<br />
          Gracias por tu compra gamer.
        </div>
      )}
    </main>
  );
};

export default CarritoPage;
