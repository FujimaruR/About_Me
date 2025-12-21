import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import proyectos from "../proyectos/projects";


const packages = [
    {
        name: "Básico",
        price: "$4,900 MXN",
        highlight: "Presencia digital esencial",
        features: [
            "Landing page profesional (1 página)",
            "Diseño 100% responsivo (perfecto en celular)",
            "Dominio .com.mx y hosting incluidos (1 año)",
            "Certificado SSL (sitio seguro)",
            "Formulario de contacto básico",
            "Entrega en 5-7 días hábiles",
            "Soporte gratuito por 1 mes"
        ],
        cta: "Solicitar Básico",
        tone: "basic", // Usa este tono para estilizar
    },
    {
        name: "Business",
        price: "$11,900 MXN",
        highlight: "Para crecimiento y autonomía",
        features: [
            "Todo lo del plan Básico",
            "Sitio de hasta 5 páginas internas (Inicio, Servicios, Galería, Contacto, etc.)",
            "Panel de administración con SQLite (¡Actualiza textos y fotos tú mismo!)",
            "Galería de imágenes administrable",
            "Integración con WhatsApp Business",
            "Blog básico integrado",
            "SEO optimizado para búsquedas locales",
            "Entrega en 10-12 días hábiles",
            "Soporte gratuito por 3 meses"
        ],
        cta: "Solicitar Business",
        tone: "plus", // O puedes cambiarlo a "business"
    },
    {
        name: "Premium",
        price: "$19,900 MXN",
        highlight: "Ventas y automatización total",
        features: [
            "Todo lo del plan Business",
            "Sitio de hasta 10 páginas internas",
            "Sistema de citas o reservas online",
            "Catálogo de productos",
            "Google Analytics integrado",
            "Capacitación presencial de 1 hora (en tu local o en remoto)",
            "Chat automático básico para WhatsApp",
            "Entrega en 15-20 días hábiles",
            "Soporte gratuito por 6 meses"
        ],
        cta: "Solicitar Premium",
        tone: "pro", // O puedes cambiarlo a "premium"
    },
    {
        name: "Sistema de Gestión para Restaurantes",
        price: "Desde $12,500 MXN",
        highlight: "Automatiza tu operación completa",
        features: [
            "Gestión digital de menús",
            "Sistema de pedidos por mesa",
            "Panel para meseros y cocina",
            "Módulo de administración e inventario",
            "Control de descuentos y promociones",
            "Sitio web integrado (según el plan elegido)",
            "Entrenamiento para tu personal"
        ],
        cta: "Cotizar Sistema",
        tone: "pro",
    },
    {
        name: "Mantenimiento Mensual",
        price: "$500 MXN / mes",
        highlight: "Tranquilidad y soporte continuo",
        features: [
            "Actualizaciones de seguridad menores",
            "Respaldo mensual de tu sitio web",
            "Soporte técnico prioritario por correo/WhatsApp",
            "Revisiones de performance",
            "Hasta 2 horas de cambios simples al mes*"
        ],
        cta: "Contratar Mantenimiento",
        tone: "maintenance",
    },
    {
        name: "Renovación Anual",
        price: "$1,200 MXN / año",
        highlight: "Mantén tu sitio en línea",
        features: [
            "Renovación de tu dominio .com.mx (o similar)",
            "Renovación de hosting profesional para 1 año",
            "Renovación del certificado SSL de seguridad",
            "Verificación de que todo funcione correctamente"
        ],
        cta: "Renovar Ahora",
        tone: "maintenance",
    }
];

const services = [
    {
        title: "Web para negocios",
        desc: "Sitios para cafés, restaurantes, barbers, clínicas, etc. Visuales, rápidos y responsive.",
    },
    {
        title: "Landing de conversión",
        desc: "Página enfocada a vender: CTA, WhatsApp, secciones claras y diseño premium.",
    },
    {
        title: "Sistemas a medida",
        desc: "CRUD, dashboards, administración, autenticación, integraciones y automatización.",
    },
    {
        title: "Mantenimiento",
        desc: "Actualizaciones, cambios de contenido, nuevas secciones y mejoras continuas.",
    },
];

