import React, { useState, useEffect } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import { productosService } from '../services/api';
import '../styles/Catalogo.css';

function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(3000000);
  const [toast, setToast] = useState({ show: false, nombre: '' });
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  const carrito = useCarrito();
  const navigate = useNavigate();

  // Carga productos desde el backend al montar el componente
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setCargando(true);
        const data = await productosService.obtenerTodos();
        setProductos(data);
        setError('');
      } catch (err) {
        const mensajeError = err.response?.data?.message || err.message || 'Error al cargar productos';
        setError(mensajeError);
        console.error('Error cargando productos:', err);
      } finally {
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  const agregarAlCarrito = async (producto) => {
    if (carrito.agregarProducto) {
      await carrito.agregarProducto(producto);
    } else {
      // Fallback al dispatch si agregarProducto no está disponible
      carrito.dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    }
    setToast({ show: true, nombre: producto.nombre });
    setTimeout(() => setToast({ show: false, nombre: '' }), 2000);
  };

  const toggleCategoria = (categoria) => {
    setCategoriasSeleccionadas(prev =>
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    );
  };

  const categorias = [
    'juegos-mesa',
    'accesorios',
    'consolas',
    'computadores-gamers',
    'sillas-gamers',
    'mouse',
    'mousepad',
    'poleras-personalizadas',
    'polerones-gamers',
    'perifericos-streaming',
    'iluminacion-rgb'
  ];

  const formatearCategoria = (categoria) => {
    return categoria.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(p.categoria)) &&
    p.precio >= precioMin && p.precio <= precioMax
  );

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoriasSeleccionadas([]);
    setPrecioMin(0);
    setPrecioMax(3000000);
  };

  if (cargando) {
    return (
      <div className="catalogo-container">
        <div style={{ textAlign: 'center', padding: '3rem', color: '#FFD700' }}>
          Cargando productos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="catalogo-container">
        <div style={{ textAlign: 'center', padding: '3rem', color: '#ff4444' }}>
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="catalogo-container">
      <h2>Catálogo de Productos</h2>

      {toast.show && (
        <div className="toast-carrito">
          <span role="img" aria-label="carrito">🛒</span>
          <b>{toast.nombre}</b> agregado al carrito
        </div>
      )}

      <div className="catalogo-layout">
        <aside className="filtros-lateral">
          <div className="filtro-seccion">
            <h4>🔍 Búsqueda</h4>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="filtro-input"
            />
          </div>
          <div className="filtro-seccion">
            <h4>💰 Rango de Precios</h4>
            <div className="filtro-precio-avanzado">
              <div className="precio-inputs">
                <div className="precio-campo">
                  <label>Mínimo</label>
                  <input
                    type="number"
                    value={precioMin}
                    onChange={(e) => setPrecioMin(Number(e.target.value))}
                    className="precio-input"
                    min="0"
                    max={precioMax}
                  />
                </div>
                <div className="precio-campo">
                  <label>Máximo</label>
                  <input
                    type="number"
                    value={precioMax}
                    onChange={(e) => setPrecioMax(Number(e.target.value))}
                    className="precio-input"
                    min={precioMin}
                    max="3000000"
                  />
                </div>
              </div>
              <div className="precio-display">
                <span>${Number(precioMin).toLocaleString()} - ${Number(precioMax).toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="filtro-seccion">
            <h4>📂 Categorías</h4>
            <div className="categorias-checkboxes">
              {categorias.map(categoria => (
                <label key={categoria} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={categoriasSeleccionadas.includes(categoria)}
                    onChange={() => toggleCategoria(categoria)}
                    className="checkbox-categoria"
                  />
                  <span className="checkmark"></span>
                  {formatearCategoria(categoria)}
                </label>
              ))}
            </div>
          </div>
          <button onClick={limpiarFiltros} className="limpiar-filtros">
            🗑️ Limpiar filtros
          </button>
          <div className="contador-resultados">
            {productosFiltrados.length} productos encontrados
          </div>
        </aside>
        <section className="catalogo-grid">
          {productosFiltrados.length === 0 ? (
            <div className="sin-resultados">
              <p>😓 No se encontraron productos con esos filtros.</p>
            </div>
          ) : (
            productosFiltrados.map(p => (
              <div
                key={p.id}
                className="producto-card"
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/producto/${p.id}`)}
              >
                <div className="producto-imagen">
                  <img src={p.imagenUrl || p.imagen || '/assets/images/default.png'} alt={p.nombre} />
                </div>
                <div className="producto-info">
                  <h3>{p.nombre}</h3>
                  <p>{p.descripcion}</p>
                  <p className="producto-precio">${p.precio?.toLocaleString()} CLP</p>
                  {(p.oferta || p.enOferta) && <p className="producto-oferta">🔥 ¡En oferta! {p.descuento}% OFF</p>}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      agregarAlCarrito(p);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default Catalogo;