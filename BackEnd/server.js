const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
// Configurar el límite de carga para JSON y URL codificado
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.listen(3001, '0.0.0.0', () => {
  console.log("Escuchando en el puerto 3001");
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "about_me",
  charset: 'utf8mb4' 
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conexión a la base de datos establecida con el número ' + db.threadId);
});