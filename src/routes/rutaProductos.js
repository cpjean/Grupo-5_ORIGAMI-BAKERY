const express = require('express');

const router = express.Router();


/* requerimos el controlador */
const rutaProductos = require ('../controllers/controladorProductos');

// requerimiento de middlewares
const multerMid = require('../middlewares/multerMidProduct');
const authMidProductos = require('../middlewares/authMid');
const rutaProductMid = require('../middlewares/rutaProductMid')


/* listado de productos */
router.get('/', rutaProductos.productos);

// listado de especificos
router.get('/:producto', rutaProductMid, rutaProductos.productosEspecificos);

/* detalle de un producto */
router.get('/:id/detalle', rutaProductos.detalle);

/* form de creacion y envio la info*/
router.get('/add/create', authMidProductos, rutaProductos.creacion);
router.post('/add/create', multerMid.single('img'), rutaProductos.create);

/* obtengo el form de edicion y lo cargo */
router.get('/:id/edicion', authMidProductos, rutaProductos.edicion);
router.put('/:id/edicion', multerMid.single('img'), rutaProductos.update);

/* Acción de borrado */
router.delete('/:id/edicion', rutaProductos.destroy);


module.exports = router;