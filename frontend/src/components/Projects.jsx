

const Projects = () => {
  const projects = [
    {
      title: "ITManufacturing",
      description: [
        "Manufacturing",
        "In corporation",
        "Manufacturer"
      ]
    },
    {
      title: "E-commerce Platform",
      description: [
        "Framestend an lingering",
        "constesill on optimal."
      ]
    },
    {
      title: "React",
      description: ["TS"]
    },
    {
      title: "Task Management Tool",
      description: ["For-aptnie professfam."]
    },
    {
      title: "express",
      description: ["AWS"]
    }
  ];

  return (
    <section className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <ul>
              {project.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;