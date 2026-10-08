import { useLocale as useSiteLocale, t as tr, text as localizeText } from '../site/locale';
import { motion as Motion } from "framer-motion";

export default function MyLife() {
  useSiteLocale();
    return (
        <section className="section-wrap section-bg-1" id="about">
            <div className="container">
                <div className="row align-items-center g-4">
                    {/* Left: Copy */}
                    <h1 className="display-4 text-white"><span className="text-primary">{tr("text.d15068afb4")}</span></h1>
                    <div className="col-12 col-lg-7">
                        <Motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                        >

                            <h2 className="section-title mb-3"> {tr("text.8651ad7b61")} </h2>

                            <p className="about-text"> {tr("text.dceb9dd6b9")}{localizeText(" ")}
                                <b>{tr("text.eb74344ebf")}</b> {tr("text.6eef415ce1")} </p>

                            <p className="about-text"> {tr("text.d8c2cd0bd5")} <b>{tr("text.75a44a49ae")}</b> {tr("text.50cae6f085")}{localizeText(" ")}
                                <b>{tr("text.1ce95e4792")}</b>{tr("text.0622958f5f")}{localizeText(" ")}
                                <b>{tr("text.07f030c695")}</b>{tr("text.9fa0562ffc")} </p>

                            <p className="about-text"> {tr("text.31e0d4c7d6")} <b>{tr("text.4d1f996aa1")}</b> {tr("text.f8228af8b4")} <b>{tr("text.6ef9e85b49")}</b>{tr("text.f8f9bb684f")} <b>{tr("text.2064cb643c")}</b> {tr("text.bfe3cbd666")} <b>{tr("text.b57a058d14")}</b>{tr("text.65cdd9a986")}{localizeText(" ")}
                                <b>{tr("text.ad7fb3074b")}</b>{tr("text.c0c6274a24")} </p>

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
                                        {localizeText(x)}
                                    </span>
                                ))}
                            </div>
                        </Motion.div>
                    </div>

                    {/* Right: Info card */}
                    <div className="col-12 col-lg-5">
                        <Motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
                            className="about-card"
                        >
                            <div className="about-card-title">{tr("text.24a7798eae")}</div>

                            <div className="about-list">
                                <div className="about-row">
                                    <div className="about-label">{tr("text.7af1ffcca6")}</div>
                                    <div className="about-value">{tr("text.c93bc80b01")}</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">{tr("text.a73f1345df")}</div>
                                    <div className="about-value">{tr("text.ff88c7f616")}</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">{tr("text.bb17831a54")}</div>
                                    <div className="about-value">{tr("text.a9bb95fddc")}</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">{tr("text.83e5a0d3d2")}</div>
                                    <div className="about-value">{tr("text.3dc0bf3020")}</div>
                                </div>

                                <div className="about-row">
                                    <div className="about-label">{tr("text.303860cd96")}</div>
                                    <div className="about-value">{tr("text.6c1751bf77")}</div>
                                </div>
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <a className="btn btn-primary rounded-pill fw-semibold" href="mailto:yair.castillo.p1@gmail.com"> {tr("text.e04a85a2f2")} </a>
                                <a className="btn btn-outline-primary rounded-pill fw-semibold" href="https://github.com/FujimaruR" target="_blank" rel="noreferrer"> {tr("text.62ab018dca")} </a>
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
