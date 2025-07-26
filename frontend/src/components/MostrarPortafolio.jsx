
const MostrarPortafolio = () => {

    return (
        <section className="container my-5">
            <div className="row">
                {/* Carrusel de imágenes del proyecto */}
                <div id="carouselExampleIndicators" className="carousel slide col-lg-6 mb-4">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100 rounded"
                                src="/ruta/a/imagen1.jpg"
                                alt="Primera imagen"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100 rounded"
                                src="/ruta/a/imagen1.jpg"
                                alt="Primera imagen"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100 rounded"
                                src="/ruta/a/imagen1.jpg"
                                alt="Primera imagen"
                            />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                {/* Información del proyecto */}
                <div className="col-lg-6 text-white d-flex flex-column justify-content-center">
                    <h2 className="text-primary">Nombre del Proyecto</h2>
                    <p className="lead">Descripción corta de lo que trata el proyecto. Qué hace, por qué lo hiciste, qué tecnologías usaste, etc.</p>
                </div>
            </div>

            {/* Explicación completa del proyecto */}
            <div className="mt-5 text-white">
                <h3>Detalles del proyecto</h3>
                <p>Aquí puedes explicar a fondo cómo hiciste el proyecto, qué retos resolviste, cómo lo organizaste, etc.</p>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img src="/ruta/a/captura1.jpg" alt="captura 1" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 mb-4">
                        <pre className="bg-dark text-white p-3 rounded">
                            {`// Ejemplo de código
function ejemplo() {
  console.log('Hola mundo');
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MostrarPortafolio;