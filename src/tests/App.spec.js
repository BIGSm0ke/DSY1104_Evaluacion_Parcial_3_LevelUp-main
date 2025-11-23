import React from 'react';
import ReactDOM from 'react-dom/client';
import { CarritoProvider } from '../context/CarritoContext';
import App from '../App';

describe('App', function() {
  it('debería mostrar el logo principal', function(done) {
    // Simula usuario si se requiere en el componente principal
    localStorage.setItem('usuario', JSON.stringify({ nombre: "Test", email: "test@mail.com" }));

    var container = document.createElement('div');
    document.body.appendChild(container);

    const root = ReactDOM.createRoot(container);
    root.render(
      <CarritoProvider>
        <App />
      </CarritoProvider>
    );

    setTimeout(function() {
      try {
        console.log("HTML generado:", container.innerHTML); // ver el DOM por consola
        expect(container.innerHTML).toContain('Level-Up Gamer');
        done();
      } finally {
        root.unmount();
        document.body.removeChild(container);
      }
    }, 100);  // puedes probar con 200 o 500 ms
  });
});
