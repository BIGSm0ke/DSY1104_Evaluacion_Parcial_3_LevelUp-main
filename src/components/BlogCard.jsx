import React from 'react';
import '../styles/BlogCard.css';

function BlogCard({ blog }) {
  // Si usas assets locales, puedes importar y reemplazar el src de la imagen aquí.
  return (
    <div className="blog-card">
      {/* Imagen opcional, reemplaza por la URL real */}
      {/* <img src={blog.imagen} alt={blog.titulo} className="blog-img" /> */}
      {blog.imagen && (
        <img src={blog.imagen} alt={blog.titulo} className="blog-img" />
      )}
      <h3 className="blog-title">{blog.titulo}</h3>
      <p className="blog-date">{blog.fecha}</p>
      <p className="blog-content">{blog.contenido}</p>
      <a
        className="btn-leer-mas"
        href={blog.enlace}
        target="_blank"
        rel="noopener noreferrer"
      >
        Leer más
      </a>
    </div>
  );
}

export default BlogCard;
