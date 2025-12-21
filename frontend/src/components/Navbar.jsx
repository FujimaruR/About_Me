import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const linkClass = ({ isActive }) =>
    "nav-link px-3 py-2 rounded-pill" + (isActive ? " active fw-semibold" : "");

export default function Navbar() {
    return (
        <motion.nav
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
                                <img src="/favicon.png" alt="Logo" />
                            </div>

                            <div className="d-none d-sm-block">
                                <div className="brand-title">Emilio Castillo</div>
                                <div className="brand-subtitle">Full Stack Developer</div>
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
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        {/* Links */}
                        <div className="collapse navbar-collapse" id="navPill">
                            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 mt-3 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/Home" className={linkClass}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/EmilioCastillo" className={linkClass}>Sobre mí</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Proyectos" className={linkClass}>Proyectos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Clientes" className={linkClass}>Clientes</NavLink>
                                </li>

                                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                                    <NavLink to="/Contacto" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                                        Contáctame
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </motion.nav>

    );
}
