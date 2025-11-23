import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CarritoProvider } from '../context/CarritoContext';
import ProductCard from '../components/ProductCard';

describe('ProductCard', function() {
  var mockProducto;
  var mockOnNotificacion;
  var mockOnClickDetalle;

  beforeEach(function() {
    mockProducto = {
      id: 1,
      nombre: 'Teclado Mecánico',
      descripcion: 'Teclado gaming RGB',
      precio: 50000,
      imagen: 'teclado.jpg'
    };
    mockOnNotificacion = jasmine.createSpy('onNotificacion');
    mockOnClickDetalle = jasmine.createSpy('onClickDetalle');
  });

  it('debería renderizar la información del producto', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CarritoProvider>
        <ProductCard
          producto={mockProducto}
          onNotificacion={mockOnNotificacion}
          onClickDetalle={mockOnClickDetalle}
        />
      </CarritoProvider>,
      { container }
    );

    expect(container.innerHTML).toContain('Teclado Mecánico');
    expect(container.innerHTML).toContain('Teclado gaming RGB');
    expect(container.innerHTML).toContain('50,000');

    document.body.removeChild(container);
  });

  it('debería mostrar etiqueta de oferta si el producto está en oferta', function() {
    mockProducto.oferta = true;
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CarritoProvider>
        <ProductCard
          producto={mockProducto}
          onNotificacion={mockOnNotificacion}
          onClickDetalle={mockOnClickDetalle}
        />
      </CarritoProvider>,
      { container }
    );

    expect(container.innerHTML).toContain('¡EN OFERTA!');

    document.body.removeChild(container);
  });

  it('debería mostrar precio original si el producto está en oferta', function() {
    mockProducto.oferta = true;
    mockProducto.precioOriginal = 70000;
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CarritoProvider>
        <ProductCard
          producto={mockProducto}
          onNotificacion={mockOnNotificacion}
          onClickDetalle={mockOnClickDetalle}
        />
      </CarritoProvider>,
      { container }
    );

    expect(container.innerHTML).toContain('70,000');

    document.body.removeChild(container);
  });

  it('debería mostrar descuento si está disponible', function() {
    mockProducto.oferta = true;
    mockProducto.descuento = 30;
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CarritoProvider>
        <ProductCard
          producto={mockProducto}
          onNotificacion={mockOnNotificacion}
          onClickDetalle={mockOnClickDetalle}
        />
      </CarritoProvider>,
      { container }
    );

    expect(container.innerHTML).toContain('30% OFF');

    document.body.removeChild(container);
  });

  it('debería llamar onClickDetalle al hacer click en la tarjeta', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CarritoProvider>
        <ProductCard
          producto={mockProducto}
          onNotificacion={mockOnNotificacion}
          onClickDetalle={mockOnClickDetalle}
        />
      </CarritoProvider>,
      { container }
    );

    const card = container.querySelector('.producto-card');
    fireEvent.click(card);

    expect(mockOnClickDetalle).toHaveBeenCalledWith(mockProducto);

    document.body.removeChild(container);
  });

  it('debería agregar producto al carrito y mostrar notificación', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CarritoProvider>
        <ProductCard
          producto={mockProducto}
          onNotificacion={mockOnNotificacion}
          onClickDetalle={mockOnClickDetalle}
        />
      </CarritoProvider>,
      { container }
    );

    const addButton = container.querySelector('button');
    fireEvent.click(addButton);

    expect(mockOnNotificacion).toHaveBeenCalledWith('Teclado Mecánico agregado al carrito');

    document.body.removeChild(container);
  });

  it('no debería llamar onClickDetalle si no se proporciona', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CarritoProvider>
        <ProductCard
          producto={mockProducto}
          onNotificacion={mockOnNotificacion}
        />
      </CarritoProvider>,
      { container }
    );

    const card = container.querySelector('.producto-card');
    fireEvent.click(card);

    // No debería lanzar error
    expect(true).toBe(true);

    document.body.removeChild(container);
  });
});
