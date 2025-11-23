import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productos } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';
import OpinionesProducto from '../components/OpinionesProducto';
import ShareButton from '../components/ShareButton';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [toast, setToast] = useState({ show: false, nombre: '' });

  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCarrito();

  const producto = productos.find(p => String(p.id) === String(id));

  if (!producto) {
    return (
      <div className="detalle-container">
        <h2>Producto no encontrado 😓</h2>
        <button className="volver-btn" onClick={() => navigate(-1)}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  const formatearCategoria = cat =>
    cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());

  const mostrarToast = (nombreProducto) => {
    setToast({ show: true, nombre: nombreProducto });
    setTimeout(() => setToast({ show: false, nombre: '' }), 2000);
  };

  const agregarAlCarrito = () => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    mostrarToast(producto.nombre);
  };

  const comprarAhora = () => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    mostrarToast(producto.nombre);
    setTimeout(() => navigate('/carrito'), 800); // Pequeño delay para que se vea el toast
  };

  return (
    <div className="detalle-container">
      {toast.show && (
        <div className="toast-carrito">
          <span role="img" aria-label="carrito">🛒</span>
          <b>{toast.nombre}</b> agregado al carrito
        </div>
      )}
      <div className="detalle-tarjeta">
        <div className="detalle-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p><strong>Código:</strong> {producto.codigo}</p>
          <p><strong>Categoría:</strong> {formatearCategoria(producto.categoria)}</p>
          <p className="detalle-precio">${producto.precio.toLocaleString()} CLP</p>
          {producto.oferta && (
            <p className="detalle-oferta">🔥 ¡En oferta!</p>
          )}
          <p className="detalle-descripcion">{producto.descripcionProducto || producto.descripcion}</p>
          <div className="detalle-botones">
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button onClick={comprarAhora} className="comprar-btn">Comprar ahora</button>
            <button className="volver-btn" onClick={() => navigate(-1)}>Volver al catálogo</button>
          </div>
          {/* Share buttons para redes sociales */}
          <ShareButton producto={producto} />
        </div>
      </div>

      {/* Bloque aparte para opiniones */}
      <div className="opiniones-bloque">
        <OpinionesProducto productoId={producto.id} />
      </div>
    </div>
  );
}

export default ProductoDetalle;
