const express = require('express');

const router = express.Router();

/* requerimos rutaIndex */
const rutaIndex = require ('../controllers/controladorViews')

/* llamamos al metodo que tenemos en el controlador, */

/* listado de productos */
router.get('/productos', rutaIndex.productos)

/* detalle de un producto */
router.get('/productos/:id', rutaIndex.detalle)

/* form de creacion y envio la info*/
router.get('/productos/create', rutaIndex.creacion)
router.post('/', rutaIndex.productos)

/* objtengo el form de edicion y lo cargo */
router.get('/productos/:id/edicion', rutaIndex.edicion)
router.put('/productos/:id', rutaIndex.update)

/* Acción de borrado */
router.delete('/productos/:id', rutaIndex.destroy)


router.get('/', rutaIndex.index)

router.get('/login', rutaIndex.ingreso)

router.get('/registro', rutaIndex.registro)

router.get('/carrito', rutaIndex.carrito)

router.get('/detalle', rutaIndex.detalle)

router.get('/productos', rutaIndex.productos)

router.get('/creacion', rutaIndex.creacion)

router.get('/edicion', rutaIndex.edicion)

module.exports = router;