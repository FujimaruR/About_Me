import { useSearchParams } from 'react-router-dom';
import proyectos from '../proyectos/projects';
import { Carousel } from 'react-bootstrap';

const MostrarPortafolio = () => {

    const [params] = useSearchParams();
    const id = params.get('id');
    const proyecto = proyectos.find(p => p.ID_Proyecto === id);

    if (!proyecto) {
        return <div className="text-white p-5">Proyecto no encontrado.</div>;
    }

    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <Carousel>
                        {proyecto.imagenes.map((src, i) => (
                            <Carousel.Item key={i}>
                                <img className="d-block w-100 rounded" src={src} alt={`Imagen ${i + 1}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>

                <div className="col-lg-6 text-white d-flex flex-column justify-content-center">
                    <h2 className="text-primary">{proyecto.titulo}</h2>
                    <p className="lead">{proyecto.descripcionCorta}</p>
                </div>
            </div>

            {/* Explicación completa del proyecto */}
            <div className="mt-5 text-white">
                <h3>Detalles del proyecto</h3>
                <p>{proyecto.descripcionLarga}</p>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src={proyecto.imagenes[2]} alt="captura" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <pre className="bg-dark text-white p-3 rounded">
                            <h3 className="text-primary">Tecnologias usadas en este desarrollo</h3>
                            {proyecto.codigoEjemplo}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostrarPortafolio;