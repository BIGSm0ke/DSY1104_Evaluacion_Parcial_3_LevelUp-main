import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', function() {
  it('debería renderizar el logo de la empresa', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<Footer />, { container });

    expect(container.innerHTML).toContain('Level-Up Gamer');

    document.body.removeChild(container);
  });

  it('debería mostrar enlaces rápidos', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<Footer />, { container });

    expect(container.innerHTML).toContain('Enlaces rápidos');
    expect(container.innerHTML).toContain('Inicio');
    expect(container.innerHTML).toContain('Catálogo');
    expect(container.innerHTML).toContain('Blog');

    document.body.removeChild(container);
  });

  it('debería mostrar sección de servicios', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<Footer />, { container });

    expect(container.innerHTML).toContain('Servicios');
    expect(container.innerHTML).toContain('Garantía');
    expect(container.innerHTML).toContain('Envíos');
    expect(container.innerHTML).toContain('Soporte técnico');

    document.body.removeChild(container);
  });

  it('debería mostrar información de contacto', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<Footer />, { container });

    expect(container.innerHTML).toContain('Contacto');
    expect(container.innerHTML).toContain('+56 9 1234 5678');
    expect(container.innerHTML).toContain('contacto@levelupgamer.cl');
    expect(container.innerHTML).toContain('Santiago, Chile');

    document.body.removeChild(container);
  });

  it('debería mostrar el copyright con el año actual', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<Footer />, { container });

    const currentYear = new Date().getFullYear();
    expect(container.innerHTML).toContain(currentYear.toString());
    expect(container.innerHTML).toContain('Todos los derechos reservados');

    document.body.removeChild(container);
  });

  it('debería tener enlaces a redes sociales', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<Footer />, { container });

    const socialLinks = container.querySelectorAll('.footer-social a');
    expect(socialLinks.length).toBe(4); // Facebook, Instagram, Twitter, YouTube

    document.body.removeChild(container);
  });
});
