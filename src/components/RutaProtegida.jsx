// src/components/RutaProtegida.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RutaProtegida({ children, requiereAdmin = false, requiereModerador = false }) {
  const { estaAutenticado, esAdmin, esModerador, cargando } = useAuth();

  // Mostrar nada mientras carga la autenticación
  if (cargando) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        color: '#FFD700'
      }}>
        Cargando...
      </div>
    );
  }

  // Si no está autenticado, redirigir al login
  if (!estaAutenticado()) {
    return <Navigate to="/login" replace />;
  }

  // Si requiere admin y no es admin, redirigir
  if (requiereAdmin && !esAdmin()) {
    return <Navigate to="/" replace />;
  }

  // Si requiere moderador y no es moderador ni admin, redirigir
  if (requiereModerador && !esModerador() && !esAdmin()) {
    return <Navigate to="/" replace />;
  }

  // Si pasa todas las validaciones, mostrar el contenido
  return children;
}

export default RutaProtegida;
