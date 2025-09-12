const proyectos = [
    {
        ID_Proyecto: '1',
        titulo: "Reportes FIME",
        descripcion: "Proyecto requerido por FIME para calificación de maestros en cursos.",
        tecnologias: ["React", "AWS"],
        descripcionCorta: "Desarrollo en React para FIME con la finalidad de facilitar la calificación de alumnos.",
        imagenes: ['/img/Screen1_1.png', '/img/Screen2_1.png', '/img/Screen3_1.png'],
        descripcionLarga: "Este desarrollo web fue creado para para que los maestros puedan calificar a los alumnos y se pueda tener un registro completo del curso. Ademas de encuestas a estos alumnos sobre los cursos que se llevaron y la administracion de informacion sobre los cursos.",
        codigoEjemplo: `Las tecnologias que se usaron fue el uso de react y node.js, ademas de la base de datos en SQL para la gestion de informacion.\n
Este desarrollo fue especialmente un reto para mi, ya que ademas se tuvo que hacer uso de una maquina virtual en linux en EC2 de AWS para hostear el desarrollo.`
    },
    {
        ID_Proyecto: '2',
        titulo: "Micherry",
        descripcion: "Pagina web estilo Aliexpress.",
        tecnologias: ["PHP", "SQL"],
        descripcionCorta: 'Desarrollo web de plataforma estilo e-commerce basada en aliexpress para compra y venta.',
        imagenes: ['/img/Screen1_2.png', '/img/Screen2_2.png', '/img/Screen4_2.png', '/img/Screen3_2.png', '/img/Screen5_2.png'],
        descripcionLarga: 'Pagina web estilo e-commerce para la compra y venta de productos. En esta pagina puedes ingresar como usuario para comprar, guardar y comentar productos, ademas de poder vender productos y tener chats de vendedor y cliente. ',
        codigoEjemplo: `Se hizo uso de xampp como hosting local de la pagina, ademas de phpmyadmin para la base de datos.\n
La pagina esta en el lenguaje de PHP.`
    },
    {
        ID_Proyecto: '3',
        titulo: "Tilted Reviews",
        descripcion: "Pagina web hecha para calificar videojuegos.",
        tecnologias: ["React", "SQL"],
        descripcionCorta: 'Desarrollo web de plataforma para calificar videojuegos.',
        imagenes: ['/img/Screen1_3.png', '/img/Screen2_3.png', '/img/Screen4_3.png', '/img/Screen3_3.png'],
        descripcionLarga: 'Pagina web para calificar videojuegos. En esta pagina puedes ingresar como usuario y reseñar videojuegos, guardar tus favoritos, comentarlos y calificarlos. Ademas de poder ver las listas de otros usuarios. ',
        codigoEjemplo: `Se hizo uso de xampp como hosting local de la pagina, ademas de phpmyadmin para la base de datos.\n
La pagina esta en el lenguaje de React.`
    },
    {
        ID_Proyecto: '4',
        titulo: "Mejora a Los Legendarios",
        descripcion: "Pagina web hecha para mejorar la pagina web de Los Legendarios.",
        tecnologias: ["Netbeans", "Java"],
        descripcionCorta: 'Desarrollo web personal para mejorar la pagina web de Los Legendarios a una con mejor estetica. Este proyecto es completamente personal y no se realizo en colaboracion con Los Legendarios.',
        imagenes: ['/img/Screen2_4.png', '/img/Screen1_4.png', '/img/Screen4_4.png', '/img/Screen3_4.png'],
        descripcionLarga: 'Pagina web con el proposito de darle mejor estetica a una pagina web. En esta pagina web se puede ver el menu, facturar, ver promociones y locaciones. ',
        codigoEjemplo: `Se hizo uso de netbeans con tomcat para este desarrollo web en el lenguaje de java. \n
Para la base de datos se uso mysql.`
    },
    {
        ID_Proyecto: '5',
        titulo: "VetBuddy",
        descripcion: "Apliacion para reservas en una veterinaria.",
        tecnologias: ["Kotlin", "Android studio"],
        descripcionCorta: 'Aplicacion para android en la que un usuario puede hacer reservaciones en una veterinaria para consultar a sus mascotas.',
        imagenes: ['/img/Screen1_5.png', '/img/Screen2_5.png', '/img/Screen3_5.png', '/img/Screen4_5.png'],
        descripcionLarga: 'Aplicacion en android con el proposito de que los usuarios puedan reservar en una veterinaria. El usuario puede agregar a sus mascotas y escoger con que doctor consultar.',
        codigoEjemplo: `Se uso Android studio para el desarrollo de esta app y kotlin como el lenguaje de la app.\n
para la base de datos se uso un servidor con php myadmin para hostear la informacion.`
    },
    {
        ID_Proyecto: '6',
        titulo: "Punto de Venta para hotel",
        descripcion: "Software para punto de venta y reservaciones de un hotel.",
        tecnologias: ["SQL", "C#"],
        descripcionCorta: 'Aplicacion para hacer las reservaciones de un cliente.',
        imagenes: ['/img/Screen1_6.png', '/img/Screen2_6.png', '/img/Screen3_6.png', '/img/Screen4_6.png', '/img/Screen5_6.png'],
        descripcionLarga: 'Aplicacion para windows en la que se puede reservar a un cliente que se quiere ospedar en el hotel. El usuario puede agregar clientes, revisar toda su informacion, asignarle habitacion y un administrador puede configurar los cuartos de hotel.',
        codigoEjemplo: `Se uso C# como el lenguaje principal de este proyecto.\n
Para la base de datos de uso SQL.`
    },
    {
        ID_Proyecto: '7',
        titulo: "Videojuego Web",
        descripcion: "Videojuego web.",
        tecnologias: ["WebGL", "Three.js"],
        descripcionCorta: 'Videojuego web de disparos.',
        imagenes: ['/img/Screen1_7.png', '/img/Screen2_7.png', '/img/Screen3_7.png', '/img/Screen4_7.png'],
        descripcionLarga: 'Videojuego 3D web en el que el usuario maneja una nave que debe de evitar ser golpeada por meteoritos y agarrar poweups por el mayor tiempo que pueda. Tambien tiene multijugador local.',
        codigoEjemplo: `Se uso JavaScript como el lenguaje principal de este videojuego.\n
Para los graficos 3D se uso WebGL y Three.js.`
    },
    {
        ID_Proyecto: '8',
        titulo: "Aplicacion de edicion de imagenes y video",
        descripcion: "Software para edicion de imagenes y video.",
        tecnologias: ["C#"],
        descripcionCorta: 'Aplicacion para windows en la que el usuario puede editar fotos, videos y reconocer personas en camara.',
        imagenes: ['/img/Screen1_8.png', '/img/Screen3_8.png', '/img/Screen2_8.png'],
        descripcionLarga: 'Aplicacion en windows para que el usuario pueda agregar una imagen o video, editarla y agregarle filtros. Tambien puede activar la camara y detectar personas a traves de la camara.',
        codigoEjemplo: `Se uso visual studio 2022 para el desarrollo de esta aplicacion.\n
El lenguaje usado es C#.`
    },
    {
        ID_Proyecto: '9',
        titulo: "Katastrofa",
        descripcion: "Videojuego de disparos hecho en unreal engine 5.",
        tecnologias: ["Unreal Engine 5"],
        descripcionCorta: 'Shooter de zombies en unreal engine 5.',
        imagenes: ['/img/Screen10_9.png', '/img/Screen11_9.png', '/img/Screen12_9.png', '/img/Screen1_9.png', '/img/Screen2_9.png'],
        descripcionLarga: 'Videojuego de disparos en tercera persona, en la que debes de acabar con el equipo enemigo y escapar de los zombies. Es multijugador.',
        codigoEjemplo: `Se uso unreal engine 5 para el desarrollo de este juego.\n
Tambien se uso modelos propios, asi como de internet.`
    },
    {
        ID_Proyecto: '10',
        titulo: "Pizza Grafica",
        descripcion: "Videojuego hecho para computadoras de entregar pizza.",
        tecnologias: ["C++", "DirectX"],
        descripcionCorta: 'Aplicacion para windows con la finalidad de ser un videojuego 3d de entrega de pizzas.',
        imagenes: ['/img/Screen1_10.png', '/img/Screen2_10.png', '/img/Screen3_10.png', '/img/Screen4_10.png'],
        descripcionLarga: 'En este juego tu mision es ser un repartidor de pizzas. Debes de entregar la pizza antes de que acabe el tiempo o tu reputacion bajara.',
        codigoEjemplo: `Se uso visual studio 2022 con DirectX para los graficos por computadora.\n
El lenguaje es C++ y se complemento con HLSL.`
    },
    {
        ID_Proyecto: '11',
        titulo: "Simulador de alturas",
        descripcion: "Simulador de alturas en realidad virtual hecho en unreal engine 5.",
        tecnologias: ["Unreal engine 5", "Realidad virtual"],
        descripcionCorta: 'Videojuego de simulador de alturas para ayudar a perderle miedo a las alturas.',
        imagenes: ['/img/Screen1_11.png', '/img/Screen2_11.png', '/img/Screen3_11.png', '/img/Screen4_11.png'],
        descripcionLarga: 'En este juego de realidad virtual solamente debes de pasar caminando por una gran tabla. El proposito es ayudar a las personas con miedo a las alturas a superarlo.',
        codigoEjemplo: `Se uso unreal engine 5 para el desarrollo de este juego.`
    },
    {
        ID_Proyecto: '12',
        titulo: "Documentacion",
        descripcion: "Documentacion de simulacion.",
        tecnologias: ["Documentacion"],
        descripcionCorta: 'Documentacion de simulacion para un desarrollo para la empresa SEDESOL.',
        imagenes: ['/img/Screen1_12.png', '/img/Screen2_12.png', '/img/Screen3_12.png', '/img/Screen4_12.png'],
        descripcionLarga: 'Documentacion completa para un desarrollo ficticio con la intencion de aprender a hacer documentacion completa.',
        codigoEjemplo: `Lista completa de la documentacion.\n
CiberSeguridad\n
- Acceso_Contraseñas\n
- CiberSeguridad\n
- Copia_Seguridad_Recuperación\n
- Gestión_Datos_Sensibles\n
- Hardware_Almacenamiento_Móvil\n
- Política_Control_Físico_Acceso\n
- Política_Seguridad_Información\n
- Respuesta_Escalamiento_Incidentes\n
- Seguridad_Responsabilidades_Empleado\n

Documentación General\n
- Afirmaciones_Clave\n
- Manual_Gobierno\n
- Matriz_Escalacion\n

Desarrollo\n
- Definicion_Proyecto\n
- Carta_Inicio_Proyecto\n
- FrameWorks\n
- Impi\n
- Propuesta_Economica\n
- Propuesta_Solución\n
- Propuesta_Técnica\n
- Riesgos_y_Consideraciones\n
- SLA_SLO_SLI\n
- Sprints\n
- Stakeholders\n
- Plan_Trabajo\n
- Plan_Trabajo_Detallado\n
- Contrato\n
- Propiedad_Intelectual\n
- Backlog\n
- HLD\n
- Organigrama\n

Gestión de Calidad\n
- Calidad\n
- ISO_27001\n
- Poliza_Garantia\n
- Código_Etica\n
- Aviso_Privacidad\n

Operaciones\n
- BCP\n
- DRP\n
- KPI\n
- Minutas\n

RFC Cloud\n
- Analisis_Riesgos\n
- Arquitectura_Entorno\n
- Contenedores_Serverless\n
- Legal_Normativo\n
- Seguridad_Nube\n
- SLA\n
- Seguridad_Datos_Nube\n
- RollBack\n
- Propuesta_Final\n
- Plan_Recuperacion_Anti_Desastres\n
- PID\n
- Gestion_Cambios\n
- Firmas\n
- Falla\n
- Solucion\n

Propuesta Cloud Environment\n
- Marco_Legal_Cumplimiento_Normativo\n
- Pagos_Licencias_BYOK_BYOIP_BYOL\n
- Firmas\n
- Especificaciones_Infraestructura_Cloud\n
- Arquitectura_Serverless_Baremetal\n
- Técnica_Integración_Greenfield\n
- Requisitos_Funcionales_Técnicos\n
- Plan_Implementación_CDN_Balanceadores_Firewalls\n
- Plan_Gestión_Incidentes_Recuperación\n

Facturacion\n
- Factura\n
- Propiedad_IntelectuaL\n
- Registro_Fiscal\n
- Carta_Sat\n

Reportes de avance y control\n
- Uso_Recursos\n
- Problemas_Soluciones\n

SOW\n
- SoW_Desarrollo_Software\n
- SoW_DRP_BCP\n
- SoW_Gestión_Monitoreo\n
- SoW_Implementación_Seguridad\n
- SoW_Infraestructura_Cloud\n
`
    }
];

export default proyectos;
