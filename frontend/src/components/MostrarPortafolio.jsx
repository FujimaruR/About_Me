import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { motion as Motion } from "framer-motion";
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
  useSiteLocale();
    const { id } = useParams();

    const proyecto = proyectos.find(
        (p) => String(p.ID_Proyecto) === String(id)
    );


    if (!proyecto) {
        return (
            <section className="section-wrap section-bg-2">
                <div className="container">
                    <div className="alert alert-light border"> {tr("text.fe7070be78")}{localizeText(" ")}
                        <Link to="/Proyectos" className="alert-link"> {tr("text.9ecdf4f641")} </Link>
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
                    <Link to="/Proyectos" className="btn btn-outline-primary rounded-pill px-3"> {tr("text.c69a2fee98")} </Link>

                    <div className="d-flex gap-2">
                        {github && (
                            <a className="btn btn-outline-primary rounded-pill px-3" href={github} target="_blank" rel="noreferrer"> {tr("text.5442e2b64f")} </a>
                        )}
                        {demo && (
                            <a className="btn btn-primary rounded-pill px-3" href={demo} target="_blank" rel="noreferrer"> {tr("text.10ea8c53b0")} </a>
                        )}
                    </div>
                </div>

                {/* Header */}
                <Motion.div
                    className="project-hero mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <div className="project-kicker">{tr("text.81a05566b3")}</div>
                    <h1 className="project-title">{localizeText(proyecto.titulo)}</h1>
                    <p className="project-subtitle">{localizeText(proyecto.descripcionCorta)}</p>

                    <div className="d-flex flex-wrap gap-2 mt-2">
                        {(proyecto.tecnologias || []).map((t) => (
                            <span key={t} className="project-badge">
                                {localizeText(t)}
                            </span>
                        ))}
                    </div>
                </Motion.div>

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
                                            alt={localizeText(tr("template.14501dae8a", {v0: localizeText(proyecto.titulo), v1: localizeText(i + 1)}))}
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
                            <h3 className="project-section-title">{tr("text.35414e5322")}</h3>
                            <p className="project-text">{localizeText(proyecto.descripcion)}</p>

                            <p className="project-text">{tr('text.2cf35c7a37')}</p>
                            <div className="project-divider" />

                            <h3 className="project-section-title">{tr("text.b1bb8ea50e")}</h3>
                            <p className="project-text">{localizeText(proyecto.descripcionLarga)}</p>

                            {promo && (
                                <>
                                    <div className="project-divider" />
                                    <h3 className="project-section-title">{tr("text.39f8c37c36")}</h3>
                                    <img src={promo} alt={tr("text.ac4995a792")} className="img-fluid rounded-4 mt-2" loading="lazy" />
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
                                <h3 className="project-section-title mb-0">{tr("text.610fd6d28a")}</h3>
                                <span className="text-muted small">{tr("text.b071a2de11")}</span>
                            </div>

                            <pre className="project-pre mt-3">
                                {localizeText(proyecto.codigoEjemplo)}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
