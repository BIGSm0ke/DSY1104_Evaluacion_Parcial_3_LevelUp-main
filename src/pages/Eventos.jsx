import React from 'react';
import '../styles/Eventos.css';

function Eventos() {
  const eventos = [
    {
      id: 1,
      titulo: "ExpoGame 2025",
      fecha: "3, 4 y 5 de Octubre, 2025",
      ubicacion: "Estación Mapocho, Santiago",
      imagen: "https://www.elconquistadorconcepcion.cl/wp-content/uploads/2025/09/expogame-2025-scl-.jpg",
      descripcion: "Tres días de torneos, cosplay, simuladores, sorpresas y conciertos en el evento gamer más importante del año. Invitados internacionales y premiaciones en vivo.",
      links: [
        { nombre: "Entradas y Programa", url: "https://www.puntoticket.com/expogame2025" },
        { nombre: "Cobertura de prensa", url: "https://www.carolina.cl/noticias/2025/10/03/postales-de-expogame-2025-asi-fue-la-jornada-inaugural-del-evento-gamer-del-ano.html" }
      ]
    },
    {
      id: 2,
      titulo: "Festigame Caja Los Andes 2025",
      fecha: "25 de Octubre, 2025",
      ubicacion: "Movistar Arena, Santiago",
      imagen: "https://static.ptocdn.net/especiales/vms013_festigame-2025/img/portada-mobile-v2.jpg",
      descripcion: "Festival gamer con videojuegos, competencias de esports, cosplay, música, desarrolladores chilenos y mucho más. ¡Una fiesta gamer de 10am a medianoche!",
      links: [
        { nombre: "Evento Oficial", url: "https://cl.festigame.com" },
        { nombre: "Entradas", url: "https://www.puntoticket.com/festigame-2025" }
      ]
    },
    {
      id: 3,
      titulo: "Workshop: Mods Avanzados para Minecraft",
      fecha: "6 de Noviembre, 2025",
      ubicacion: "Level-Up Gamer Store, Local 12",
      imagen: "https://i.ytimg.com/vi/4MP_GTdIKW4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDtgNOYd7ER5Bh8qgOf1wsWEXQVhw",
      descripcion: "Crea mods épicos con las últimas herramientas 2025. Destacado para fans de biomas, mobs y climas extremos. Se recomienda conocimiento previo en Java.",
      links: [
        { nombre: "Guía de mods 2025", url: "https://www.hobbyconsolas.com/guias-trucos/minecraft/mejores-mods-minecraft-puedes-instalar-2025-1436611" },
        { nombre: "Noticias mods Minecraft", url: "https://gamelevate.com/es/best-minecraft-mods-in-2025/" }
      ]
    }
  ];

  const noticias = [
  {
    id: 1,
    titulo: "Hollow Knight: Silksong revela primer gameplay extendido",
    resumen: "Después de años de espera, Team Cherry mostró en octubre un avance extenso de Silksong durante un streaming especial, confirmando nuevas mecánicas, escenario y fecha tentativa para 2026.",
    imagen: "https://img.asmedia.epimg.net/resizer/v2/XT3N4PSIJJBYNHQNCUWPO2MLYU.jpg?auth=55bbb71e03082d2bf42713b60a896a984474e423e28bebc021411b6f62422ca5&width=1472&height=828&smart=true",
    url: "https://www.hobbyconsolas.com/noticias/hollow-knight-silksong-presenta-nuevo-avance-jugable-octubre-2025-1487001"
  },
  {
    id: 2,
    titulo: "Pokémon Z-A y Digimon Story lideran lanzamientos",
    resumen: "El mes destacó por la llegada de Leyendas Pokémon Z-A y Digimon Story: Time Stranger, los juegos más esperados para Switch y PlayStation.",
    imagen: "https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/video-games/_tiles/pokemon-legends-z-a/dlc/announce/pokemon-legends-z-a-169-es.png",
    url: "https://www.hobbyconsolas.com/reportajes/mejores-juegos-octubre-2025-lanzamientos-imprescindibles-mes-lleno-juegazos-muy-esperados-1485541" // [web:22]
  },
  {
    id: 3,
    titulo: "Exhibición LEGO Gaming llega a Chile",
    resumen: "La muestra oficial LEGO Gaming reúne construcciones y experiencias inspiradas en videojuegos como Mario y Minecraft durante octubre en Santiago.",
    imagen: "https://prensaeventos.cl/wp-content/uploads/2022/06/Llega-a-Chile-la-Exhibicion-de-Esculturas-de-piezas-LEGO%C2%AE-mas-grande-de-Sudamerica.jpg",
    url: "https://as.com/meristation/noticias/lego-gaming-the-exhibition-cuando-los-videojuegos-se-construyen-ladrillo-a-ladrillo/" // [web:27]
  }
];

  return (
    <div className="eventos-container">
      <h1>🎮 Eventos Gamers</h1>
      <p>
        ¡Vive, juega y compite en los mejores eventos gaming del año en Chile!
      </p>

      <div className="eventos-grid">
        {eventos.map(evento => (
          <div key={evento.id} className="evento-card">
            <div className="evento-imagen">
              <img src={evento.imagen} alt={evento.titulo} />
            </div>
            <div className="evento-info">
              <h3>{evento.titulo}</h3>
              <p className="evento-fecha">📅 {evento.fecha}</p>
              <p className="evento-ubicacion">📍 {evento.ubicacion}</p>
              <p>{evento.descripcion}</p>
              <div className="evento-links">
                {evento.links && evento.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="evento-link"
                  >
                    {link.nombre}
                  </a>
                ))}
              </div>
              <div className="evento-botones">
                <button className="btn-asistir">✅ Asistir</button>
                <button className="btn-mas">Más info</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="noticias-oficiales-titulo">📰 Noticias Gamer Oficiales</h2>
      <div className="noticias-grid">
        {noticias.map(noticia => (
          <div key={noticia.id} className="noticia-card">
            <img src={noticia.imagen} alt={noticia.titulo} />
            <div className="noticia-info">
              <h4>{noticia.titulo}</h4>
              <p>{noticia.resumen}</p>
              <a
                href={noticia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="noticia-link"
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventos;
