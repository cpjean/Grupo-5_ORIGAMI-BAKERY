const express = require('express');

const router = express.Router();

/* requerimos rutaIndex */
const rutaIndex = require ('../controllers/controladorViews')

/* llamamos al metodo que tenemos en el controlador, */
router.get('/', rutaIndex.index)

router.get('/login', rutaIndex.ingreso)

router.get('/registro', rutaIndex.registro)

router.get('/carrito', rutaIndex.carrito)

router.get('/detalle', rutaIndex.detalle)

router.get('/productos', rutaIndex.productos)

module.exports = router;