// src/components/CarruselInicio.jsx
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../styles/CarruselInicio.css';

import Banner1 from '../assets/Banner-1-1.png';
import Cougar from '../assets/BANNER-COUGAR1.png';
import MsiGpu from '../assets/msi-gpu.png';
import Razer from '../assets/razer.png';
import Logitec from '../assets/Logitec.png';

function CarruselInicio() {
  const bannerItems = [
    { src: Banner1, alt: 'ASUS RTX 5060', description: 'Recién llegadas ASUS Prime GeForce RTX 5060', cta: 'Comprar ahora' },
    { src: Cougar, alt: 'COUGAR', description: 'Las mejores ofertas COUGAR', cta: 'Ver productos' },
    { src: MsiGpu, alt: 'MSI GPU', description: 'Tecnología de punta para gamers', cta: 'Descubrir' },
    { src: Razer, alt: 'Razer', description: 'Equipos Razer originales', cta: 'Comprar ahora' },
    { src: Logitec, alt: 'Logitech', description: 'Infórmate de los nuevos equipos', cta: 'Comprar ahora' }
  ];

  return (
  <div className="carousel-custom">
    <Carousel>
      {bannerItems.map((item, idx) => (
        <Carousel.Item key={idx}>
          <img className="carousel-img" src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.alt}</h3>
            <p>{item.description}</p>
            <Button className="btn-gold cta-button">{item.cta}</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);
}

export default CarruselInicio;
