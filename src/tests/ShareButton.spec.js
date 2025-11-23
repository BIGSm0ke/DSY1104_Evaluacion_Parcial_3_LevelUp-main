import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShareButton from '../components/ShareButton';

describe('ShareButton', function() {
  var mockProducto;
  var originalWindowOpen;

  beforeEach(function() {
    mockProducto = {
      nombre: 'Producto Test'
    };
    originalWindowOpen = window.open;
    window.open = jasmine.createSpy('open');
  });

  afterEach(function() {
    window.open = originalWindowOpen;
  });

  it('debería renderizar el título "Compartir"', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<ShareButton producto={mockProducto} />, { container });

    expect(container.innerHTML).toContain('Compartir:');

    document.body.removeChild(container);
  });

  it('debería mostrar los tres botones de redes sociales', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<ShareButton producto={mockProducto} />, { container });

    expect(container.innerHTML).toContain('X');
    expect(container.innerHTML).toContain('Facebook');
    expect(container.innerHTML).toContain('WhatsApp');

    const buttons = container.querySelectorAll('.btn-share');
    expect(buttons.length).toBe(3);

    document.body.removeChild(container);
  });

  it('debería abrir ventana de Twitter al hacer click', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<ShareButton producto={mockProducto} />, { container });

    const twitterBtn = container.querySelector('.btn-share-twitter');
    fireEvent.click(twitterBtn);

    expect(window.open).toHaveBeenCalled();
    const callArgs = window.open.calls.mostRecent().args;
    expect(callArgs[0]).toContain('twitter.com/intent/tweet');
    expect(callArgs[0]).toContain('Producto%20Test');
    expect(callArgs[1]).toBe('_blank');

    document.body.removeChild(container);
  });

  it('debería abrir ventana de Facebook al hacer click', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<ShareButton producto={mockProducto} />, { container });

    const facebookBtn = container.querySelector('.btn-share-facebook');
    fireEvent.click(facebookBtn);

    expect(window.open).toHaveBeenCalled();
    const callArgs = window.open.calls.mostRecent().args;
    expect(callArgs[0]).toContain('facebook.com/sharer/sharer.php');
    expect(callArgs[1]).toBe('_blank');

    document.body.removeChild(container);
  });

  it('debería abrir ventana de WhatsApp al hacer click', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(<ShareButton producto={mockProducto} />, { container });

    const whatsappBtn = container.querySelector('.btn-share-whatsapp');
    fireEvent.click(whatsappBtn);

    expect(window.open).toHaveBeenCalled();
    const callArgs = window.open.calls.mostRecent().args;
    expect(callArgs[0]).toContain('wa.me');
    expect(callArgs[0]).toContain('Producto%20Test');
    expect(callArgs[1]).toBe('_blank');

    document.body.removeChild(container);
  });
});
