const express = require('express');

const router = express.Router();

/* requerimos rutaIndex */
const rutaCarrito = require ('../controllers/controladorCarrito')

/* llamamos al metodo que tenemos en el controlador, */

/* Carrito */
router.get('/', rutaCarrito.carrito);

module.exports = router;