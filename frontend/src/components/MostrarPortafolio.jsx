import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import proyectos from "../proyectos/projects";

function safeImg(img) {
    return Array.isArray(img) ? img[0] : img;
}

function extractLinks(text = "") {
    // Saca links simples de tu string codigoEjemplo (por si viene "Link de GitHub: ...")
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = text.match(urlRegex) || [];
    const github = urls.find((u) => u.includes("github.com"));
    const demo = urls.find((u) => !u.includes("github.com"));
    return { github, demo };
}

export default function MostrarPortafolio() {
    const { id } = useParams();

    const proyecto = proyectos.find(
        (p) => String(p.ID_Proyecto) === String(id)
    );


    if (!proyecto) {
        return (
            <section className="section-wrap section-bg-2">
                <div className="container">
                    <div className="alert alert-light border">
                        Proyecto no encontrado.{" "}
                        <Link to="/Proyectos" className="alert-link">
                            Volver a proyectos
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const promo = safeImg(proyecto.imagenPromo);
    const { github, demo } = extractLinks(proyecto.codigoEjemplo);

    return (
        <section className="section-wrap section-bg-2">
            <div className="container">
                {/* Top bar */}
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <Link to="/Proyectos" className="btn btn-outline-primary rounded-pill px-3">
                        ← Volver
                    </Link>

                    <div className="d-flex gap-2">
                        {github && (
                            <a className="btn btn-outline-primary rounded-pill px-3" href={github} target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                        )}
                        {demo && (
                            <a className="btn btn-primary rounded-pill px-3" href={demo} target="_blank" rel="noreferrer">
                                Ver demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Header */}
                <motion.div
                    className="project-hero mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <div className="project-kicker">Case Study</div>
                    <h1 className="project-title">{proyecto.titulo}</h1>
                    <p className="project-subtitle">{proyecto.descripcionCorta}</p>

                    <div className="d-flex flex-wrap gap-2 mt-2">
                        {(proyecto.tecnologias || []).map((t) => (
                            <span key={t} className="project-badge">
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Main grid */}
                <div className="row g-4 align-items-start">
                    {/* Carousel */}
                    <div className="col-12 col-lg-7">
                        <div className="project-card">
                            <Carousel className="project-carousel">
                                {(proyecto.imagenes || []).map((src, i) => (
                                    <Carousel.Item key={i}>
                                        <img
                                            className="d-block w-100 project-carousel-img"
                                            src={src}
                                            alt={`${proyecto.titulo} - Imagen ${i + 1}`}
                                            loading="lazy"
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-12 col-lg-5">
                        <div className="project-card project-sticky">
                            <h3 className="project-section-title">Resumen</h3>
                            <p className="project-text">{proyecto.descripcion}</p>

                            <div className="project-divider" />

                            <h3 className="project-section-title">Detalles</h3>
                            <p className="project-text">{proyecto.descripcionLarga}</p>

                            {promo && (
                                <>
                                    <div className="project-divider" />
                                    <h3 className="project-section-title">Vista destacada</h3>
                                    <img src={promo} alt="Captura destacada" className="img-fluid rounded-4 mt-2" loading="lazy" />
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Code / notes */}
                <div className="row g-4 mt-2">
                    <div className="col-12">
                        <div className="project-card">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                <h3 className="project-section-title mb-0">Tecnologías y notas</h3>
                                <span className="text-muted small">Resumen técnico</span>
                            </div>

                            <pre className="project-pre mt-3">
                                {proyecto.codigoEjemplo}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
