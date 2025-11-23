// src/pages/Registro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Registro.css';

function Registro() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();
  const { registro } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validar contraseña
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Validar nombre de usuario
    if (nombreUsuario.length < 3) {
      setError("El nombre de usuario debe tener al menos 3 caracteres");
      return;
    }

    setCargando(true);

    const resultado = await registro({
      nombreUsuario,
      email,
      password,
      nombre,
      apellido
    });

    if (resultado.success) {
      alert("Registro exitoso. Ahora puedes iniciar sesion.");
      navigate('/login');
    } else {
      setError(resultado.error || 'Error al registrar usuario');
    }

    setCargando(false);
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Crear Cuenta Gamer</h2>
      {error && (
        <div style={{
          background: '#ff4444',
          color: 'white',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="registro-form">
        {/* Nombre de usuario */}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
          className="registro-input"
        />

        {/* Nombre */}
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="registro-input"
        />

        {/* Apellido */}
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          className="registro-input"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Correo electronico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="registro-input"
        />

        {/* Contraseña */}
        <input
          type="password"
          placeholder="Contraseña (min. 6 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="registro-input"
        />

        <button type="submit" className="registro-btn" disabled={cargando}>
          {cargando ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
      <p className="registro-terminos">
        Al registrarte, aceptas nuestros <a href="#">Terminos</a> y <a href="#">Politica de Privacidad</a>.
      </p>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>
        <span
          onClick={() => navigate('/login')}
          style={{ color: '#FFD700', cursor: 'pointer' }}
        >
          Ya tengo cuenta, iniciar sesion
        </span>
      </p>
    </div>
  );
}

export default Registro;
