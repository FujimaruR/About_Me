import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { Link } from "react-router-dom";

export default function Card_Proyecto({ proyecto, variant }) {
  useSiteLocale();
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
        <img src={imgSrc} alt={localizeText(proyecto.titulo)} className="project-card__img" />
      </div>

      <div className="project-card__body">
        <div className="d-flex align-items-start justify-content-between gap-2">
          <h5 className="project-card__title mb-1">{localizeText(proyecto.titulo)}</h5>
          {variant === "featured" && (
            <span className="badge rounded-pill text-bg-primary">{tr("text.16a2f62227")}</span>
          )}
        </div>

        <p className="project-card__desc mb-3">
          {localizeText(proyecto.descripcionCorta || proyecto.descripcion)}
        </p>

        <div className="d-flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tech, i) => (
            <span key={i} className="badge rounded-pill project-badge">
              {localizeText(tech)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
