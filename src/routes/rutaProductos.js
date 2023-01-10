const express = require('express');

const router = express.Router();

// requerimiento de middlewares
const authMid = require('../middlewares/authMid');

/* requerimos el controlador */
const rutaProductos = require ('../controllers/controladorProductos');

// requerimiento de middlewares
const multerMid = require('../middlewares/multerMid');
const logMid = require('../middlewares/logueadoMid');
const authMidProductos = require('../middlewares/authMid');


/* listado de productos */
router.get('/', rutaProductos.productos);

// listado de especificos
router.get('/:producto', rutaProductos.productosEspecificos);

/* detalle de un producto */
router.get('/:id/detalle', rutaProductos.detalle);

/* form de creacion y envio la info*/
router.get('/create', authMidProductos, rutaProductos.creacion);
router.post('/create', multerMid.single('img'), rutaProductos.create);

/* obtengo el form de edicion y lo cargo */
router.get('/:id/edicion', authMidProductos, rutaProductos.edicion);
router.put('/:id/edicion', multerMid.single('img'), rutaProductos.update);

/* Acción de borrado */
router.delete('/:id/edicion', rutaProductos.destroy);

module.exports = router;
module.exports = router;