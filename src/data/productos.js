// src/data/productos.js

export const productos = [
  // === JUEGOS DE MESA ===
  {
    id: "OF006",
    codigo: "OF006",
    categoria: "juegos-mesa",
    nombre: "Catan",
    precio: 24990,
    precioOriginal: 29990,
    imagen: "/assets/images/catan.jpg",
    descripcion: "Juego de estrategia para 3-4 jugadores. ¡Conquista territorios y domina el mundo!",
    descripcionProducto: "Catan es el famoso juego donde compites para colonizar una isla, comerciar recursos como madera y ladrillo y construir caminos, poblados y ciudades. Incluye piezas de alta calidad, reglas fáciles de aprender y una jugabilidad que garantiza partidas dinámicas. Recomendado para todo tipo de jugadores, ideal para desarrollar habilidades de negociación y estrategia.",
    oferta: true
  },
  {
    id: "JM002",
    codigo: "JM002",
    categoria: "juegos-mesa",
    nombre: "Carcassonne",
    precio: 24990,
    imagen: "/assets/images/carcassonne.jpg",
    descripcion: "Construye ciudades, caminos y monasterios en este clásico juego de colocación de fichas.",
    descripcionProducto: "Carcassonne es un clásico de colocación de losetas donde los jugadores expanden el reino francés medieval, creando caminos, ciudades y granjas. Su mecánica es simple pero estratégica, ideal para sesiones familiares, incluye un set de meeples y múltiples expansiones disponibles.",
  },
  {
    id: "JM003",
    codigo: "JM003",
    categoria: "juegos-mesa",
    nombre: "Pandemic",
    precio: 27990,
    imagen: "/assets/images/pandemic.jpg",
    descripcion: "Juego cooperativo donde trabajas en equipo para detener pandemias globales.",
    descripcionProducto: "Pandemic es el juego cooperativo donde tú y tu equipo deben salvar al mundo de cuatro enfermedades mortales que amenazan la humanidad. Cada jugador asume un rol único, trabajando juntos para investigar curas, viajar por el mundo y evitar brotes. Destaca por su modo cooperativo y por escenarios desafiantes.",
  },
  {
    id: "JM004",
    codigo: "JM004",
    categoria: "juegos-mesa",
    nombre: "Azul",
    precio: 22990,
    imagen: "/assets/images/azul.jpg",
    descripcion: "Juego de estrategia abstracta para 2-4 jugadores, ganador del Spiel des Jahres.",
    descripcionProducto: "Azul es un elegante juego abstracto donde los jugadores usan fichas para decorar el palacio real de Évora. Su mecánica de draft y patrón lo hacen profundo y fácil de aprender. Incluye componentes de alta calidad y diseño artístico premiado.",
  },


  // === ACCESORIOS ===
  {
    id: "AC001",
    codigo: "AC001",
    categoria: "accesorios",
    nombre: "Controlador Inalámbrico Xbox Series X",
    precio: 59990,
    imagen: "/assets/images/xbox-controller.jpg",
    descripcion: "Controlador oficial con baja latencia y batería de larga duración.",
    descripcionProducto: "Disfruta la máxima precisión con el Control Xbox Series X, diseñado para largas sesiones de juego. Su conectividad inalámbrica, ergonomía avanzada y retroalimentación háptica lo hacen ideal para competitivo y casual. Incluye compatibilidad con múltiples plataformas y batería de larga duración.",
    especificaciones: {
      "Conexión": "Inalámbrica Bluetooth / 2.4GHz",
      "Batería": "Hasta 40 horas",
      "Compatibilidad": "Xbox Series X|S, Windows",
      "Peso": "275g",
      "Características": "Gatillos adaptativos, retroalimentación háptica"
    }
  },
  {
    id: "OF003",
    codigo: "OF003",
    categoria: "accesorios",
    nombre: "Auriculares Gamer HyperX Cloud II",
    precio: 69990,
    precioOriginal: 79990,
    imagen: "/assets/images/hyperx-cloud.jpg",
    descripcion: "Sonido envolvente 7.1, micrófono desmontable y almohadillas cómodas.",
    descripcionProducto: "Experimenta el sonido envolvente 7.1 y la comodidad premium durante horas con los HyperX Cloud II. Su micrófono desmontable es ideal para streaming y gaming, la construcción ligera y robusta garantiza máxima durabilidad. Compatible con múltiples plataformas.",
    oferta: true,
    especificaciones: {
      "Sonido": "7.1 Surround",
      "Controlador": "53mm",
      "Micrófono": "Desmontable, omnidireccional",
      "Conexión": "USB con adaptador 3.5mm",
      "Compatibilidad": "PC, PS4, PS5, Switch"
    }
  },
  {
    id: "AC003",
    codigo: "AC003",
    categoria: "accesorios",
    nombre: "Teclado Mecánico Razer BlackWidow",
    precio: 99990,
    imagen: "/assets/images/blackwidow.jpg",
    descripcion: "Teclado con switches verdes, retroiluminación Chroma y diseño resistente.",
    descripcionProducto: "El Razer BlackWidow cuenta con switches verdes icónicos, retroiluminación RGB personalizable y construcción resistente para uso intensivo. Es ideal para quienes buscan tacto mecánico y funcionalidad avanzada para juegos y trabajo.",
    especificaciones: {
      "Switches": "Razer Green (táctiles y clic)",
      "Teclas": "104 + 5 teclas macro",
      "Iluminación": "RGB Chroma",
      "Conexión": "USB-C",
      "Durabilidad": "80 millones de pulsaciones"
    }
  },
  {
    id: "AC004",
    codigo: "AC004",
    categoria: "accesorios",
    nombre: "Mousepad XXL para escritorio",
    precio: 39990,
    imagen: "/assets/images/mousepad-xxl.jpg",
    descripcion: "Mousepad de tela de 120x60cm, base antideslizante y bordes cosidos.",
    descripcionProducto: "Mousepad XXL para gamers profesionales, cubre todo el escritorio, evita deslizamientos y resiste desgastes. Borde cosido anti-fray y base de goma para sesiones intensas.",
  },


  // === CONSOLAS ===
  {
    id: "OF001",
    codigo: "OF001",
    categoria: "consolas",
    nombre: "PlayStation 5",
    precio: 499990,
    precioOriginal: 549990,
    imagen: "/assets/images/ps5.jpg",
    descripcion: "Consola de última generación con SSD ultrarrápido y gráficos 4K.",
    descripcionProducto: "Sumérgete en la nueva generación con PS5, gráficos 4K, carga ultrarrápida y rediseño del clásico DualSense. Incluye arquitectura AMD de alto rendimiento y almacenamiento SSD para juego ágil.",
    oferta: true,
    especificaciones: {
      "CPU": "AMD Zen 2, 8 núcleos @ 3.5GHz",
      "GPU": "AMD RDNA 2, 10.28 TFLOPS",
      "RAM": "16GB GDDR6",
      "Almacenamiento": "825GB SSD NVMe",
      "Resolución": "Hasta 4K @ 120Hz"
    }
  },
  {
    id: "CO002",
    codigo: "CO002",
    categoria: "consolas",
    nombre: "Nintendo Switch OLED",
    precio: 429990,
    imagen: "/assets/images/switch-oled.jpg",
    descripcion: "Pantalla OLED de 7, sonido mejorado y base con puerto LAN.",
    descripcionProducto: "La Nintendo Switch OLED ofrece pantalla vibrante, sonido mejorado, base con puerto LAN y posibilidad de juego portátil o en TV. Ideal para multijugador y coleccionistas.",
    especificaciones: {
      "Pantalla": "7\" OLED",
      "Resolución": "1280x720",
      "Almacenamiento": "64GB (ampliable con microSD)",
      "Batería": "Hasta 9 horas",
      "Conectividad": "Wi-Fi, Bluetooth, LAN (en base)"
    }
  },
  {
    id: "CO003",
    codigo: "CO003",
    categoria: "consolas",
    nombre: "Steam Deck 512GB",
    precio: 699990,
    imagen: "/assets/images/steam-deck.jpg",
    descripcion: "Consola portátil para jugar juegos de Steam con Linux y Windows.",
    descripcionProducto: "Steam Deck de 512GB es la nueva consola portátil para biblioteca Steam real. Corre Linux y Windows, controles precisos, pantalla Full HD y almacenamiento ampliable.",
    especificaciones: {
      "CPU": "AMD Zen 2, 4 núcleos @ 2.4-3.5GHz",
      "GPU": "AMD RDNA 2, 1.6 TFLOPS",
      "RAM": "16GB LPDDR5",
      "Almacenamiento": "512GB SSD NVMe",
      "Pantalla": "7\" LCD, 1280x800"
    }
  },


  // === COMPUTADORES GAMERS ===
  {
    id: "OF004",
    codigo: "OF004",
    categoria: "computadores-gamers",
    nombre: "PC Gamer ASUS ROG Strix",
    precio: 1199990,
    precioOriginal: 1299990,
    imagen: "/assets/images/rog-strix.jpg",
    descripcion: "Intel Core i7, 16GB RAM, RTX 3070, SSD 1TB. Listo para cualquier juego.",
    descripcionProducto: "El ASUS ROG Strix es un equipo gamer de última generación, con procesador Intel de 12va gen, RAM DDR5 veloz y gráfica RTX 3070. Listo para jugar en 4K, stream o edición profesional.",
    oferta: true,
    especificaciones: {
      "Procesador": "Intel Core i7-12700K",
      "RAM": "16GB DDR5 4800MHz",
      "GPU": "NVIDIA RTX 3070 8GB",
      "Almacenamiento": "1TB SSD NVMe",
      "Fuente": "650W 80+ Gold"
    }
  },
  {
    id: "CG002",
    codigo: "CG002",
    categoria: "computadores-gamers",
    nombre: "PC Gamer MSI Infinite",
    precio: 1499990,
    imagen: "/assets/images/msi-infinite.jpg",
    descripcion: "Intel i9, RTX 4080, 32GB RAM, SSD 2TB. Máximo rendimiento.",
    descripcionProducto: "MSI Infinite para los gamers más exigentes: Intel Core i9, RTX 4080, RAM DDR5, SSD enorme y fuente Platinum para rendimiento top.",
    especificaciones: {
      "Procesador": "Intel Core i9-13900K",
      "RAM": "32GB DDR5 6000MHz",
      "GPU": "NVIDIA RTX 4080 16GB",
      "Almacenamiento": "2TB SSD NVMe",
      "Fuente": "850W 80+ Platinum"
    }
  },
  {
    id: "CG003",
    codigo: "CG003",
    categoria: "computadores-gamers",
    nombre: "PC Gamer All-In-One Razer",
    precio: 1799990,
    imagen: "/assets/images/razer-aio.jpg",
    descripcion: "Todo en uno con pantalla 4K, refrigeración líquida y diseño premium.",
    descripcionProducto: "AIO Razer: todo en uno con pantalla 4K UHD, refrigeración líquida y acabado premium. Perfecto para gamers y creadores.",
    especificaciones: {
      "Procesador": "Intel Core i7-12700H",
      "RAM": "32GB DDR4",
      "GPU": "NVIDIA RTX 3060",
      "Pantalla": "27\" 4K UHD",
      "Refrigeración": "Líquida 240mm"
    }
  },


  // === SILLAS GAMERS ===
  {
    id: "OF002",
    codigo: "OF002",
    categoria: "sillas-gamers",
    nombre: "Silla Gamer Secretlab Titan",
    precio: 299990,
    precioOriginal: 349990,
    imagen: "/assets/images/secretlab.jpg",
    descripcion: "Diseño ergonómico, soporte lumbar ajustable y tapiz de cuero premium.",
    descripcionProducto: "La Secretlab Titan es la silla gamer Top, con cuero premium, soporte lumbar ajustable, acolchado especial y garantía superior. Ideal para largas jornadas de gaming/trabajo.",
    oferta: true
  },
  {
    id: "SG002",
    codigo: "SG002",
    categoria: "sillas-gamers",
    nombre: "Silla Noblechairs Hero",
    precio: 319990,
    imagen: "/assets/images/noblechairs.jpg",
    descripcion: "Tapiz de cuero sintético, soporte lumbar ajustable y diseño deportivo.",
    descripcionProducto: "La Noblechairs Hero mezcla diseño deportivo y comodidad premium, incluye ajuste lumbar y tapiz de cuero sintético de alta calidad.",
  },
  {
    id: "SG003",
    codigo: "SG003",
    categoria: "sillas-gamers",
    nombre: "Silla GTPlayer RGB",
    precio: 289990,
    imagen: "/assets/images/gtplayer.jpg",
    descripcion: "Silla con luces RGB, reposapiés extensible y diseño futurista.",
    descripcionProducto: "GTPlayer RGB, la silla para gamers modernos: iluminación RGB, reposapiés para relax y acolchado premium.",
  },


  // === MOUSE ===
  {
    id: "OF005",
    codigo: "OF005",
    categoria: "mouse",
    nombre: "Mouse Gamer Logitech G502 HERO",
    precio: 39990,
    precioOriginal: 49990,
    imagen: "/assets/images/g502.jpg",
    descripcion: "Sensor HERO 25K, 11 botones programables y RGB personalizable.",
    descripcionProducto: "El G502 HERO incluye sensor profesional, gran número de botones y personalización RGB para adaptarse a cualquier juego competitivo.",
    oferta: true,
    especificaciones: {
      "Sensor": "HERO 25K",
      "DPI": "Hasta 25,600",
      "Botones": "11 programables",
      "Peso": "121g",
      "Iluminación": "RGB personalizable"
    }
  },
  {
    id: "MS002",
    codigo: "MS002",
    categoria: "mouse",
    nombre: "Mouse Razer Viper 8KHz",
    precio: 69990,
    imagen: "/assets/images/viper.jpg",
    descripcion: "Sensor óptico de 8000Hz, peso ultraligero y diseño ambidiestro.",
    descripcionProducto: "Viper 8KHz de Razer, diseñado para eSports: frecuencia altísima, sensor preciso y construcción ligera.",
    especificaciones: {
      "Sensor": "Razer Focus+",
      "Frecuencia": "8000Hz",
      "Peso": "74g",
      "DPI": "Hasta 20,000",
      "Diseño": "Ambidiestro"
    }
  },
  {
    id: "MS003",
    codigo: "MS003",
    categoria: "mouse",
    nombre: "Mouse Logitech G Pro X Superlight",
    precio: 79990,
    imagen: "/assets/images/g-pro.jpg",
    descripcion: "Solo 63g, sensor HERO 25K y batería de 70 horas.",
    descripcionProducto: "El G Pro X Superlight es el mouse para pro players, con sensor avanzado y la mejor autonomía del segmento.",
    especificaciones: {
      "Peso": "63g",
      "Sensor": "HERO 25K",
      "Batería": "Hasta 70 horas",
      "DPI": "Hasta 25,600",
      "Conexión": "Inalámbrico Lightspeed"
    }
  },


  // === MOUSEPAD ===
  {
    id: "OF010",
    codigo: "OF010",
    categoria: "mousepad",
    nombre: "Mousepad Razer Goliathus Extended Chroma",
    precio: 23990,
    precioOriginal: 29990,
    imagen: "/assets/images/goliathus.jpg",
    descripcion: "Superficie optimizada para precisión, con iluminación Chroma RGB.",
    descripcionProducto: "Goliathus Extended Chroma combina tamaño XXL y RGB Chroma, ideal para setups llamativos.",
    oferta: true
  },
  {
    id: "MP002",
    codigo: "MP002",
    categoria: "mousepad",
    nombre: "Mousepad SteelSeries QcK+",
    precio: 19990,
    imagen: "/assets/images/qck.jpg",
    descripcion: "Superficie optimizada para precisión, bordes cosidos y base antideslizante.",
    descripcionProducto: "QcK+ de SteelSeries tiene superficie especial para control extremo y gran durabilidad por sus bordes cosidos.",
  },
  {
    id: "MP003",
    codigo: "MP003",
    categoria: "mousepad",
    nombre: "Mousepad HyperX Fury S Pro",
    precio: 24990,
    imagen: "/assets/images/fury.jpg",
    descripcion: "Tamaño XXL, superficie texturizada y base de goma densa.",
    descripcionProducto: "HyperX Fury S Pro para expertos: base de goma súper densa para máxima estabilidad, tamaño profesional.",
  },


  // === POLERAS PERSONALIZADAS ===
  {
    id: "PP001",
    codigo: "PP001",
    categoria: "poleras-personalizadas",
    nombre: "Polera Gamer Personalizada 'Level-Up'",
    precio: 14990,
    imagen: "/assets/images/Camiseta_levelup.jpg",
    descripcion: "100% algodón, diseño exclusivo Level-Up Gamer.",
    descripcionProducto: "Polera 100% algodón con diseño Level-Up Gamer. Calidad premium, estampado resistente a lavados y ajuste cómodo.",
  },


  // === POLERONES GAMERS ===
  {
    id: "OF009",
    codigo: "OF009",
    categoria: "polerones-gamers",
    nombre: "Poleron 'Stay Frosty'",
    precio: 44990,
    precioOriginal: 54990,
    imagen: "/assets/images/poleron-frosty.jpg",
    descripcion: "Polar térmico, capucha con cordón y estampado resistente.",
    descripcionProducto: "Poleron de polar térmico, ideal para invierno, con capucha ajustable y diseño gamer exclusivo.",
    oferta: true
  },
  {
    id: "PO002",
    codigo: "PO002",
    categoria: "polerones-gamers",
    nombre: "Poleron 'Respawn in 5...4...3...'",
    precio: 52990,
    imagen: "/assets/images/poleron-respawn.jpg",
    descripcion: "Diseño gamer, bolsillo canguro y tela suave interior.",
    descripcionProducto: "Poleron Respawn con bolsillo canguro y tela extra suave, ideal para relajarte luego de partidas intensas.",
  },


  // === PERIFÉRICOS PARA STREAMING ===
  {
    id: "OF007",
    codigo: "OF007",
    categoria: "perifericos-streaming",
    nombre: "Micrófono Elgato Wave 3",
    precio: 109990,
    precioOriginal: 129990,
    imagen: "/assets/images/wave3.jpg",
    descripcion: "Micrófono USB con calidad de estudio, software de control y filtro pop integrado.",
    descripcionProducto: "Wave 3 de Elgato, audio profesional para streamers, grabación y conferencias. Incluye filtro pop y mixer avanzado.",
    oferta: true,
    especificaciones: {
      "Tipo": "Condensador USB",
      "Patrón": "Cardioide",
      "Frecuencia": "20Hz - 20kHz",
      "Muestreo": "48kHz / 24-bit",
      "Software": "Wave Link (mixer y efectos)"
    }
  },
  {
    id: "ST002",
    codigo: "ST002",
    categoria: "perifericos-streaming",
    nombre: "Cámara Logitech Brio 4K",
    precio: 189990,
    imagen: "/assets/images/brio.jpg",
    descripcion: "Cámara 4K con HDR, corrección de luz automática y enfoque rápido.",
    descripcionProducto: "Brio 4K es la cámara definitiva para streamers: graba en 4K con HDR, es autofoco y tiene calidad de audio superior.",
    especificaciones: {
      "Resolución": "4K UHD @ 30fps",
      "HDR": "Sí",
      "Campo": "90°",
      "Enfoque": "Automático",
      "Micrófonos": "Estéreo"
    }
  },
  {
    id: "ST003",
    codigo: "ST003",
    categoria: "perifericos-streaming",
    nombre: "Elgato Key Light Air",
    precio: 99990,
    imagen: "/assets/images/keylight.jpg",
    descripcion: "Luz LED RGB ajustable, controlable por app y con modo de luz natural.",
    descripcionProducto: "Key Light Air transforma tu stream con luz de calidad profesional, RGB y control por app. Ajusta color y brillo según tu ambiente.",
  },
  {
    id: "ST004",
    codigo: "ST004",
    categoria: "perifericos-streaming",
    nombre: "Controlador Stream Deck Mini",
    precio: 89990,
    imagen: "/assets/images/streamdeck-mini.jpg",
    descripcion: "6 teclas programables para cambiar escenas, sonidos y acciones en vivo.",
    descripcionProducto: "Stream Deck Mini, ideal para automatizar tu streaming con 6 teclas LCD y software dedicado.",
    especificaciones: {
      "Teclas": "6 LCD programables",
      "Software": "Elgato Stream Deck",
      "Conexión": "USB 3.0",
      "Compatibilidad": "OBS, Twitch, Discord, Spotify",
      "Pantalla": "OLED de 5.5\""
    }
  },


  // === ILUMINACIÓN RGB ===
  {
    id: "OF008",
    codigo: "OF008",
    categoria: "iluminacion-rgb",
    nombre: "Tiras LED Razer Chroma",
    precio: 29990,
    precioOriginal: 39990,
    imagen: "/assets/images/razer-leds.jpg",
    descripcion: "Tiras RGB sincronizables con juegos y periféricos Razer.",
    descripcionProducto: "Ilumina tu setup gamer con Tiras LED Razer Chroma, sincronizables con juegos y software Razer. Fácil instalación y control.",
    oferta: true,
    especificaciones: {
      "Longitud": "2 metros",
      "LEDs": "10 LEDs direccionables",
      "Control": "Razer Chroma RGB",
      "Compatibilidad": "Razer Synapse, juegos, Philips Hue",
      "Conexión": "USB + alimentación 5V"
    }
  },
  {
    id: "IL002",
    codigo: "IL002",
    categoria: "iluminacion-rgb",
    nombre: "Lámpara Philips Hue Play",
    precio: 59990,
    imagen: "/assets/images/hue-play.jpg",
    descripcion: "Luz ambiental para detrás del monitor, controlable por app.",
    descripcionProducto: "Hue Play, la lámpara ambiental para detrás del monitor, RGB, compatible con Philips Hue y App.",
    especificaciones: {
      "Tipo": "Luz LED ambiental",
      "Control": "App Philips Hue",
      "Colores": "16 millones (RGB)",
      "Conexión": "Puente Philips Hue (requerido)",
      "Uso": "Interior, detrás de TV/monitor"
    }
  },
  {
    id: "IL003",
    codigo: "IL003",
    categoria: "iluminacion-rgb",
    nombre: "Ventilador RGB Corsair LL120",
    precio: 45990,
    imagen: "/assets/images/ll120.jpg",
    descripcion: "Ventilador de CPU con 16 LEDs RGB direccionables y bajo ruido.",
    descripcionProducto: "Corsair LL120, ventilador RGB silencioso con alta personalización y performance en refrigeración.",
    especificaciones: {
      "Tamaño": "120mm",
      "RPM": "400 - 1500 RPM",
      "Ruido": "Hasta 29 dBA",
      "LEDs": "16 RGB direccionables",
      "Conexión": "PWM + Corsair iCUE"
    }
  }
];
