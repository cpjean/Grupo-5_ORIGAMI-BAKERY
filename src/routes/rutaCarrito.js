const express = require('express');

const router = express.Router();
const logMid = require('../middlewares/logueadoMid');
const authMid = require('../middlewares/authMid');
/* requerimos rutaIndex */
const rutaCarrito = require ('../controllers/controladorCarrito')

/* llamamos al metodo que tenemos en el controlador, */

/* Carrito */
router.get('/',authMid, rutaCarrito.carrito);

module.exports = router;