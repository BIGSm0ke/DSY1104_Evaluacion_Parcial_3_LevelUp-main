import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CartItem from '../components/CartItem';

describe('CartItem', function() {
  var mockItem;
  var mockUpdateQuantity;
  var mockRemoveItem;

  beforeEach(function() {
    mockItem = {
      id: 1,
      nombre: 'Producto Test',
      codigo: 'TEST123',
      imagen: 'test.jpg',
      precio: 10000,
      cantidad: 2
    };
    mockUpdateQuantity = jasmine.createSpy('updateQuantity');
    mockRemoveItem = jasmine.createSpy('removeItem');
  });

  it('debería renderizar la información del producto', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CartItem
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemoveItem={mockRemoveItem}
      />,
      { container }
    );

    expect(container.innerHTML).toContain('Producto Test');
    expect(container.innerHTML).toContain('TEST123');
    expect(container.innerHTML).toContain('2');

    document.body.removeChild(container);
  });

  it('debería calcular el precio total correctamente', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CartItem
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemoveItem={mockRemoveItem}
      />,
      { container }
    );

    // 10000 * 2 = 20000
    expect(container.innerHTML).toContain('20,000');

    document.body.removeChild(container);
  });

  it('debería llamar onUpdateQuantity al hacer click en aumentar', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CartItem
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemoveItem={mockRemoveItem}
      />,
      { container }
    );

    const aumentarBtn = container.querySelectorAll('.cantidad-btn')[1];
    fireEvent.click(aumentarBtn);

    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 3);

    document.body.removeChild(container);
  });

  it('debería llamar onUpdateQuantity al hacer click en disminuir', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CartItem
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemoveItem={mockRemoveItem}
      />,
      { container }
    );

    const disminuirBtn = container.querySelectorAll('.cantidad-btn')[0];
    fireEvent.click(disminuirBtn);

    expect(mockUpdateQuantity).toHaveBeenCalledWith(1, 1);

    document.body.removeChild(container);
  });

  it('debería deshabilitar el botón de disminuir cuando cantidad es 1', function() {
    mockItem.cantidad = 1;
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CartItem
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemoveItem={mockRemoveItem}
      />,
      { container }
    );

    const disminuirBtn = container.querySelectorAll('.cantidad-btn')[0];
    expect(disminuirBtn.disabled).toBe(true);

    document.body.removeChild(container);
  });

  it('debería llamar onRemoveItem al hacer click en eliminar', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <CartItem
        item={mockItem}
        onUpdateQuantity={mockUpdateQuantity}
        onRemoveItem={mockRemoveItem}
      />,
      { container }
    );

    const eliminarBtn = container.querySelector('.btn-eliminar');
    fireEvent.click(eliminarBtn);

    expect(mockRemoveItem).toHaveBeenCalledWith(1);

    document.body.removeChild(container);
  });
});
