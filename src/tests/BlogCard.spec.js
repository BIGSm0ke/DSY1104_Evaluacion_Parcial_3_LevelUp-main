import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogCard from '../components/BlogCard';

describe('BlogCard', function() {
  it('debería renderizar el título del blog', function() {
    const blog = {
      titulo: 'Test Blog',
      fecha: '2025-01-01',
      contenido: 'Contenido de prueba',
      enlace: 'https://example.com'
    };

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<BlogCard blog={blog} />, { container });

    expect(container.innerHTML).toContain('Test Blog');
    expect(container.innerHTML).toContain('2025-01-01');
    expect(container.innerHTML).toContain('Contenido de prueba');

    document.body.removeChild(container);
  });

  it('debería mostrar la imagen si está presente', function() {
    const blog = {
      titulo: 'Blog con imagen',
      fecha: '2025-01-01',
      contenido: 'Contenido',
      enlace: 'https://example.com',
      imagen: 'https://example.com/image.jpg'
    };

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<BlogCard blog={blog} />, { container });

    const img = container.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.src).toBe('https://example.com/image.jpg');

    document.body.removeChild(container);
  });

  it('no debería mostrar imagen si no está presente', function() {
    const blog = {
      titulo: 'Blog sin imagen',
      fecha: '2025-01-01',
      contenido: 'Contenido',
      enlace: 'https://example.com'
    };

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<BlogCard blog={blog} />, { container });

    const img = container.querySelector('img');
    expect(img).toBeFalsy();

    document.body.removeChild(container);
  });

  it('debería tener un enlace "Leer más"', function() {
    const blog = {
      titulo: 'Test Blog',
      fecha: '2025-01-01',
      contenido: 'Contenido',
      enlace: 'https://example.com/blog'
    };

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<BlogCard blog={blog} />, { container });

    const link = container.querySelector('a.btn-leer-mas');
    expect(link).toBeTruthy();
    expect(link.href).toBe('https://example.com/blog');
    expect(link.textContent).toContain('Leer más');

    document.body.removeChild(container);
  });
});
