import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

function Login() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);

    const resultado = await login(nombreUsuario, password);

    if (resultado.success) {
      navigate('/perfil');
    } else {
      setError(resultado.error || 'Error al iniciar sesion');
    }

    setCargando(false);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <p style={{ textAlign:'center', color:'#D3D3D3', marginBottom:'1.8rem', fontSize:'1.08rem'}}>
        Ingresa tu correo y contraseña para acceder a <span style={{color:'#FFD700', fontWeight:700}}>Level Up Gamer</span>
      </p>
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
      <form onSubmit={handleSubmit} className="login-form">
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            left: 12,
            top: 13,
            color: '#9D4EDD',
            fontSize: '1.38em'
          }}>👤</span>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
            className="login-input"
            style={{ paddingLeft: '2.4em' }}
            autoFocus
          />
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            left: 12,
            top: 13,
            color: '#FFD700',
            fontSize: '1.38em'
          }}>🔒</span>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            style={{ paddingLeft: '2.4em' }}
          />
        </div>
        <button
          type="submit"
          className="login-btn"
          disabled={cargando}
        >
          {cargando ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
      <p className="login-registro">
        ¿No tienes cuenta? <span
          onClick={() => navigate('/registro')}
          className="login-link"
          tabIndex={0}
        >
          Registrate
        </span>
      </p>
    </div>
  );
}

export default Login;
