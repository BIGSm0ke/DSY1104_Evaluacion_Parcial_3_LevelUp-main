import React from 'react';

function SoporteChat() {
  const abrirWhatsApp = () => {
    const numero = '+56912345678'; // Cambia por tu número real
    const mensaje = 'Hola, necesito soporte técnico con mi producto.';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000
    }}>
      <button 
        onClick={abrirWhatsApp}
        className="btn"
        style={{
          padding: '1rem 2rem',
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        💬 Soporte Técnico
      </button>
    </div>
  );
}
export default SoporteChat;
