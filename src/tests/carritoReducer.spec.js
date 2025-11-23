import { carritoReducer } from '../context/CarritoContext';

describe('carritoReducer', function() {
  it('agrega producto al carrito', function() {
    const estadoInicial = { items: [], total: 0, cantidad: 0 };
    const producto = { id: 1, nombre: 'Teclado', precio: 10000 };
    const accion = { type: 'AGREGAR_PRODUCTO', producto };
    const nuevoEstado = carritoReducer(estadoInicial, accion);
    expect(nuevoEstado.items[0].nombre).toBe('Teclado');
    expect(nuevoEstado.total).toBe(10000);
    expect(nuevoEstado.cantidad).toBe(1);
  });
});
