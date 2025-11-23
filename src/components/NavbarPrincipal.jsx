// src/components/NavbarPrincipal.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';
import '../styles/NavbarPrincipal.css';

function NavbarPrincipal() {
  const { state } = useCarrito();
  const { usuario, logout, esAdmin } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setDropdownOpen(false);
  };

  const primerNombre = usuario
    ? usuario.nombreUsuario || usuario.email?.split('@')[0]
    : '';

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        Level-Up Gamer
      </NavLink>

      <div className="navbar-links">
        <NavLink
          to="/catalogo"
          className={({ isActive }) =>
            "navbar-link" + (isActive ? " navbar-link-active" : "")
          }
        >
          Catálogo
        </NavLink>
        <NavLink
          to="/eventos"
          className={({ isActive }) =>
            "navbar-link" + (isActive ? " navbar-link-active" : "")
          }
        >
          Eventos
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            "navbar-link" + (isActive ? " navbar-link-active" : "")
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            "navbar-link" + (isActive ? " navbar-link-active" : "")
          }
        >
          Contacto
        </NavLink>
      </div>

      <div className="navbar-divider"></div>

      <div className="navbar-user">
        {usuario ? (
          <div
            className="navbar-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Cambiado a NavLink para ir directo al perfil al clickear el nombre */}
            <NavLink
              to="/perfil"
              className="navbar-username"
              style={{ textDecoration: 'none' }}
            >
              👤 {primerNombre}
            </NavLink>
            {dropdownOpen && (
              <div className="navbar-dropdown-content">
                <NavLink to="/perfil" className="dropdown-item">
                  Mi perfil
                </NavLink>
                <NavLink to="/pedidos" className="dropdown-item">
                  Mis pedidos
                </NavLink>
                {esAdmin() && (
                  <NavLink to="/admin/productos" className="dropdown-item" style={{ color: '#FFD700' }}>
                    Admin Productos
                  </NavLink>
                )}
                <button
                  onClick={handleLogout}
                  className="dropdown-item btn-logout"
                >
                  Salir
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/login" className="navbar-login-link">
              Ingresar
            </NavLink>
            <NavLink to="/registro" className="navbar-login-link">
              Registro
            </NavLink>
          </>
        )}

        <NavLink to="/carrito" className="navbar-cart">
          🛒 Carrito
          {state.cantidad > 0 && (
            <span className="navbar-cart-count">{state.cantidad}</span>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

export default NavbarPrincipal;
