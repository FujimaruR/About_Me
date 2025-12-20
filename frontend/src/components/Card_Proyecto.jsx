import { Link } from "react-router-dom";

export default function Card_Proyecto({ proyecto, variant }) {
  const imgSrc = Array.isArray(proyecto.imagenPromo)
    ? proyecto.imagenPromo[0]
    : proyecto.imagenPromo;

  return (
    <Link
      to={`/Portafolio/${proyecto.ID_Proyecto}`}
      className={`project-card ${variant === "featured" ? "project-card--featured" : ""}`}
      style={{ textDecoration: "none" }}
    >
      <div className="project-card__imgWrap">
        <img src={imgSrc} alt={proyecto.titulo} className="project-card__img" />
      </div>

      <div className="project-card__body">
        <div className="d-flex align-items-start justify-content-between gap-2">
          <h5 className="project-card__title mb-1">{proyecto.titulo}</h5>
          {variant === "featured" && (
            <span className="badge rounded-pill text-bg-primary">Destacado</span>
          )}
        </div>

        <p className="project-card__desc mb-3">
          {proyecto.descripcionCorta || proyecto.descripcion}
        </p>

        <div className="d-flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tech, i) => (
            <span key={i} className="badge rounded-pill project-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
