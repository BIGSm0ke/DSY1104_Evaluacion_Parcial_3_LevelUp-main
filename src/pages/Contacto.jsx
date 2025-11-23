// src/pages/Contacto.jsx
import React, { useState } from 'react';
import '../styles/Contacto.css';

function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Gracias por tu mensaje. Te responderemos en menos de 24 horas.');
    setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
  };

  // WhatsApp contacto
  const whatsappLink = "https://wa.me/56912345678?text=Hola!%20Necesito%20soporte%20técnico%20para%20LevelUp%20Gamer";

  return (
    <div className="contacto-container">
      <h1>Contáctanos</h1>
      <p>
        ¿Tienes dudas, sugerencias o necesitas soporte técnico? Escríbenos y un experto gamer te responderá personalmente.
      </p>

      <div className="contacto-grid">
        {/* Información */}
        <div className="contacto-info">
          <div className="contacto-info-item">
            <span>📞</span>
            <div>
              <strong>Teléfono</strong><br />
              +56 9 1234 5678
            </div>
          </div>
          
          <div className="contacto-info-item">
            <span>📧</span>
            <div>
              <strong>Correo</strong><br />
              <a href="mailto:contacto@levelupgamer.cl" style={{color:'#FFD700'}}>contacto@levelupgamer.cl</a>
            </div>
          </div>

          <div className="contacto-info-item">
            <span>📍</span>
            <div>
              <strong>Dirección</strong><br />
              Av. Gamer 1234, Santiago, Chile
            </div>
          </div>

          <div className="contacto-info-item">
            <span>🕒</span>
            <div>
              <strong>Horario de atención</strong><br />
              Lunes a Viernes: 9:00 - 18:00<br />
              Sábados: 10:00 - 14:00
            </div>
          </div>

          <div className="contacto-info-item">
            <span>🔗</span>
            <div>
              <strong>Síguenos en redes</strong>
              <div className="contacto-redes">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">▶️</a>
              </div>
            </div>
          </div>
          <div className="contacto-info-item">
            <span>💬</span>
            <div>
              <strong>Soporte técnico inmediato:</strong><br />
              <a className="btn-whatsapp" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="WhatsApp">🟢</span> Chatear por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form className="contacto-form" onSubmit={handleSubmit}>
          <h3>Envíanos un mensaje</h3>

          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre completo"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              placeholder="¿Sobre qué es tu mensaje?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Cuéntanos tu duda o sugerencia..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar">
            🚀 Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
