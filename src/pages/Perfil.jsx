// src/pages/Perfil.jsx
import React, { useState } from 'react';
import { productos } from '../data/productos';
import '../styles/Perfil.css';

// Utilidad para generar código de referido único
function generarCodigoReferido(email, actualCodigoReferido = '') {
  const nombre = email ? email.split('@')[0] : 'user';
  const random = actualCodigoReferido
    ? actualCodigoReferido.split('-').pop()
    : Math.floor(Math.random() * 10000);
  return `LVUP-${nombre}-${random}`;
}

function Perfil() {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
  // Nombre editable completo, usado tanto para mostrar como modificar
  const [nombreCompleto, setNombreCompleto] = useState(usuario.nombreCompleto || usuario.nombre || '');
  const primerNombre = nombreCompleto.trim().split(' ')[0] || usuario.nombre || '';
  const recomendaciones = productos.filter(p => p.categoria === 'accesorios');

  // Generar código si no existe
  if (!usuario.codigoReferido) {
    usuario.codigoReferido = generarCodigoReferido(usuario.email);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  // SUMATORIA de puntos: base+referidos (lee todos los usuarios en localStorage)
  let sumatoriaReferidos = 0;
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const referidosRecibidos = usuarios.filter(
    u => u.codigoReferidoUsado === usuario.codigoReferido
  );
  sumatoriaReferidos = referidosRecibidos.length * 100;
  const puntosTotales = (usuario.puntos || 100) + sumatoriaReferidos;

  const guardarPerfil = () => {
    const usuarioActualizado = { ...usuario,
      nombre: primerNombre,
      nombreCompleto,
    };
    localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
    alert('Perfil actualizado');
    // Puede agregarse: window.location.reload() si quieres recargar todo
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div>
          <h2 className="perfil-titulo">¡Hola, {primerNombre}!</h2>
          <p className="perfil-descripcion">
            Gestiona tu información y descubre recomendaciones
          </p>
        </div>
        <div className="perfil-avatar">
          {primerNombre?.charAt(0).toUpperCase() ||
            usuario.email?.charAt(0).toUpperCase()}
        </div>
      </div>

      <div className="perfil-main">
        <div className="perfil-personal-info">
          <h3 className="perfil-subtitulo">Información Personal</h3>
          <div className="perfil-form-group">
            <label className="perfil-label">Nombre completo</label>
            <input
              value={nombreCompleto}
              onChange={e => setNombreCompleto(e.target.value)}
              placeholder="Tu nombre completo"
              className="perfil-input"
            />
          </div>
          <p>
            <strong>Correo:</strong> {usuario.email}
          </p>
          <p>
            <strong>Puntos Base:</strong>{' '}
            <span className="perfil-puntos">{usuario.puntos || 100}</span>
          </p>
          <p>
            <strong>Puntos ganados por referidos:</strong>{' '}
            <span className="perfil-puntos">{sumatoriaReferidos}</span>
          </p>
          <p>
            <strong>Puntos Totales:</strong>{' '}
            <span className="perfil-puntos">{puntosTotales}</span>
          </p>
          <p>
            <strong>Nivel:</strong> {usuario.nivel || 'Bronce'}
          </p>
          <p>
            <strong>Descuento:</strong> {usuario.descuento || 0}%
          </p>
          <p>
            <strong>Tu código de referido:</strong>{' '}
            <span style={{ color: '#39FF14' }}>
              {usuario.codigoReferido}
            </span>
          </p>
          <button onClick={guardarPerfil} className="perfil-btn">
            Guardar Cambios
          </button>
        </div>

        <div className="perfil-recomendaciones">
          <h3 className="perfil-subtitulo">Recomendaciones para ti</h3>
          <div className="recomendaciones-grid">
            {recomendaciones.slice(0, 4).map(p => (
              <div key={p.id} className="recomendacion-card">
                <div className="recomendacion-img">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="recomendacion-foto"
                  />
                </div>
                <div className="recomendacion-datos">
                  <h4 className="recomendacion-nombre">{p.nombre}</h4>
                  <p className="recomendacion-precio">
                    ${p.precio.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
