const express = require('express');

const router = express.Router();

/* requerimos rutaIndex */
const rutaIndex = require ('../controllers/controladorViews')

/* llamamos al metodo que tenemos en el controlador, */

/* listado de productos */
router.get('/productos', rutaIndex.index)

/* detalle de un producto */
router.get('/productos/:id', rutaIndex.detalle)

/* form de creacion y envio la info*/
router.get('/products/create', rutaIndex.creacion)
router.post('/', rutaIndex.productos)

/* Formulario de edición de productos */
router.get('/productos/:id/edicion', rutaIndex.edicion)

/* Acción de edición (a donde se envía el formulario): */
router.put('/productos/:id', rutaIndex.productos)

/* Acción de borrado */
router.get('/', rutaIndex.index)




router.get('/login', rutaIndex.ingreso)

router.get('/registro', rutaIndex.registro)

router.get('/carrito', rutaIndex.carrito)

router.get('/detalle', rutaIndex.detalle)

router.get('/productos', rutaIndex.productos)

module.exports = router;