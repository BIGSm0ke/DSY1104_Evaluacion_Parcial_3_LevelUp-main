import React from 'react';
import '../styles/ModalProducto.css';

function ModalProducto({ producto, onClose }) {
  const tieneEspecificaciones = producto.especificaciones && Object.keys(producto.especificaciones).length > 0;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <img src={producto.imagen} alt={producto.nombre} className="modal-imagen" />
        </div>

        <div className="modal-body">
          <h2>{producto.nombre}</h2>
          <p className="modal-categoria">
            {producto.categoria.replace('-', ' ').toUpperCase()}
          </p>

          <p className="modal-descripcion">
            {producto.descripcion}
          </p>

          <div className="modal-precios">
            {producto.precioOriginal && (
              <p className="precio-original">
                ${producto.precioOriginal.toLocaleString()} CLP
              </p>
            )}
            <p className="precio-oferta">
              ${producto.precio.toLocaleString()} CLP
            </p>
          </div>

          {producto.oferta && (
            <div className="etiqueta-oferta">
              🔥 ¡EN OFERTA! {producto.descuento || 30}% OFF
            </div>
          )}

          {tieneEspecificaciones && (
            <div className="modal-especificaciones">
              <h3>Especificaciones</h3>
              <table className="tabla-especs">
                <tbody>
                  {Object.entries(producto.especificaciones).map(([clave, valor]) => (
                    <tr key={clave}>
                      <td className="clave">{clave}</td>
                      <td className="valor">{valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button
            className="btn-agregar"
            onClick={e => {
              e.stopPropagation();
              alert(`🛒 ${producto.nombre} agregado al carrito`);
            }}
          >
            🛒 Agregar al carrito
          </button>
          <button className="btn-cerrar" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProducto;
