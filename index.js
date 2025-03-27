const express = require('express');
const { execFile } = require('child_process');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Ruta que ejecutará el archivo de texto
app.get('/', (req, res) => {
  const archivo = path.join(__dirname, 'mensaje.txt');

  execFile('cat', [archivo], (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(`Error al ejecutar el archivo: ${error.message}`);
    }
    if (stderr) {
      return res.status(500).send(`Error en el archivo: ${stderr}`);
    }

    res.send(`Contenido del archivo: <pre>${stdout}</pre>`);
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
