import React from 'react';
import CarruselInicio from '../components/CarruselInicio';
import "../styles/Home.css";

function Home() {
  return (
    <div>
      {/* SOLO el título arriba */}
      <header className="bienvenida">
        <h1>
          Bienvenido a <span className="marca">Level-Up Gamer</span>
        </h1>
        <p>Tu tienda gamer favorita.</p>
      </header>

      {/* SOLO un carrusel debajo */}
      <CarruselInicio />

      {/* ... resto del contenido ... */}
    </div>
  );
}

export default Home;
