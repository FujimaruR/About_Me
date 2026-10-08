import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

export default function Header() {
  useSiteLocale();
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
            <Motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="hero-chip mb-3"> {tr("text.359ce548cf")} </div>

              <h1 className="hero-title mb-3"> {tr("text.14b0e39141")}{localizeText(" ")}
                <span className="hero-accent">{tr("text.b7701dba45")}</span>
              </h1>

              <p className="hero-subtitle mb-4"> {tr("text.c3dc66ba6b")} </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                <button
                  onClick={() => navigate("/Contacto")}
                  className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                > {tr("text.397013850a")} </button>

                <button
                  onClick={() => navigate("/Proyectos")}
                  className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                > {tr("text.9c3fda0a86")} </button>
              </div>

              <Motion.div
                className="hero-stats mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.10, ease: "easeOut" }}
              >
                <div className="hero-stat">
                  <div className="hero-stat-num">{tr("text.6f4c7cf103")}</div>
                  <div className="hero-stat-label">{tr("text.2de7b8a3b7")}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">{tr("text.152d1cf2d9")}</div>
                  <div className="hero-stat-label">{tr("text.ea83d52928")}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">{tr("text.e758ca6456")}</div>
                  <div className="hero-stat-label">{tr("text.1eff88a083")}</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-num">{tr("text.fb4192a0d1")}</div>
                  <div className="hero-stat-label">{tr("text.f8724f2f47")}</div>
                </div>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
