import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { useMemo, useState } from "react";
import Card_Proyecto from "../components/Card_Proyecto";
import proyectos from "../proyectos/projects";

export default function AllProjects() {
  useSiteLocale();
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState("Todas");

  // ✅ orden por ID DESC (más nuevo primero)
  const proyectosOrdenados = useMemo(() => {
    return [...proyectos].sort(
      (a, b) => Number(b.ID_Proyecto) - Number(a.ID_Proyecto)
    );
  }, []);

  // Sacar tecnologías únicas para el filtro
  const techOptions = useMemo(() => {
    const set = new Set();
    proyectosOrdenados.forEach((p) => p.tecnologias?.forEach((t) => set.add(t)));
    return ["Todas", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [proyectosOrdenados]);

  // Filtro por búsqueda + tecnología
  const q = query.trim().toLowerCase();
  const filtrados = proyectosOrdenados.filter((p) => {
      const matchesQuery =
        !q ||
        localizeText(p.titulo)?.toLowerCase().includes(q) ||
        localizeText(p.descripcion)?.toLowerCase().includes(q) ||
        localizeText(p.descripcionCorta)?.toLowerCase().includes(q) ||
        (p.tecnologias || []).some((t) => t.toLowerCase().includes(q));

      const matchesTech = tech === "Todas" || (p.tecnologias || []).includes(tech);

      return matchesQuery && matchesTech;
  });

  return (
    <section className="section-wrap section-bg-2" id="all-projects">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
          <div>
            <h2 className="section-title mb-2">{tr("text.8541c1877e")}</h2>
            <p className="section-subtitle mb-0"> {tr("text.b640f4a98f")} </p>
          </div>

          {/* Controls */}
          <div className="d-flex flex-column flex-sm-row gap-2">
            <input
              className="form-control rounded-pill px-3"
              style={{ minWidth: 260 }}
              aria-label={tr("text.939d6a3481")} placeholder={tr("text.ebdacf68db")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <select
              aria-label={tr("text.e6255a1d49")} className="form-select rounded-pill px-3"
              style={{ minWidth: 200 }}
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              {techOptions.map((t) => (
                <option key={t} value={t}>
                  {localizeText(t)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Counter */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <span className="text-muted small"> {tr("text.2d2dce4804")} <b>{localizeText(filtrados.length)}</b> {tr("text.600ccd1b71")} <b>{localizeText(proyectosOrdenados.length)}</b>
          </span>

          {(query || tech !== "Todas") && (
            <button
              className="btn btn-outline-primary btn-sm rounded-pill px-3"
              onClick={() => {
                setQuery("");
                setTech("Todas");
              }}
            > {tr("text.d3126bccac")} </button>
          )}
        </div>

        {['development', 'games'].map(category => {
  const group = filtrados.filter(p => (['2','3','4','6'].includes(String(p.ID_Proyecto)) ? 'games' : 'development') === category);
  return <div key={category} className="mt-5">
    <h3 className="h4 fw-bold mb-3">{localizeText(category === 'games' ? 'Proyectos de videojuegos' : 'Proyectos de desarrollo')}</h3>
    {group.length === 0 ? <p role="status">{tr("text.308bfb3162")}</p> :
      <div className="row g-4">{group.map(proyecto => <div key={proyecto.ID_Proyecto} className="col-12 col-md-6 col-lg-4"><Card_Proyecto proyecto={proyecto} /></div>)}</div>}
  </div>;
})}
      </div>
    </section>
  );
}
