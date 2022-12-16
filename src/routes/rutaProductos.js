const express = require('express');

const router = express.Router();

/* requerimos el controlador */
const rutaProductos = require ('../controllers/controladorProductos');


/* listado de productos */
router.get('/', rutaProductos.productos);

/* detalle de un producto */
router.get('/:id/detalle', rutaProductos.detalle);

/* form de creacion y envio la info*/
router.get('/create', rutaProductos.creacion);
router.post('/', rutaProductos.productos);

/* objtengo el form de edicion y lo cargo */
router.get('/:id/edicion', rutaProductos.edicion);
router.put('/:id/detalle', rutaProductos.update);

/* Acción de borrado */
router.delete('/:id/edicion', rutaProductos.destroy);

module.exports = router;