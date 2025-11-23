// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-logo">Level-Up Gamer</div>
          <p>Tu tienda de confianza para gamers. Equipos, periféricos y tecnología de punta al mejor precio.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>

        <div>
          <h4>Enlaces rápidos</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/catalogo">Catálogo</a></li>
            <li><a href="/ofertas">Ofertas</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4>Servicios</h4>
          <ul className="footer-links">
            <li><a href="/garantia">Garantía</a></li>
            <li><a href="/envios">Envíos</a></li>
            <li><a href="/devoluciones">Devoluciones</a></li>
            <li><a href="/soporte">Soporte técnico</a></li>
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <p>📞 +56 9 1234 5678<br />
             📧 contacto@levelupgamer.cl<br />
             📍 Santiago, Chile</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Level-Up Gamer. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
