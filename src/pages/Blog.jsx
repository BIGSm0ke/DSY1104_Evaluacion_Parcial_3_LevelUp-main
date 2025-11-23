import React from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.css';

// Comentario de importación de imágenes locales (elige la que quieras)
// import tipFPS from '../assets/blog/fps-tips.jpg';
// import tendencias from '../assets/blog/tendencias.jpg';
// import salud from '../assets/blog/salud-gamer.jpg';
// import estrategia from '../assets/blog/estrategia.jpg';
// import configSetup from '../assets/blog/configuracion.jpg';

const blogs = [
  {
    id: 1,
    titulo: "Consejos para mejorar en FPS",
    fecha: new Date("2025-09-20").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Aprende a dominar los shooters: sensibilidad óptima, comunicación, ejercicios de puntería y manejo del estrés.",
    imagen: "https://gam3s.gg/_next/image/?url=https%3A%2F%2Fassets.gam3s.gg%2Fbest_shooter_games_84c2fb877f.jpg&w=3840&q=75", // tipFPS
    enlace: "https://www.youtube.com/watch?v=8z-97e8weaM",
  },
  {
    id: 2,
    titulo: "Nuevas tendencias en gaming 2025",
    fecha: new Date("2025-09-15").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Las tecnologías que están cambiando el rubro: IA, pantallas curvas 4K, periféricos hápticos y realidad aumentada.",
    imagen: "https://www.blog.udonis.co/static/1d83d029fb9def06a066571b9fa0224b/6bd3c/gaming-trends.webp", // tendencias
    enlace: "https://www-blog-udonis-co.translate.goog/mobile-marketing/mobile-games/gaming-trends?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=sge#:~:text=de%20los%20videojuegos.-,9.,novedoso%20que%20despierte%20la%20curiosidad.",
  },
  {
    id: 3,
    titulo: "Estrategias avanzadas en esports",
    fecha: new Date("2025-09-01").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Cómo los equipos profesionales entrenan la toma de decisiones, el análisis de rivales y la sinergia en juegos de equipo.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHETdPhUSOaIH-SH7ML-uFLMgQSO_rE7qsA&s", // estrategia
    enlace:
      "https://isportcoach.com/como-planificar-el-entrenamiento-de-esports",
  },
  {
    id: 4,
    titulo: "Salud para gamers: visión y pausas activas",
    fecha: new Date("2025-08-20").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Tips médicos para cuidar postura, evitar el síndrome de túnel carpiano y reducir el cansancio visual.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeh5qQT07-PZXCB1swRQLVrUkUrgZP6TFDw&s", // salud
    enlace: "https://as.com/deporteyvida/2020/10/28/portada/1603891477_888618.html",
  },
  {
    id: 5,
    titulo: "Cómo optimizar tu setup gamer",
    fecha: new Date("2025-08-12").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Guía para iluminación, ergonomía, cable management y recomendaciones de sillas y escritorios ideales.",
    imagen: "https://i.ytimg.com/vi/RNLKWPY42sY/maxresdefault.jpg", // configSetup
    enlace: "https://www.youtube.com/watch?v=RNLKWPY42sY",
  },
];

function Blog() {
  return (
    <div className="blog-container">
      <h2>Blog Gamer</h2>
      <div className="blog-grid">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
