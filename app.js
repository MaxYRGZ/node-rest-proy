const express = require('express');
const UsuariosController = require('./contollers/UsuariosController');
const ContrasenaGuardadaController = require('./contollers/ContrasenaGuardadaController');
const AnuncioController = require('./contollers/AnuncioController');
const ConsejoSeguridadController = require('./contollers/ConsejoSeguridadController');

const app = express();
const puerto = 80;

app.use(express.json());

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hola Mundo');
});

// Rutas para Usuarios
app.get('/usuarios', UsuariosController.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.indexPost);
app.put('/usuarios/:id([0-9]+)', UsuariosController.itemPut);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

// Rutas para Contraseñas Guardadas
app.get('/contrasenas', ContrasenaGuardadaController.indexGet);
app.get('/contrasenas/:id([0-9]+)', ContrasenaGuardadaController.itemGet);
app.post('/contrasenas', ContrasenaGuardadaController.indexPost);
app.put('/contrasenas/:id([0-9]+)', ContrasenaGuardadaController.itemPut);
app.patch('/contrasenas/:id([0-9]+)', ContrasenaGuardadaController.itemPatch);

// Rutas para Anuncios
app.get('/anuncios', AnuncioController.indexGet);
app.get('/anuncios/:id([0-9]+)', AnuncioController.itemGet);
app.post('/anuncios', AnuncioController.indexPost);
app.put('/anuncios/:id([0-9]+)', AnuncioController.itemPut);
app.patch('/anuncios/:id([0-9]+)', AnuncioController.itemPatch);

// Rutas para Consejos de Seguridad
app.get('/consejos', ConsejoSeguridadController.indexGet);
app.get('/consejos/:id([0-9]+)', ConsejoSeguridadController.itemGet);
app.post('/consejos', ConsejoSeguridadController.indexPost);
app.put('/consejos/:id([0-9]+)', ConsejoSeguridadController.itemPut);
app.patch('/consejos/:id([0-9]+)', ConsejoSeguridadController.itemPatch);

app.listen(puerto, () => {
    console.log("Servidor en espera en http://localhost");
});
