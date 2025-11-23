import React, { useState, useEffect } from 'react';
import '../styles/OpinionesProducto.css';

function OpinionesProducto({ productoId }) {
  const [opiniones, setOpiniones] = useState([]);
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(5);

  useEffect(() => {
    const todasLasOpiniones = JSON.parse(localStorage.getItem('opiniones')) || {};
    setOpiniones(todasLasOpiniones[productoId] || []);
  }, [productoId]);

  const enviarOpinion = (e) => {
    e.preventDefault();
    const nuevaOpinion = {
      comentario,
      calificacion,
      fecha: new Date().toLocaleDateString(),
    };

    const todasLasOpiniones = JSON.parse(localStorage.getItem('opiniones')) || {};
    const nuevasOpinionesProducto = [...(todasLasOpiniones[productoId] || []), nuevaOpinion];
    todasLasOpiniones[productoId] = nuevasOpinionesProducto;
    localStorage.setItem('opiniones', JSON.stringify(todasLasOpiniones));
    setOpiniones(nuevasOpinionesProducto);

    setComentario('');
    setCalificacion(5);
  };

  // Calcula promedio de calificaciones
  const promedio = opiniones.length
    ? (opiniones.reduce((acc, op) => acc + op.calificacion, 0) / opiniones.length).toFixed(1)
    : null;

  return (
    <section className="opiniones-section">
      <div className="opiniones-header">
        <h3>Opiniones & Valoraciones</h3>
        {promedio && (
          <div className="opiniones-promedio">
            <span className="estrellas-promedio">
              {'★'.repeat(Math.round(promedio))}
              {'☆'.repeat(5 - Math.round(promedio))}
            </span>
            <span className="valor-promedio">{promedio}/5</span>
            <span className="contador-opiniones">({opiniones.length} opiniones)</span>
          </div>
        )}
      </div>
      <form onSubmit={enviarOpinion} className="form-opinion">
        <label className="label-textarea">
          Escribe tu opinión:
          <textarea
            value={comentario}
            onChange={e => setComentario(e.target.value)}
            required
            placeholder="¿Qué te pareció este producto?"
            className="input-opinion"
            maxLength={280}
          />
        </label>
        <label className="label-select">
          Califica este producto:
          <select
            value={calificacion}
            onChange={e => setCalificacion(Number(e.target.value))}
            className="input-calificacion"
          >
            {[5, 4, 3, 2, 1].map(n => (
              <option key={n} value={n}>{n} estrellas</option>
            ))}
          </select>
        </label>
        <button type="submit" className="btn-enviar-opinion">
          Enviar opinión
        </button>
      </form>
      <div className="lista-opiniones">
        {opiniones.length === 0 ? (
          <p className="mensaje-sin-opiniones">No hay opiniones aún.</p>
        ) : (
          opiniones.map((op, i) => (
            <div key={i} className="opinion-item">
              <div className="opinion-cabecera">
                <span className="estrellas">
                  {'★'.repeat(op.calificacion) + '☆'.repeat(5 - op.calificacion)}
                </span>
                <span className="fecha-opinion">{op.fecha}</span>
              </div>
              <span className="opinion-comentario">{op.comentario}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default OpinionesProducto;
