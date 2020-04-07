

const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a la API para familias del covid-19");
});

const rutas_marcadores = require("./routes/marcadores");
app.use(rutas_marcadores);



// Puerto
const port = 3000;
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});

