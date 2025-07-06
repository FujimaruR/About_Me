
import Card_Proyecto from '../components/Card_Proyecto';

const Projects = () => {
  const proyectos = [
    {
      titulo: "Calificaciones FIME",
      descripcion: "Proyecto requerido por FIME para calificacion de maestros en cursos.",
      tecnologias: ["React", "AWS"],
    },
    {
      titulo: "E-commerce Estilo Aliexpress",
      descripcion: "Pagina web estilo Aliexpress.",
      tecnologias: ["PHP", "Xampp"],
    },
    {
      titulo: "Calificador de videojuegos",
      descripcion: "Pagina web hecha para calificacion de videojuegos.",
      tecnologias: ["React", "Xampp"],
    },
    {
      titulo: "Mejora a pagina web",
      descripcion: "Pagina web hecha para mejorar otra pagina web.",
      tecnologias: ["Netbeans", "Java"],
    },
    {
      titulo: "Aplicacion para andriod",
      descripcion: "Apliacion para reservas en una veterinaria.",
      tecnologias: ["Kotlin", "Android studio"],
    },
    {
      titulo: "Aplicacion tipo discord",
      descripcion: "Pagina web hecha con estilo discord.",
      tecnologias: ["React", "Xampp"],
    },
    {
      titulo: "Punto de Venta",
      descripcion: "Software para punto de venta estilo oxxo.",
      tecnologias: ["No Sql", "C#"],
    },
    {
      titulo: "Punto de Venta para hotel",
      descripcion: "Software para punto de venta y reservaciones de un hotel.",
      tecnologias: ["SQL", "C#"],
    },
    {
      titulo: "Videojuego Web",
      descripcion: "Videojuego web.",
      tecnologias: ["HTML", "Graficas computacionales"],
    },
    {
      titulo: "Aplicacion de edicion de imagenes y video",
      descripcion: "Software para edicion de imagenes y video.",
      tecnologias: ["C#"],
    },
    {
      titulo: "Katastrofa",
      descripcion: "Videojuego de disparos hecho en unreal engine 5.",
      tecnologias: ["Unreal Engine 5"],
    },
    {
      titulo: "Videojuego",
      descripcion: "Videojuego hecho para computadoras de pizzeria.",
      tecnologias: ["C++"],
    },
    {
      titulo: "Videojuego",
      descripcion: "Videojuego hecho para computadoras de visual novel.",
      tecnologias: ["C++"],
    },
    {
      titulo: "Videojuego",
      descripcion: "Videojuego hecho para computadoras de misterio.",
      tecnologias: ["C++"],
    },
    {
      titulo: "Realidad virtual",
      descripcion: "Videojuego de realidad virtual hecho en unreal engine 5.",
      tecnologias: ["Unreal engine 5"],
    },
  ];

  return (
    <section id="projects" className="p-5">
        <h2 className="mb-4 text-white">Proyectos</h2>
        <div className="row mt-3">
            {proyectos.map((proyecto, index) => (
                        <Card_Proyecto key={index} proyecto={proyecto} className='col-md-4 mt-3' />
                    ))}
        </div>
      </section>
  );
};

export default Projects;