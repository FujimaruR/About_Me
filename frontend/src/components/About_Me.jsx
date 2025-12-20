import { motion } from "framer-motion";

export default function MyLife() {
    return (
        <section className="section-wrap section-bg-1" id="about">
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Left: Copy */}
                    <h1 className="display-4 text-white"><span className="text-primary">SOBRE MÍ</span></h1>
                    <div className="col-12 col-lg-7">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        >

                            <h2 className="section-title mb-3">
                                Desarrollo software con enfoque en backend y soluciones reales.
                            </h2>

                            <p className="about-text">
                                Soy desarrollador de Nuevo León, México. Estudié{" "}
                                <b>Multimedia y Animación Digital</b> en la UANL (generación 2024),
                                y me apasiona convertir ideas en productos bien construidos: rápidos,
                                claros y mantenibles.
                            </p>

                            <p className="about-text">
                                Tengo <b>+2 años de experiencia profesional</b> como consultor en{" "}
                                <b>ITAdmin</b>, donde hago soporte técnico y desarrollo de soluciones en{" "}
                                <b>Odoo (Python)</b>, integraciones y automatización de procesos.
                            </p>

                            <p className="about-text">
                                Mi stack combina <b>React</b> para interfaces modernas con un backend
                                sólido usando <b>Node.js / Python</b>, bases de datos <b>SQL</b> y
                                despliegue en <b>Linux / AWS</b>. Me enfoco en construir sistemas{" "}
                                <b>escalables</b>, seguros y con buen UX.
                            </p>

                            <div className="d-flex flex-wrap gap-2 mt-3">
                                {[
                                    "Backend-first",
                                    "REST APIs",
                                    "SQL + Modelado",
                                    "Odoo (Python)",
                                    "AWS + Linux",
                                    "UI cuidada",
                                ].map((x) => (
                                    <span key={x} className="about-badge">
                                        {x}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Info card */}
                    <div className="col-12 col-lg-5">
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                            className="about-card"
                        >
                            <div className="about-card-title">Resumen rápido</div>

                            <div className="about-list">
                                <div className="about-row">
                                    <div className="about-label">Ubicación</div>
                                    <div className="about-value">Nuevo León, MX</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">Rol</div>
                                    <div className="about-value">Full Stack (Backend Focus)</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">Especialidad</div>
                                    <div className="about-value">Odoo (Python) + Web Apps</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">Stack</div>
                                    <div className="about-value">React · Node · Python · SQL</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">Disponibilidad</div>
                                    <div className="about-value">Remoto / Híbrido</div>
                                </div>
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <a className="btn btn-primary rounded-pill fw-semibold" href="mailto:yair.castillo.p1@gmail.com">
                                    Envíame un correo
                                </a>
                                <a className="btn btn-outline-primary rounded-pill fw-semibold" href="https://github.com/FujimaruR" target="_blank" rel="noreferrer">
                                    Ver GitHub
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
