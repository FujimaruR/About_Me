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
    },
    {
        ID_Proyecto: '7',
        titulo: "Videojuego Web",
        descripcion: "Videojuego web.",
        tecnologias: ["HTML", "Graficas computacionales"],
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
    },
    {
        ID_Proyecto: '10',
        titulo: "Videojuego",
        descripcion: "Videojuego hecho para computadoras de pizzeria.",
        tecnologias: ["C++"],
    },
    {
        ID_Proyecto: '11',
        titulo: "Videojuego",
        descripcion: "Videojuego hecho para computadoras de visual novel.",
        tecnologias: ["C++"],
    },
    {
        ID_Proyecto: '12',
        titulo: "Videojuego",
        descripcion: "Videojuego hecho para computadoras de misterio.",
        tecnologias: ["C++"],
    },
    {
        ID_Proyecto: '13',
        titulo: "Realidad virtual",
        descripcion: "Videojuego de realidad virtual hecho en unreal engine 5.",
        tecnologias: ["Unreal engine 5"],
    }
];

export default proyectos;
