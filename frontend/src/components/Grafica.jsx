import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const Grafica = () => {

    const conocimiento = [
        { name: "Frontend", value: 30 },
        { name: "Backend", value: 70 },
    ];

    const colores = ["#0d6efd", "#6610f2"];

    return (

        <section className="hero p-5 border-top" >
            <h1 className="display-4 text-white"><span className="text-primary">Distribución de conocimientos:</span></h1>
            <div className="row text-white">
                <div className="col-md-4 mb-4">
                    <h5>Backend</h5>
                    <ul>
                        <li>Node.js con Express</li>
                        <li>MySQL y Sequelize</li>
                        <li>API RESTful y autenticación</li>
                        <li>Despliegue en servicios cloud</li>
                    </ul>
                </div>
                <div className="col-md-4 mb-4 d-flex align-items-center justify-content-center">
                    <div style={{ width: "100%", height: 300 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={conocimiento}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    label
                                >
                                    {conocimiento.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colores[index % colores.length]} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <h5>Frontend</h5>
                    <ul>
                        <li>React con Vite y Bootstrap</li>
                        <li>Diseño responsive y UX</li>
                        <li>Consumo de APIs</li>
                        <li>Interactividad con JavaScript moderno</li>
                    </ul>
                </div>
            </div>
        </section>

    );
};

export default Grafica;