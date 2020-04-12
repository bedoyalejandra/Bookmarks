
const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());



app.get("/", (req, res) => {
  res.send("Bienvenido a la API para familias del covid-19");
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');

  // authorized headers for preflight requests
  // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();

  app.options('*', (req, res) => {
      // allowed XHR methods  
      res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
      res.send();
  });
});

const rutas_marcadores = require("./routes/marcadores");
app.use(rutas_marcadores);

// Puerto
const port = 3000;
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});

