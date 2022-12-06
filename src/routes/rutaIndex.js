const express = require('express');

const router = express.Router();

/* requerimos rutaIndex */
const rutaIndex = require ('../controllers/controladorViews')

/* llamamos al metodo que tenemos en el controlador, */

/* index */
router.get('/', rutaIndex.index)

router.get('/nosotros', rutaIndex.nosotros)



module.exports = router;