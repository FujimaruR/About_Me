import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card_Proyecto from "../components/Card_Proyecto";
import proyectos from "../proyectos/projects";

const PAGE_SIZE = 6;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 }
};



export default function Projects() {
  const [page, setPage] = useState(0);

  // ✅ Más nuevos primero (no muta el array original)
  const proyectosOrdenados = useMemo(() => {
    return [...proyectos].sort(
      (a, b) => Number(b.ID_Proyecto) - Number(a.ID_Proyecto)
    );
  }, [proyectos]);


  const destacados = useMemo(
    () => proyectosOrdenados.filter((p) => p.destacado),
    [proyectosOrdenados]
  );

  const restantes = useMemo(
    () => proyectosOrdenados.filter((p) => !p.destacado),
    [proyectosOrdenados]
  );

  // ✅ totalPages NUNCA 0
  const totalPages = Math.max(1, Math.ceil(restantes.length / PAGE_SIZE));

  // ✅ page dentro de rango siempre
  const safePage = Math.min(Math.max(page, 0), totalPages - 1);

  const start = safePage * PAGE_SIZE;
  const visibles = restantes.slice(start, start + PAGE_SIZE);

  const canPrev = safePage > 0;
  const canNext = safePage < totalPages - 1;

  // ✅ Si page quedó fuera de rango por cambios, corrígelo
  useEffect(() => {
    if (page !== safePage) setPage(safePage);
  }, [page, safePage]);

  // ✅ Si NO hay restantes (por ejemplo todo son destacados), mostramos un fallback
  const noHayMas = restantes.length === 0;

  return (
    <section id="projects" className="section-wrap section-bg-2">
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2">
          <div>
            <h2 className="section-title mb-2">Proyectos</h2>
            <p className="section-subtitle mb-0">
              Selección de proyectos con enfoque en frontend, backend y despliegue.
            </p>
          </div>

          <div className="d-flex gap-2">
            <a
              className="btn btn-outline-primary rounded-pill px-3"
              href="https://github.com/FujimaruR"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <Link to="/Proyectos" className="btn btn-primary rounded-pill px-3">
              Ver todos
            </Link>
          </div>
        </div>

        {/* Destacados */}
        {destacados.length > 0 && (
          <div className="mt-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2">
              <h3 className="h5 fw-bold m-0 text-dark">Destacados</h3>
              <span className="text-muted small">{destacados.length} proyectos</span>
            </div>

            <motion.div
              className="row g-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {destacados.map((proyecto) => (
                <motion.div
                  key={proyecto.ID_Proyecto}
                  variants={item}
                  className="col-12 col-lg-4"
                >
                  <Card_Proyecto proyecto={proyecto} variant="featured" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Más proyectos */}
        <div className="mt-5">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
            <h3 className="h5 fw-bold m-0 text-dark">Más proyectos</h3>

            <span className="text-muted small">
              {noHayMas
                ? "Todo está en destacados"
                : `Página ${safePage + 1} de ${totalPages}`}
            </span>
          </div>

          {noHayMas ? (
            <div className="alert alert-light border">
              Ya marcaste todos los proyectos como <b>destacado</b>.
              Si quieres paginación aquí, deja algunos sin <code>destacado: true</code>.
            </div>
          ) : (
            <>
              <motion.div
                key={`page-${safePage}`}          // 👈 esto fuerza remount al cambiar página
                className="row g-4"
                variants={container}
                initial="hidden"
                animate="show"                   // 👈 NO whileInView aquí
              >
                {visibles.map((proyecto) => (
                  <motion.div
                    key={proyecto.ID_Proyecto}
                    variants={item}
                    className="col-12 col-md-6 col-lg-4"
                  >
                    <Card_Proyecto proyecto={proyecto} />
                  </motion.div>
                ))}
              </motion.div>


              {/* Pagination */}
              <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                <button
                  className="btn btn-outline-primary rounded-pill px-4"
                  disabled={!canPrev}
                  onClick={() => setPage((p) => p - 1)}
                >
                  ← Anterior
                </button>

                <button
                  className="btn btn-outline-primary rounded-pill px-4"
                  disabled={!canNext}
                  onClick={() => setPage((p) => p + 1)}
                >
                  Siguiente →
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
