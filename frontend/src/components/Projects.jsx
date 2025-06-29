

const Projects = () => {
  const proyectos = [
    {
      titulo: "ITManufacturing",
      descripcion: "In corporation Manufacturer",
      tecnologias: ["Brand"],
    },
    {
      titulo: "E-commerce Platform",
      descripcion: "Frontend and linparing constestil on-optimal.",
      tecnologias: ["React", "TypeScript"],
    },
    {
      titulo: "Task Management Tool",
      descripcion: "For-aptniie professfam.",
      tecnologias: ["Express", "AWS"],
    },
  ];

  return (
    <section id="projects" className="p-5">
        <h2 className="mb-4 text-white">Proyectos</h2>
        <div className="row">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 bg-dark text-white border border-secondary">
                <div className="card-body">
                  <h5 className="card-title text-primary">{proyecto.titulo}</h5>
                  <p className="card-text">{proyecto.descripcion}</p>
                  <div>
                    {proyecto.tecnologias.map((tech, i) => (
                      <span key={i} className="badge bg-primary me-2">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Projects;