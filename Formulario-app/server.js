const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = new sqlite3.Database('./contactos.db', (err) => {
  if (err) console.error('Error al conectar a la base de datos:', err);
  else console.log('Conectado a la base de datos.');
});

db.run(`CREATE TABLE IF NOT EXISTS contactos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  email TEXT,
  telefono TEXT,
  fecha TEXT,
  hora TEXT,
  mensaje TEXT
)`);

app.post('/send-contact-form', (req, res) => {
  const { nombre, email, telefono, fecha, hora, mensaje } = req.body;
  db.run(
    `INSERT INTO contactos (nombre, email, telefono, fecha, hora, mensaje)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [nombre, email, telefono, fecha, hora, mensaje],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al guardar los datos.');
      }
      res.status(200).send('Formulario enviado correctamente.');
    }
  );
});

app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
