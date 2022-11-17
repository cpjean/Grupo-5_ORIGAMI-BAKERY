const express = require('express');

const router = express.Router();

/* requerimos el controlador */
const rutaProductos = require ('../controllers/controladorProductos');


/* listado de productos */
router.get('/', rutaProductos.productos);

/* detalle de un producto */
router.get('/detalle/:id', rutaProductos.detalle);

/* form de creacion y envio la info*/
router.get('/productos/create', rutaProductos.creacion);
router.post('/', rutaProductos.productos);

/* objtengo el form de edicion y lo cargo */
router.get('/:id/edicion', rutaProductos.edicion);
router.put('/detalle/:id', rutaProductos.edicion);

/* Acción de borrado */
router.delete('/detalle/:id', function(req,res){
    res.send('Producto eliminado')
});

module.exports = router;