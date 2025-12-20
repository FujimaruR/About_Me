import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card_Proyecto from "../components/Card_Proyecto";
import proyectos from "../proyectos/projects";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function AllProjects() {
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
  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();

    return proyectosOrdenados.filter((p) => {
      const matchesQuery =
        !q ||
        p.titulo?.toLowerCase().includes(q) ||
        p.descripcion?.toLowerCase().includes(q) ||
        p.descripcionCorta?.toLowerCase().includes(q) ||
        (p.tecnologias || []).some((t) => t.toLowerCase().includes(q));

      const matchesTech = tech === "Todas" || (p.tecnologias || []).includes(tech);

      return matchesQuery && matchesTech;
    });
  }, [proyectosOrdenados, query, tech]);

  return (
    <section className="section-wrap section-bg-2" id="all-projects">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-lg-row align-items-lg-end justify-content-between gap-3 mb-4">
          <div>
            <h2 className="section-title mb-2">Proyectos</h2>
            <p className="section-subtitle mb-0">
              Todos mis proyectos en una sola vista. Filtra por tecnología o busca por nombre.
            </p>
          </div>

          {/* Controls */}
          <div className="d-flex flex-column flex-sm-row gap-2">
            <input
              className="form-control rounded-pill px-3"
              style={{ minWidth: 260 }}
              placeholder="Buscar (React, AWS, Odoo...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <select
              className="form-select rounded-pill px-3"
              style={{ minWidth: 200 }}
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              {techOptions.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Counter */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <span className="text-muted small">
            Mostrando <b>{filtrados.length}</b> de <b>{proyectosOrdenados.length}</b>
          </span>

          {(query || tech !== "Todas") && (
            <button
              className="btn btn-outline-primary btn-sm rounded-pill px-3"
              onClick={() => {
                setQuery("");
                setTech("Todas");
              }}
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Grid */}
        {filtrados.length === 0 ? (
          <div className="alert alert-light border">
            No hay resultados. Prueba con otra búsqueda o cambia el filtro.
          </div>
        ) : (
          <motion.div
            className="row g-4"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filtrados.map((proyecto) => (
              <motion.div
                key={proyecto.ID_Proyecto}
                variants={item}
                className="col-12 col-md-6 col-lg-4"
              >
                <Card_Proyecto proyecto={proyecto} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
