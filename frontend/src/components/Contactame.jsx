import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function ContactoConmigo() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [msg, setMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setMsg("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setMsg("Mensaje enviado con éxito. Te responderé lo antes posible.");
      e.target.reset();
    } catch (error) {
      setStatus("error");
      setMsg("No se pudo enviar el mensaje. Intenta de nuevo o contáctame por WhatsApp.");
      console.error(error);
    }
  };

  return (
    <section className="section-wrap section-bg-2" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">Envíame un correo</h2>
          <p className="section-subtitle mx-auto">
            ¿Proyecto, vacante o colaboración? Escríbeme y te respondo pronto.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <form className="row g-3" onSubmit={sendEmail}>
                <div className="col-12 col-lg-6">
                  <label htmlFor="nombre" className="form-label contact-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="nombre"
                    name="name"
                    placeholder="Tu nombre"
                    required
                  />

                  <label htmlFor="titulo" className="form-label contact-label mt-3">
                    Título
                  </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="titulo"
                    name="title"
                    placeholder="Asunto del correo"
                    required
                  />

                  <label htmlFor="correo" className="form-label contact-label mt-3">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="correo"
                    name="email"
                    placeholder="tucorreo@ejemplo.com"
                    required
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <label htmlFor="mensaje" className="form-label contact-label">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control contact-input contact-textarea"
                    id="mensaje"
                    name="message"
                    rows="9"
                    placeholder="Cuéntame qué necesitas y el contexto (tiempos, stack, etc.)"
                    required
                  />
                </div>

                {/* Feedback */}
                {status !== "idle" && (
                  <div className="col-12">
                    <div
                      className={
                        status === "success"
                          ? "contact-alert contact-alert--success"
                          : status === "error"
                          ? "contact-alert contact-alert--error"
                          : "contact-alert"
                      }
                    >
                      {status === "sending" ? "Enviando..." : msg}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="col-12 d-flex justify-content-end gap-2 mt-2">
                  <a
                    className="btn btn-outline-primary rounded-pill px-4"
                    href="mailto:yair.castillo.p1@gmail.com"
                  >
                    Abrir mi correo
                  </a>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 fw-semibold"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Enviando..." : "Enviar"}
                  </button>
                </div>

                <div className="col-12">
                  <small className="text-muted">
                    Tip: también puedes contactarme por WhatsApp si prefieres una respuesta más rápida.
                  </small>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