export default function Demos() {

    const demosClientes = useMemo(() => {
        return [...proyectos]
            .filter(p => p.esDemoCliente)
            .sort((a, b) => Number(b.ID_Proyecto) - Number(a.ID_Proyecto));
    }, []);

    return (
        <section className="section-wrap section-bg-2" id="clientes">
            <div className="container">
                {/* HERO */}
                <motion.div
                    className="client-hero mb-4"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                >
                    <div className="client-kicker">Servicios para clientes</div>
                    <h1 className="client-title">Webs modernas que sí se ven premium y convierten.</h1>
                    <p className="client-subtitle">
                        Diseño + desarrollo web para negocios y remoto. Te entrego una web rápida,
                        responsiva y lista para que tus clientes te contacten o te compren.
                    </p>

                    <div className="d-flex flex-column flex-sm-row gap-2 mt-3">
                        <a
                            className="btn btn-primary rounded-pill px-4 fw-semibold"
                            href="https://wa.me/528118925876?text=Hola%20Emilio,%20me%20interesa%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.%20%C2%BFMe%20puedes%20cotizar?"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Cotizar por WhatsApp
                        </a>

                        <Link to="/Proyectos" className="btn btn-outline-primary rounded-pill px-4 fw-semibold">
                            Ver portafolio
                        </Link>

                        <a className="btn btn-outline-primary rounded-pill px-4 fw-semibold" href="mailto:yair.castillo.p1@gmail.com">
                            Contacto por correo
                        </a>
                    </div>
                </motion.div>

                {/* SERVICIOS */}
                <div className="mb-5">
                    <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-3">
                        <div>
                            <h2 className="section-title mb-2">Servicios</h2>
                            <p className="section-subtitle mb-0">Elige lo que necesitas y lo adaptamos a tu negocio.</p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {services.map((s) => (
                            <div key={s.title} className="col-12 col-md-6 col-lg-3">
                                <div className="client-card h-100">
                                    <div className="client-card-title">{s.title}</div>
                                    <p className="client-card-text mb-0">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* PAQUETES */}
                <div className="mb-5" id="paquetes">
                    <div className="text-center mb-4">
                        <h2 className="section-title mb-2">Paquetes</h2>
                        <p className="section-subtitle mx-auto">
                            Precios base (pueden variar según contenido, número de secciones e integraciones).
                        </p>
                    </div>

                    <div className="row g-4">
                        {packages.map((p) => (
                            <div key={p.name} className="col-12 col-lg-4">
                                <div className={`price-card h-100 price-card--${p.tone}`}>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="price-name">{p.name}</div>
                                        <span className="price-pill">{p.highlight}</span>
                                    </div>

                                    <div className="price-value mt-2">{p.price}</div>

                                    <ul className="price-list mt-3">
                                        {p.features.map((f) => (
                                            <li key={f}>{f}</li>
                                        ))}
                                    </ul>

                                    <a
                                        className="btn btn-primary rounded-pill w-100 mt-2 fw-semibold"
                                        href={`https://wa.me/528118925876?text=${encodeURIComponent(
                                            `Hola Emilio, me interesa el paquete ${p.name}. ¿Me puedes cotizar?`
                                        )}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {p.cta}
                                    </a>

                                    <div className="price-note mt-2">
                                        Incluye responsive y deployment básico (según el paquete).
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DEMOS */}
                <div className="mb-5" id="demos">
                    <div className="d-flex align-items-end justify-content-between flex-wrap gap-2 mb-3">
                        <div>
                            <h2 className="section-title mb-2">Demos</h2>
                            <p className="section-subtitle mb-0">
                                Ejemplos reales del estilo visual, animaciones y calidad de entrega.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {demosClientes.map((p) => (
                            <div key={p.ID_Proyecto} className="col-12 col-md-6 col-lg-4">
                                <div className="demo-card h-100">
                                    <img
                                        src={Array.isArray(p.imagenPromo) ? p.imagenPromo[0] : p.imagenPromo}
                                        alt={p.titulo}
                                        className="demo-thumb"
                                        loading="lazy"
                                    />

                                    <div className="demo-title mt-3">{p.titulo}</div>
                                    <p className="demo-text">{p.descripcionCorta}</p>

                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {(p.tecnologias || []).map((t) => (
                                            <span key={t} className="project-badge">{t}</span>
                                        ))}
                                    </div>

                                    <div className="d-flex gap-2">
                                        {p.demoUrl ? (
                                            <a className="btn btn-primary rounded-pill px-3 fw-semibold" href={p.demoUrl} target="_blank" rel="noreferrer">
                                                Ver demo
                                            </a>
                                        ) : (
                                            <button className="btn btn-primary rounded-pill px-3 fw-semibold" disabled>
                                                Demo pronto
                                            </button>
                                        )}

                                        {p.repoUrl && (
                                            <a className="btn btn-outline-primary rounded-pill px-3 fw-semibold" href={p.repoUrl} target="_blank" rel="noreferrer">
                                                Repo
                                            </a>
                                        )}

                                        <a className="btn btn-outline-primary rounded-pill px-3 fw-semibold" href={`#paquetes`}>
                                            Cotizar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* PROCESO */}
                <div className="mb-5">
                    <div className="text-center mb-4">
                        <h2 className="section-title mb-2">Cómo trabajamos</h2>
                        <p className="section-subtitle mx-auto">Proceso simple, claro y rápido.</p>
                    </div>

                    <div className="row g-4">
                        {[
                            { t: "1) Brief", d: "Me cuentas qué vendes, qué necesitas y referencias." },
                            { t: "2) Propuesta", d: "Te comparto estructura, alcance y precio." },
                            { t: "3) Diseño & Desarrollo", d: "Construyo la web con UI premium y responsive." },
                            { t: "4) Entrega", d: "Deploy, pruebas y ajustes finales. Listo para publicar." },
                        ].map((step) => (
                            <div key={step.t} className="col-12 col-md-6 col-lg-3">
                                <div className="client-card h-100">
                                    <div className="client-card-title">{step.t}</div>
                                    <p className="client-card-text mb-0">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA FINAL */}
                <div className="client-cta">
                    <div className="client-cta-title">¿Listo para tu web?</div>
                    <p className="client-cta-text mb-0">
                        Escríbeme por WhatsApp y te cotizo con base en tu negocio y lo que necesitas.
                    </p>

                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mt-3">
                        <a
                            className="btn btn-primary rounded-pill px-4 fw-semibold"
                            href="https://wa.me/528118925876?text=Hola%20Emilio,%20quiero%20cotizar%20una%20web%20para%20mi%20negocio."
                            target="_blank"
                            rel="noreferrer"
                        >
                            Cotizar ahora
                        </a>
                        <a className="btn btn-outline-primary rounded-pill px-4 fw-semibold" href="mailto:yair.castillo.p1@gmail.com">
                            Correo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
