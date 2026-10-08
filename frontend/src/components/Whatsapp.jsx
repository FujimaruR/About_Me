import { useLocale as useSiteLocale, t as tr } from '../site/locale';
import { motion as Motion } from "framer-motion";

export default function Whatsapp() {
  useSiteLocale();
  return (
    <section className="section-wrap section-bg-1" id="whatsapp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            <Motion.div
              className="whatsapp-card text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="whatsapp-icon mb-3">
                <WhatsAppIcon />
              </div>

              <h3 className="whatsapp-title mb-2"> {tr("text.7adb131647")} </h3>

              <p className="whatsapp-subtitle mb-4"> {tr("text.949fbc6ee8")} </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <a
                  href="https://wa.me/528118925876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn whatsapp-btn rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <WhatsAppIcon small /> {tr("text.b25cabb544")} </a>

                <span className="whatsapp-phone">
                  +52 81 1892 5876
                </span>
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ small }) {
  useSiteLocale();
  return (
    <svg
      width={small ? 18 : 42}
      height={small ? 18 : 42}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="#22c55e"
        d="M16 0C7.164 0 0 7.164 0 16c0 2.82.734 5.467 2.012 7.774L0 32l8.425-2.012A15.94 15.94 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.81-1.86l-.49-.29-5 1.195 1.336-4.87-.318-.5A13.27 13.27 0 0 1 2.667 16C2.667 8.66 8.66 2.667 16 2.667S29.333 8.66 29.333 16 23.34 29.333 16 29.333zm7.36-9.587c-.402-.201-2.375-1.172-2.743-1.307-.368-.134-.635-.201-.902.201-.268.402-1.036 1.307-1.27 1.575-.234.268-.469.301-.87.1-.402-.201-1.695-.625-3.23-1.994-1.194-1.065-2-2.379-2.234-2.78-.234-.402-.025-.62.176-.82.18-.179.402-.469.603-.703.201-.234.268-.402.402-.67.134-.268.067-.502-.034-.703-.1-.201-.902-2.174-1.235-2.98-.325-.78-.656-.674-.902-.687l-.77-.013c-.268 0-.703.1-1.07.502-.368.402-1.403 1.37-1.403 3.34 0 1.97 1.437 3.873 1.637 4.14.201.268 2.83 4.324 6.86 6.064.958.413 1.705.66 2.287.844.961.305 1.835.262 2.526.159.77-.115 2.375-.97 2.71-1.906.335-.936.335-1.74.234-1.906-.1-.167-.368-.268-.77-.469z"
      />
    </svg>
  );
}
