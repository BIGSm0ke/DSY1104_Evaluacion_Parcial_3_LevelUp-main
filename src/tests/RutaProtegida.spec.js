import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RutaProtegida from '../components/RutaProtegida';

describe('RutaProtegida', function() {
  beforeEach(function() {
    localStorage.clear();
  });

  afterEach(function() {
    localStorage.clear();
  });

  it('debería redirigir a /login si no hay usuario', function() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <MemoryRouter>
        <RutaProtegida>
          <div>Contenido protegido</div>
        </RutaProtegida>
      </MemoryRouter>,
      { container }
    );

    // No debería mostrar el contenido protegido
    expect(container.innerHTML).not.toContain('Contenido protegido');

    document.body.removeChild(container);
  });

  it('debería mostrar el contenido si hay un usuario logueado', function() {
    localStorage.setItem('usuario', JSON.stringify({ nombre: 'Test User', email: 'test@mail.com' }));

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <MemoryRouter>
        <RutaProtegida>
          <div>Contenido protegido</div>
        </RutaProtegida>
      </MemoryRouter>,
      { container }
    );

    expect(container.innerHTML).toContain('Contenido protegido');

    document.body.removeChild(container);
  });

  it('debería manejar localStorage vacío correctamente', function() {
    localStorage.removeItem('usuario');

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <MemoryRouter>
        <RutaProtegida>
          <div>Contenido protegido</div>
        </RutaProtegida>
      </MemoryRouter>,
      { container }
    );

    expect(container.innerHTML).not.toContain('Contenido protegido');

    document.body.removeChild(container);
  });

  it('debería parsear correctamente los datos del usuario', function() {
    const usuario = { nombre: 'Juan', email: 'juan@example.com', id: 123 };
    localStorage.setItem('usuario', JSON.stringify(usuario));

    const container = document.createElement('div');
    document.body.appendChild(container);

    render(
      <MemoryRouter>
        <RutaProtegida>
          <div data-testid="protected">Contenido protegido</div>
        </RutaProtegida>
      </MemoryRouter>,
      { container }
    );

    expect(container.innerHTML).toContain('Contenido protegido');

    document.body.removeChild(container);
  });
});
