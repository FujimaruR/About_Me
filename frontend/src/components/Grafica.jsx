import { useLocale as useSiteLocale, t as tr } from '../site/locale';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion as Motion } from "framer-motion";

export default function Grafica() {
  useSiteLocale();
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
          <h2 className="section-title mb-2">{tr("text.46d8c890db")}</h2>
          <p className="section-subtitle mx-auto"> {tr("text.0a7a4f8cb7")} </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Backend */}
          <div className="col-12 col-lg-4">
            <Motion.div
              className="info-card h-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="info-card-title">{tr("text.e758ca6456")}</div>
              <ul className="info-list mt-3 mb-0">
                <li>{tr("text.b3cf8b26c2")}</li>
                <li>{tr("text.4f7def8ca2")}</li>
                <li>{tr("text.5532ef5ccd")}</li>
                <li>{tr("text.b9b490fbb7")}</li>
              </ul>
            </Motion.div>
          </div>

          {/* Chart */}
          <div className="col-12 col-lg-4">
            <Motion.div
              className="chart-card h-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
            >
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div>
                  <div className="info-card-title mb-0">{tr("text.90eef61304")}</div>
                  <div className="text-muted small">{tr("text.7f8395a4c3")}</div>
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
            </Motion.div>
          </div>

          {/* Frontend */}
          <div className="col-12 col-lg-4">
            <Motion.div
              className="info-card h-100"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            >
              <div className="info-card-title">{tr("text.152d1cf2d9")}</div>
              <ul className="info-list mt-3 mb-0">
                <li>{tr("text.f7281282ed")}</li>
                <li>{tr("text.a2b2f96037")}</li>
                <li>{tr("text.e59a128264")}</li>
                <li>{tr("text.c5a1fee429")}</li>
              </ul>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
