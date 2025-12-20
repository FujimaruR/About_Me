import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const CV_URL = "/Resume-EmilioCastillo.pdf";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [showCv, setShowCv] = useState(false);

  const [lines, setLines] = useState(() => ([
    { type: "sys", text: "EmilioOS v1.0 — Terminal ready." },
    { type: "sys", text: "Escribe 'help' para ver comandos disponibles." },
  ]));

  const inputRef = useRef(null);

  const prompt = useMemo(() => "C:\\Users\\Emilio>", []);

  const pushLine = (type, text) => setLines(prev => [...prev, { type, text }]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();

    // imprimir lo que escribió el usuario
    pushLine("cmd", `${prompt} ${raw}`);

    if (!cmd) return;

    if (cmd === "help") {
      pushLine("out", "Comandos:");
      pushLine("out", "  curriculum  - Muestra el CV en pantalla");
      pushLine("out", "  open        - Abre el CV en una nueva pestaña");
      pushLine("out", "  download    - Descarga el CV");
      pushLine("out", "  clear       - Limpia la terminal");
      return;
    }

    if (cmd === "clear") {
      setLines([
        { type: "sys", text: "Terminal cleared." },
        { type: "sys", text: "Escribe 'help' para ver comandos disponibles." },
      ]);
      setShowCv(false);
      return;
    }

    if (cmd === "curriculum") {
      pushLine("out", "Abriendo Resume-EmilioCastillo.pdf...");
      setShowCv(true);
      return;
    }

    if (cmd === "open") {
      pushLine("out", "Abriendo CV en una nueva pestaña...");
      window.open(CV_URL, "_blank", "noopener,noreferrer");
      return;
    }

    if (cmd === "download") {
      pushLine("out", "Descargando CV...");
      const a = document.createElement("a");
      a.href = CV_URL;
      a.download = "Resume-EmilioCastillo.pdf";
      a.click();
      return;
    }

    pushLine("err", `'${raw}' no se reconoce como un comando interno o externo.`);
    setShowCv(false);
  };

  return (
    <section className="section-wrap section-bg-2" id="cv">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-2 mb-4">
          <div>
            <h2 className="section-title mb-2">Curriculum</h2>
            <p className="section-subtitle mb-0">
              Terminal interactiva: escribe <b>help</b> o <b>curriculum</b>.
            </p>
          </div>

          <div className="d-flex gap-2">
            <a className="btn btn-primary rounded-pill px-3" href={CV_URL} target="_blank" rel="noreferrer">
              Abrir CV
            </a>
            <a className="btn btn-outline-primary rounded-pill px-3" href={CV_URL} download>
              Descargar
            </a>
          </div>
        </div>

        <motion.div
          className="terminal-shell"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={() => inputRef.current?.focus()}
          role="button"
          tabIndex={0}
        >
          {/* Header tipo ventana */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="terminal-title">Command Prompt — Emilio</div>
          </div>

          {/* Body */}
          <div className="terminal-body">
            <div className="terminal-lines">
              {lines.map((l, idx) => (
                <div
                  key={idx}
                  className={
                    l.type === "err"
                      ? "line line-err"
                      : l.type === "cmd"
                      ? "line line-cmd"
                      : "line line-out"
                  }
                >
                  {l.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="terminal-inputRow">
              <span className="prompt">{prompt}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    runCommand(input);
                    setInput("");
                  }
                }}
                className="terminal-input"
                placeholder="Escribe un comando (help, curriculum, open, download, clear) y presiona Enter"
                aria-label="Terminal command input"
              />
            </div>
          </div>
        </motion.div>

        {/* CV Preview */}
        {showCv && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="cv-frame">
              <iframe
                title="Resume PDF"
                src={CV_URL}
                width="100%"
                height="900px"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
