import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import OpinionesProducto from '../components/OpinionesProducto';
import ShareButton from '../components/ShareButton';
import { productosService } from '../services/api';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCarrito();

  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ show: false, nombre: '' });

  useEffect(() => {
    window.scrollTo(0, 0);

    const cargarProducto = async () => {
      try {
        setCargando(true);
        const data = await productosService.obtenerPorId(id);
        setProducto(data);
        setError(null);
      } catch (err) {
        console.error('Error al cargar el producto:', err);
        setError('Producto no encontrado o error al cargar los datos.');
        setProducto(null);
      } finally {
        setCargando(false);
      }
    };

    cargarProducto();
  }, [id]);

  const formatearCategoria = (cat) =>
    cat.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase());

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
    setTimeout(() => navigate('/carrito'), 800);
  };

  if (cargando) {
    return (
      <div className="detalle-container">
        <h2 style={{ color: '#FFD700' }}>Cargando detalles del producto...</h2>
      </div>
    );
  }

  if (error || !producto) {
    return (
      <div className="detalle-container">
        <h2>Producto no encontrado 😓</h2>
        <p style={{ color: '#ff4444' }}>{error}</p>
        <button className="volver-btn" onClick={() => navigate(-1)}>
          Volver al catálogo
        </button>
      </div>
    );
  }

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

          <p className="detalle-descripcion">
            {producto.descripcionProducto || producto.descripcion}
          </p>

          <div className="detalle-botones">
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button onClick={comprarAhora} className="comprar-btn">Comprar ahora</button>
            <button className="volver-btn" onClick={() => navigate(-1)}>Volver al catálogo</button>
          </div>

          <ShareButton producto={producto} />
        </div>
      </div>

      <div className="opiniones-bloque">
        <OpinionesProducto productoId={producto.id} />
      </div>
    </div>
  );
}

export default ProductoDetalle;
