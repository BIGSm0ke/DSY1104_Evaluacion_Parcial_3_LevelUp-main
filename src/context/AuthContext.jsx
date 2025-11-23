import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const tokenGuardado = localStorage.getItem('token');
    const usuarioGuardado = localStorage.getItem('usuario');

    if (tokenGuardado && usuarioGuardado) {
      setToken(tokenGuardado);
      setUsuario(JSON.parse(usuarioGuardado));
    }
    setCargando(false);
  }, []);

  // Iniciar sesión
  const login = async (nombreUsuario, password) => {
    try {
      const respuesta = await authService.login(nombreUsuario, password);

      // Guardar token y usuario
      localStorage.setItem('token', respuesta.token);
      localStorage.setItem('usuario', JSON.stringify({
        id: respuesta.id,
        nombreUsuario: respuesta.nombreUsuario,
        email: respuesta.email,
        roles: respuesta.roles,
      }));

      setToken(respuesta.token);
      setUsuario({
        id: respuesta.id,
        nombreUsuario: respuesta.nombreUsuario,
        email: respuesta.email,
        roles: respuesta.roles,
      });

      return { success: true };
    } catch (error) {
      console.error('Error en login:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Error al iniciar sesión',
      };
    }
  };

  // Registrar nuevo usuario
  const registro = async (datosUsuario) => {
    try {
      await authService.registro(datosUsuario);
      return { success: true };
    } catch (error) {
      console.error('Error en registro:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Error al registrar usuario',
      };
    }
  };

  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('carrito');
    setToken(null);
    setUsuario(null);
  };

  // Verificar si el usuario tiene un rol específico
  const tieneRol = (rol) => {
    if (!usuario || !usuario.roles) return false;
    return usuario.roles.includes(rol);
  };

  // Verificar si es admin
  const esAdmin = () => tieneRol('ROL_ADMIN');

  // Verificar si es moderador
  const esModerador = () => tieneRol('ROL_MODERADOR');

  // Verificar si está autenticado
  const estaAutenticado = () => !!token;

  const value = {
    usuario,
    token,
    cargando,
    login,
    registro,
    logout,
    tieneRol,
    esAdmin,
    esModerador,
    estaAutenticado,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
