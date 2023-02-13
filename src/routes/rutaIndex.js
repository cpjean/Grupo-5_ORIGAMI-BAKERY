const express = require('express');

const router = express.Router();

/* requerimos rutaIndex */
const rutaIndex = require ('../controllers/controladorIndex')

/* llamamos al metodo que tenemos en el controlador, */

/* index */
router.get('/', rutaIndex.productos)

module.exports = router;