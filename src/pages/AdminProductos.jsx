// src/pages/AdminProductos.jsx
import React, { useState, useEffect } from 'react';
import { productosService } from '../services/api';
import '../styles/AdminProductos.css';

function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);
  const [formulario, setFormulario] = useState({
    codigo: '',
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    stock: '',
    imagenUrl: '',
    enOferta: false,
    descuento: ''
  });

  // Cargar productos al montar
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setCargando(true);
      const data = await productosService.obtenerTodos();
      setProductos(data);
      setError('');
    } catch (err) {
      setError('Error al cargar productos');
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const limpiarFormulario = () => {
    setFormulario({
      codigo: '',
      nombre: '',
      descripcion: '',
      precio: '',
      categoria: '',
      stock: '',
      imagenUrl: '',
      enOferta: false,
      descuento: ''
    });
    setProductoEditando(null);
    setMostrarFormulario(false);
  };

  const handleEditar = (producto) => {
    setFormulario({
      codigo: producto.codigo || '',
      nombre: producto.nombre || '',
      descripcion: producto.descripcion || '',
      precio: producto.precio?.toString() || '',
      categoria: producto.categoria || '',
      stock: producto.stock?.toString() || '',
      imagenUrl: producto.imagenUrl || '',
      enOferta: producto.enOferta || false,
      descuento: producto.descuento?.toString() || ''
    });
    setProductoEditando(producto);
    setMostrarFormulario(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const datosProducto = {
      codigo: formulario.codigo,
      nombre: formulario.nombre,
      descripcion: formulario.descripcion,
      precio: parseFloat(formulario.precio),
      categoria: formulario.categoria,
      stock: parseInt(formulario.stock),
      imagenUrl: formulario.imagenUrl,
      enOferta: formulario.enOferta,
      descuento: formulario.enOferta ? parseFloat(formulario.descuento) : 0
    };

    try {
      if (productoEditando) {
        await productosService.actualizar(productoEditando.id, datosProducto);
      } else {
        await productosService.crear(datosProducto);
      }
      await cargarProductos();
      limpiarFormulario();
    } catch (err) {
      setError(err.response?.data?.message || 'Error al guardar producto');
      console.error(err);
    }
  };

  const handleEliminar = async (id) => {
    if (!window.confirm('¿Estás seguro de eliminar este producto?')) {
      return;
    }

    try {
      await productosService.eliminar(id);
      await cargarProductos();
    } catch (err) {
      setError('Error al eliminar producto');
      console.error(err);
    }
  };

  if (cargando) {
    return (
      <div className="admin-container">
        <div className="admin-loading">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Administración de Productos</h1>
        <button
          className="btn-nuevo"
          onClick={() => {
            limpiarFormulario();
            setMostrarFormulario(true);
          }}
        >
          + Nuevo Producto
        </button>
      </div>

      {error && (
        <div className="admin-error">{error}</div>
      )}

      {mostrarFormulario && (
        <div className="formulario-modal">
          <div className="formulario-contenido">
            <h2>{productoEditando ? 'Editar Producto' : 'Nuevo Producto'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grupo">
                <label>Código *</label>
                <input
                  type="text"
                  name="codigo"
                  value={formulario.codigo}
                  onChange={handleInputChange}
                  placeholder="Ej: MOUSE-001"
                  required
                />
              </div>

              <div className="form-grupo">
                <label>Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-grupo">
                <label>Descripción</label>
                <textarea
                  name="descripcion"
                  value={formulario.descripcion}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>

              <div className="form-fila">
                <div className="form-grupo">
                  <label>Precio *</label>
                  <input
                    type="number"
                    name="precio"
                    value={formulario.precio}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    required
                  />
                </div>

                <div className="form-grupo">
                  <label>Stock *</label>
                  <input
                    type="number"
                    name="stock"
                    value={formulario.stock}
                    onChange={handleInputChange}
                    min="0"
                    required
                  />
                </div>
              </div>

              <div className="form-grupo">
                <label>Categoría *</label>
                <select
                  name="categoria"
                  value={formulario.categoria}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="mouse">Mouse</option>
                  <option value="mousepad">Mousepad</option>
                  <option value="accesorios">Accesorios</option>
                  <option value="sillas-gamers">Sillas Gamers</option>
                  <option value="perifericos-streaming">Periféricos Streaming</option>
                  <option value="juegos-mesa">Juegos de Mesa</option>
                  <option value="consolas">Consolas</option>
                  <option value="computadores-gamers">Computadores Gamers</option>
                  <option value="poleras-personalizadas">Poleras Personalizadas</option>
                  <option value="polerones-gamers">Polerones Gamers</option>
                  <option value="iluminacion-rgb">Iluminación RGB</option>
                </select>
              </div>

              <div className="form-grupo">
                <label>URL de Imagen</label>
                <input
                  type="text"
                  name="imagenUrl"
                  value={formulario.imagenUrl}
                  onChange={handleInputChange}
                  placeholder="/assets/images/producto.png"
                />
                <small>Ruta relativa desde public, ej: /assets/images/producto.png</small>
              </div>

              <div className="form-grupo checkbox-grupo">
                <label>
                  <input
                    type="checkbox"
                    name="enOferta"
                    checked={formulario.enOferta}
                    onChange={handleInputChange}
                  />
                  En oferta
                </label>
              </div>

              {formulario.enOferta && (
                <div className="form-grupo">
                  <label>Descuento (%)</label>
                  <input
                    type="number"
                    name="descuento"
                    value={formulario.descuento}
                    onChange={handleInputChange}
                    min="0"
                    max="100"
                  />
                </div>
              )}

              <div className="form-acciones">
                <button type="button" onClick={limpiarFormulario} className="btn-cancelar">
                  Cancelar
                </button>
                <button type="submit" className="btn-guardar">
                  {productoEditando ? 'Actualizar' : 'Crear'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="productos-tabla">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Oferta</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(producto => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>
                  {producto.imagenUrl && (
                    <img
                      src={producto.imagenUrl}
                      alt={producto.nombre}
                      className="producto-miniatura"
                    />
                  )}
                </td>
                <td>{producto.nombre}</td>
                <td>{producto.categoria}</td>
                <td>${producto.precio?.toLocaleString()}</td>
                <td>{producto.stock}</td>
                <td>
                  {producto.enOferta ? (
                    <span className="oferta-badge">{producto.descuento}%</span>
                  ) : '-'}
                </td>
                <td>
                        <button
                          onClick={() => handleEditar(producto)} // <-- Vinculado a la función de edición
                          className="btn-editar">
                          Editar
                        </button></td>
                <td>
                        <button
                          onClick={() => handleEliminar(producto.id)} // <-- Vinculado a la función de eliminación
                          className='btneliminar'>
                          Eliminar
                        </button></td>
                    
                
              </tr>
            ))}
          </tbody>
        </table>

        {productos.length === 0 && (
          <div className="sin-productos">
            No hay productos registrados
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminProductos;
