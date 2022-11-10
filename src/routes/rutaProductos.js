const express = require('express');

const router = express.Router();

/* requerimos rutaIndex */
const productsController = require ('../controllers/productsController')

app.get('/detalle/:id',productsController.detalle)
/* el tema del app.get y /detalle etc */
module.exports = router;