import { useLocale as useSiteLocale, t as tr } from '../site/locale';
import { NavLink } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const linkClass = ({ isActive }) =>
    "nav-link px-3 py-2 rounded-pill" + (isActive ? " active fw-semibold" : "");

export default function Navbar() {
  useSiteLocale();
    return (
        <Motion.nav
            className="floating-navbar-wrap"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >

            <nav className="floating-navbar-wrap">
                <div className="container">
                    <div className="floating-navbar navbar navbar-expand-lg">
                        {/* Brand */}
                        <NavLink to="/Home" className="navbar-brand d-flex align-items-center gap-3 m-0">
                            <div className="brand-badge">
                                <img src="/favicon.png" alt={tr("text.83fce83274")} />
                            </div>

                            <div className="d-none d-sm-block">
                                <div className="brand-title">{tr("text.c2d4caa1cb")}</div>
                                <div className="brand-subtitle">{tr("text.c108c83a8f")}</div>
                            </div>
                        </NavLink>

                        {/* Toggler */}
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navPill"
                            aria-controls="navPill"
                            aria-expanded="false"
                            aria-label={tr("text.1ec0b00d7e")}
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* Links */}
                        <div className="collapse navbar-collapse" id="navPill">
                            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 mt-3 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/Home" className={linkClass}>{tr("text.70f8bb9a8a")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/EmilioCastillo" className={linkClass}>{tr("text.415280f061")}</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Proyectos" className={linkClass}>{tr("text.8541c1877e")}</NavLink>
                                </li>

                                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                                    <NavLink to="/Contacto" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"> {tr("text.397013850a")} </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </Motion.nav>

    );
}
