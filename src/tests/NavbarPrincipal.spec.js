import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarritoProvider } from '../context/CarritoContext';
import NavbarPrincipal from '../components/NavbarPrincipal';

describe('NavbarPrincipal', () => {
  it('debería mostrar el link Catálogo', () => {
    render(
      <MemoryRouter>
        <CarritoProvider>
          <NavbarPrincipal />
        </CarritoProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('Catálogo')).toBeTruthy();
  });
});
