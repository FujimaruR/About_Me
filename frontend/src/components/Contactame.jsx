import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { track } from '../site/analytics';
import emailjs from "emailjs-com";

export default function ContactoConmigo() {
  useSiteLocale();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [validationError, setValidationError] = useState(false);
  const [msg, setMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    track('form_submit_attempt', 'professional-contact');
    if (!e.currentTarget.reportValidity()) {
      setValidationError(true);
      track('form_validation_error', 'professional-contact', 'validation');
      return;
    }
    setValidationError(false);
    const contactForm = e.currentTarget;
    setStatus("sending");
    setMsg("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contactForm,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setMsg("Mensaje enviado con éxito. Te responderé lo antes posible.");
      track('form_submit_success', 'professional-contact');
      contactForm.reset();
    } catch (error) {
      track('form_submit_error', 'professional-contact', 'service');
      setStatus("error");
      setMsg("No se pudo enviar el mensaje. Intenta de nuevo o contáctame por WhatsApp.");
      console.error(error);
    }
  };

  return (
    <section className="section-wrap section-bg-2" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">{tr("text.e04a85a2f2")}</h2>
          <p className="section-subtitle mx-auto"> {tr("text.7881287c38")} </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <Motion.div
              className="contact-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <form noValidate onChangeCapture={() => track('form_start', 'professional-contact')} className="row g-3" onSubmit={sendEmail}>
                <div className="col-12 col-lg-6">
                  <label htmlFor="nombre" className="form-label contact-label"> {tr("text.e68491e91c")} </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="nombre"
                    name="name"
                    placeholder={tr("text.f07e1b890b")}
                    required
                  />

                  <label htmlFor="titulo" className="form-label contact-label mt-3"> {tr("text.98a5efa60b")} </label>
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="titulo"
                    name="title"
                    placeholder={tr("text.67549c6e92")}
                    required
                  />

                  <label htmlFor="correo" className="form-label contact-label mt-3"> {tr("text.59a16700ff")} </label>
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="correo"
                    name="email"
                    placeholder={tr("text.ce56bfc089")}
                    required
                  />
                </div>

                <div className="col-12 col-lg-6">
                  <label htmlFor="mensaje" className="form-label contact-label"> {tr("text.eb9e23efc4")} </label>
                  <textarea
                    className="form-control contact-input contact-textarea"
                    id="mensaje"
                    name="message"
                    rows="9"
                    placeholder={tr("text.41d3f70f39")}
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
                      {localizeText(status === "sending" ? "Enviando..." : msg)}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="col-12 d-flex justify-content-end gap-2 mt-2">
                  <a
                    className="btn btn-outline-primary rounded-pill px-4"
                    href="mailto:yair.castillo.p1@gmail.com"
                  > {tr("text.d43c17a26d")} </a>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 fw-semibold"
                    disabled={status === "sending"}
                  >
                    {localizeText(status === "sending" ? "Enviando..." : "Enviar")}
                  </button>
                </div>

                <div className="col-12">
                  <small className="text-muted"> {tr("text.1dccfaf6ad")} </small>
                </div>
              {validationError && <p role="alert">{tr('ui.validation')}</p>}
              </form>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
