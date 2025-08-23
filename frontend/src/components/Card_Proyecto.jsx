import { Link } from 'react-router-dom';

const Card_Proyecto = ({ proyecto }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 bg-dark text-white border border-secondary">
                <div className="card-body">
                    <Link to={`/Portafolio?id=${proyecto.ID_Proyecto}`} style={{ textDecoration: 'none', color: 'white', weight: 'bold' }}>
                    <h5 className="card-title text-primary">{proyecto.titulo}</h5>
                    <p className="card-text">{proyecto.descripcion}</p>
                    <div>
                        {proyecto.tecnologias.map((tech, i) => (
                            <span key={i} className="badge bg-primary me-2">{tech}</span>
                        ))}
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card_Proyecto;