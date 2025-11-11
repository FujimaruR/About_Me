const proyectos = [
    {
        ID_Proyecto: '1',
        titulo: "Cafe-Bonnibel-Pro",
        descripcion: "Demo de un desarrollo web Pro.",
        tecnologias: ["Tailwind", "Vite"],
        descripcionCorta: "Demo completa de una cafeteria. Incluye Menus y carrito de compras.",
        imagenes: ['/img/Screen8_14.png', '/img/Screen9_14.png', '/img/Screen10_14.png'],
        imagenPromo: ['/img/Screen9_14.png'],
        descripcionLarga: "Aplicación web diseñada para mostrar lo que seria un desarrollo web enfocado en una cafeteria. Incluye Menu, Sobre Nosotros, Ubicacion, Contacto, carrito y sistema de pagos.",
        codigoEjemplo: `El proyecto fue desarrollado con Vite y TailWind, utilizando Supabase para la gestión de datos.\n
Link de GitHub: https://github.com/FujimaruR/cafe-bonnibel-pro/tree/main\n
Link de la pagina web: https://cafe-bonnibel-pro.vercel.app/`
    },
    {
        ID_Proyecto: '2',
        titulo: "Cafe-Bonnibel-Plus",
        descripcion: "Demo de un desarrollo web Plus.",
        tecnologias: ["Tailwind", "Vite"],
        descripcionCorta: "Demo de una cafeteria. Incluye Menus y vistas que necesitaria una cafeteria.",
        imagenes: ['/img/Screen4_14.png', '/img/Screen3_14.png', '/img/Screen5_14.png', '/img/Screen7_14.png'],
        imagenPromo: ['/img/Screen6_14.png'],
        descripcionLarga: "Aplicación web diseñada para mostrar lo que seria un desarrollo web enfocado en una cafeteria. Incluye Menu, Sobre Nosotros, Ubicacion y Contacto.",
        codigoEjemplo: `El proyecto fue desarrollado con Vite y TailWind.\n
Link de GitHub: https://github.com/FujimaruR/cafe-bonnibel-plus\n
Link de la pagina web: https://cafe-bonnibel-plus.vercel.app/`
    },
    {
        ID_Proyecto: '3',
        titulo: "Cafe-Bonnibel-Basic",
        descripcion: "Demo de un desarrollo web Basic.",
        tecnologias: ["Tailwind", "Vite"],
        descripcionCorta: "Demo de una cafeteria sencilla. Incluye solamente landingpage con su menu e informacion necesaria.",
        imagenes: ['/img/Screen1_14.png', '/img/Screen2_14.png', '/img/Screen11_14.png'],
        imagenPromo: ['/img/Screen1_14.png'],
        descripcionLarga: "Aplicación web diseñada para mostrar lo que seria un desarrollo web enfocado en una cafeteria. Incluye landingpage que muestra el menu, ubicacion y contacto.",
        codigoEjemplo: `El proyecto fue desarrollado con Vite y TailWind.\n
Link de GitHub: https://github.com/FujimaruR/cafe-bonnibel\n
Link de la pagina web: https://cafe-bonnibel-basic.vercel.app/`
    },
    {
        ID_Proyecto: '4',
        titulo: "Reportes FIME",
        descripcion: "Plataforma desarrollada para la Facultad de Ingeniería Mecánica y Eléctrica (FIME) con el fin de gestionar evaluaciones académicas.",
        tecnologias: ["React", "AWS"],
        descripcionCorta: "Aplicación web en React que facilita la calificación y seguimiento del desempeño de los alumnos en FIME.",
        imagenes: ['/img/Screen1_1.png', '/img/Screen2_1.png', '/img/Screen3_1.png'],
        imagenPromo: ['/img/Screen3_1.png'],
        descripcionLarga: "Aplicación web diseñada para que los docentes califiquen a los alumnos y se genere un registro integral de cada curso. Incluye encuestas de retroalimentación, administración de información académica y gestión centralizada de reportes.",
        codigoEjemplo: `El proyecto fue desarrollado con React y Node.js, utilizando SQL para la gestión de datos.\n
Se desplegó en una máquina virtual Linux en AWS EC2, lo que representó un reto técnico por la configuración del entorno de producción y el manejo de servicios en la nube.`
    },
    {
        ID_Proyecto: '5',
        titulo: "Micherry",
        descripcion: "Plataforma de comercio electrónico inspirada en el modelo de Aliexpress.",
        tecnologias: ["PHP", "SQL"],
        descripcionCorta: "Desarrollo de una tienda en línea para compra y venta de productos con funcionalidades de usuario y vendedor.",
        imagenes: ['/img/Screen1_2.png', '/img/Screen2_2.png', '/img/Screen3_2.png', '/img/Screen4_2.png', '/img/Screen5_2.png'],
        imagenPromo: ['/img/Screen2_2.png'],
        descripcionLarga: "Sistema e-commerce donde los usuarios pueden registrarse para comprar, guardar favoritos, comentar y reseñar productos. Los vendedores tienen acceso a paneles de gestión, publicación de artículos y chats con clientes.",
        codigoEjemplo: `Se utilizó XAMPP como entorno de desarrollo local y phpMyAdmin para la administración de la base de datos.\n
El backend fue desarrollado en PHP con integración a SQL.`
    },
    {
        ID_Proyecto: '6',
        titulo: "Tilted Reviews",
        descripcion: "Plataforma social para calificación y reseña de videojuegos.",
        tecnologias: ["React", "SQL"],
        descripcionCorta: "Aplicación web para que los usuarios reseñen, califiquen y compartan videojuegos.",
        imagenes: ['/img/Screen1_3.png', '/img/Screen2_3.png', '/img/Screen3_3.png', '/img/Screen4_3.png'],
        imagenPromo: ['/img/Screen4_3.png'],
        descripcionLarga: "Portal en el que los jugadores pueden registrar cuentas, publicar reseñas de videojuegos, guardar títulos como favoritos, calificarlos y comentar. También permite explorar las listas y opiniones de otros usuarios.",
        codigoEjemplo: `Se empleó XAMPP como entorno de prueba y phpMyAdmin para la base de datos.\n
El frontend fue desarrollado en React y se integró con una base de datos SQL.`
    },
    {
        ID_Proyecto: '7',
        titulo: "Mejora a Los Legendarios",
        descripcion: "Proyecto personal para rediseñar y optimizar la página web de Los Legendarios.",
        tecnologias: ["Netbeans", "Java"],
        descripcionCorta: "Rediseño web con enfoque en estética y experiencia de usuario, desarrollado como proyecto personal.",
        imagenes: ['/img/Screen1_4.png', '/img/Screen2_4.png', '/img/Screen3_4.png', '/img/Screen4_4.png'],
        imagenPromo: ['/img/Screen2_4.png'],
        descripcionLarga: "Sitio web con mejoras en la interfaz visual y usabilidad. Incluye módulos de menú, facturación, promociones y localización de sucursales.",
        codigoEjemplo: `Se utilizó NetBeans con servidor Tomcat para la implementación.\n
El backend fue desarrollado en Java con MySQL como base de datos.`
    },
    {
        ID_Proyecto: '8',
        titulo: "VetBuddy",
        descripcion: "Aplicación móvil para reservas en clínicas veterinarias.",
        tecnologias: ["Kotlin", "Android Studio"],
        descripcionCorta: "App Android que permite a los usuarios registrar mascotas y reservar consultas veterinarias.",
        imagenes: ['/img/Screen1_5.png', '/img/Screen2_5.png', '/img/Screen3_5.png', '/img/Screen4_5.png'],
        imagenPromo: ['/img/Screen1_5.png'],
        descripcionLarga: "Aplicación en Android que permite a los usuarios gestionar sus mascotas y reservar citas con diferentes doctores veterinarios. La plataforma centraliza información de clientes y mascotas.",
        codigoEjemplo: `El desarrollo se realizó en Android Studio utilizando Kotlin.\n
La persistencia de datos se manejó en un servidor con phpMyAdmin.`
    },
    {
        ID_Proyecto: '9',
        titulo: "Punto de Venta para hotel",
        descripcion: "Sistema de gestión de ventas y reservaciones para hoteles.",
        tecnologias: ["SQL", "C#"],
        descripcionCorta: "Aplicación de escritorio para reservas, control de habitaciones y administración de clientes.",
        imagenes: ['/img/Screen1_6.png', '/img/Screen2_6.png', '/img/Screen3_6.png', '/img/Screen4_6.png', '/img/Screen5_6.png'],
        imagenPromo: ['/img/Screen2_6.png'],
        descripcionLarga: "Software para Windows que gestiona clientes, asignación de habitaciones y control de información administrativa. Los administradores pueden configurar habitaciones y supervisar la operación del hotel.",
        codigoEjemplo: `El sistema fue desarrollado en C# para Windows.\n
La base de datos se implementó en SQL.`
    },
    {
        ID_Proyecto: '10',
        titulo: "Videojuego Web",
        descripcion: "Videojuego 3D de disparos desarrollado para navegadores.",
        tecnologias: ["WebGL", "Three.js"],
        descripcionCorta: "Shooter 3D en navegador con modo multijugador local.",
        imagenes: ['/img/Screen1_7.png', '/img/Screen2_7.png', '/img/Screen3_7.png', '/img/Screen4_7.png'],
        imagenPromo: ['/img/Screen3_7.png'],
        descripcionLarga: "Juego en el que el usuario controla una nave que debe esquivar meteoritos y recolectar power-ups. Incluye soporte multijugador local para mayor dinamismo.",
        codigoEjemplo: `El lenguaje principal fue JavaScript.\n
Los gráficos 3D se desarrollaron con WebGL y Three.js.`
    },
    {
        ID_Proyecto: '11',
        titulo: "Aplicacion de edicion de imagenes y video",
        descripcion: "Software de escritorio para edición multimedia y reconocimiento en tiempo real.",
        tecnologias: ["C#"],
        descripcionCorta: "Aplicación de Windows para edición de fotos, videos y detección facial mediante cámara.",
        imagenes: ['/img/Screen1_8.png', '/img/Screen2_8.png', '/img/Screen3_8.png'],
        imagenPromo: ['/img/Screen1_8.png'],
        descripcionLarga: "Aplicación en Windows que permite importar imágenes y videos para aplicar filtros, realizar ediciones y activar la cámara con reconocimiento facial en tiempo real.",
        codigoEjemplo: `Desarrollado en Visual Studio 2022 utilizando C#.\n
Incluye integración con librerías de reconocimiento de imagen.`
    },
    {
        ID_Proyecto: '12',
        titulo: "Katastrofa",
        descripcion: "Shooter multijugador desarrollado en Unreal Engine 5.",
        tecnologias: ["Unreal Engine 5"],
        descripcionCorta: "Videojuego de disparos en tercera persona con temática de zombies.",
        imagenes: ['/img/Screen10_9.png', '/img/Screen11_9.png', '/img/Screen12_9.png', '/img/Screen1_9.png', '/img/Screen2_9.png'],
        imagenPromo: ['/img/Screen12_9.png'],
        descripcionLarga: "Juego multijugador en tercera persona donde los jugadores deben enfrentarse a equipos rivales mientras sobreviven a oleadas de zombies. Combina acción y estrategia en escenarios dinámicos.",
        codigoEjemplo: `Desarrollado en Unreal Engine 5.\n
Se utilizaron modelos propios y recursos externos.`
    },
    {
        ID_Proyecto: '13',
        titulo: "Pizza Grafica",
        descripcion: "Videojuego 3D de reparto de pizzas desarrollado en C++.",
        tecnologias: ["C++", "DirectX"],
        descripcionCorta: "Juego en el que el jugador debe entregar pizzas a tiempo para mantener su reputación.",
        imagenes: ['/img/Screen1_10.png', '/img/Screen2_10.png', '/img/Screen3_10.png', '/img/Screen4_10.png'],
        imagenPromo: ['/img/Screen1_10.png'],
        descripcionLarga: "El jugador asume el rol de repartidor de pizzas y debe cumplir con las entregas antes de que el tiempo expire, evitando perder reputación en el proceso.",
        codigoEjemplo: `Se utilizó Visual Studio 2022 con DirectX para el desarrollo de los gráficos.\n
El lenguaje principal fue C++ complementado con HLSL.`
    },
    {
        ID_Proyecto: '14',
        titulo: "Simulador de alturas",
        descripcion: "Experiencia de realidad virtual en Unreal Engine 5 para enfrentar el miedo a las alturas.",
        tecnologias: ["Unreal Engine 5", "Realidad Virtual"],
        descripcionCorta: "Simulador VR diseñado para ayudar a usuarios a superar la acrofobia.",
        imagenes: ['/img/Screen1_11.png', '/img/Screen2_11.png', '/img/Screen3_11.png', '/img/Screen4_11.png'],
        imagenPromo: ['/img/Screen3_11.png'],
        descripcionLarga: "El jugador camina por una tabla suspendida a gran altura en un entorno de realidad virtual. El objetivo es brindar una experiencia controlada que apoye en la superación del miedo a las alturas.",
        codigoEjemplo: `El desarrollo se realizó en Unreal Engine 5 con soporte de realidad virtual.`
    },
    {
        ID_Proyecto: '15',
        titulo: "Documentacion",
        descripcion: "Documentación técnica y de ciberseguridad para simulaciones empresariales.",
        tecnologias: ["Documentación"],
        descripcionCorta: "Compendio de documentación integral para un proyecto ficticio de SEDESOL.",
        imagenes: ['/img/Screen1_12.png', '/img/Screen2_12.png', '/img/Screen5_12.png', '/img/Screen3_12.png', '/img/Screen4_12.png', '/img/Screen6_12.png', '/img/Screen7_12.png', '/img/Screen8_12.png', '/img/Screen9_12.png', '/img/Screen10_12.png', '/img/Screen11_12.png', '/img/Screen12_12.png', '/img/Screen13_12.png'],
        imagenPromo: ['/img/Screen5_12.png'],
        descripcionLarga: "Documentación completa de un proyecto simulado, con énfasis en ciberseguridad, cumplimiento normativo, gestión de calidad y planes de recuperación. Incluye manuales, matrices, propuestas técnicas y reportes de avance.",
        codigoEjemplo: `La documentación incluye:\n
- Políticas de Ciberseguridad (contraseñas, accesos, gestión de incidentes)\n
- Documentación de Desarrollo (backlog, sprints, HLD, propuesta técnica)\n
- Gestión de Calidad (ISO 27001, garantías, aviso de privacidad)\n
- Operaciones (BCP, DRP, KPI, minutas)\n
- RFC y entornos cloud (arquitectura, contenedores, SLA, análisis de riesgos)\n
- Facturación y propuestas comerciales\n
- SOW (definición de alcances y entregables)`
    }
];

export default proyectos;
