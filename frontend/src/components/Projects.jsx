
import Card_Proyecto from '../components/Card_Proyecto';
import proyectos from '../proyectos/projects';

const Projects = () => {

  /*const proyecto = proyectos.find(p => p.ID_Proyecto === ID_Proyecto);*/

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