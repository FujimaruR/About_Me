import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";

export default function Grafica() {
  const conocimiento = [
    { name: "Backend", value: 70 },
    { name: "Frontend", value: 30 },
  ];

  // Sutil y elegante (azul + azul claro)
  const colores = ["#2563eb", "#93c5fd"];

  return (
    <section className="section-wrap section-bg-1" id="distribution">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">Distribución de conocimientos</h2>
          <p className="section-subtitle mx-auto">
            Enfoque principal en backend y arquitectura, manteniendo un frontend sólido y moderno.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Backend */}
          <div className="col-12 col-lg-4">
            <motion.div
              className="info-card h-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="info-card-title">Backend</div>
              <ul className="info-list mt-3 mb-0">
                <li>Node.js (Express / NestJS)</li>
                <li>SQL (MySQL / PostgreSQL) + ORM (Prisma)</li>
                <li>APIs REST, autenticación y seguridad básica</li>
                <li>Deploy en Linux + cloud (AWS / Vercel)</li>
              </ul>
            </motion.div>
          </div>

          {/* Chart */}
          <div className="col-12 col-lg-4">
            <motion.div
              className="chart-card h-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
            >
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div>
                  <div className="info-card-title mb-0">Balance</div>
                  <div className="text-muted small">Backend vs Frontend</div>
                </div>
                <span className="pill-badge">70 / 30</span>
              </div>

              <div style={{ width: "100%", height: 280 }} className="mt-3">
                <ResponsiveContainer>
                  <PieChart>
                    <Tooltip
                      formatter={(value, name) => [`${value}%`, name]}
                    />
                    <Pie
                      data={conocimiento}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="52%"
                      innerRadius={62}
                      outerRadius={92}
                      paddingAngle={3}
                      isAnimationActive={true}
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {conocimiento.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colores[index % colores.length]}
                        />
                      ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={28} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Frontend */}
          <div className="col-12 col-lg-4">
            <motion.div
              className="info-card h-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            >
              <div className="info-card-title">Frontend</div>
              <ul className="info-list mt-3 mb-0">
                <li>React + Vite (Bootstrap / Tailwind)</li>
                <li>Responsive design + UI components</li>
                <li>Consumo de APIs + estados</li>
                <li>Interactividad con JavaScript moderno</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
