import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  const navigate = useNavigate();

  return (
    <section className="hero-wrap">
      {/* Background */}
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/Captura_Codigo.png')" }}
        aria-hidden="true"
      />

      {/* Overlay (para contraste y look premium) */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9 text-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="hero-chip mb-3">
                Full Stack • React • Node • Python/Odoo
              </div>

              <h1 className="hero-title mb-3">
                Hola, soy{" "}
                <span className="hero-accent">Desarrollador Full-Stack</span>
              </h1>

              <p className="hero-subtitle mb-4">
                Construyo interfaces modernas y backends sólidos para soluciones
                escalables: APIs, bases de datos y despliegues en la nube.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                <button
                  onClick={() => navigate("/Contacto")}
                  className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                >
                  Contáctame
                </button>

                <button
                  onClick={() => navigate("/Proyectos")}
                  className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                >
                  Ver proyectos
                </button>
              </div>

              <motion.div
                className="hero-stats mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.10, ease: "easeOut" }}
              >
                <div className="hero-stat">
                  <div className="hero-stat-num">2+ años</div>
                  <div className="hero-stat-label">Consultoría / ERP</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">Frontend</div>
                  <div className="hero-stat-label">React + UX</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">Backend</div>
                  <div className="hero-stat-label">Node / Python</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">Deploy</div>
                  <div className="hero-stat-label">AWS / Vercel</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
