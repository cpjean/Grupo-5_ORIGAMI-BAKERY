const express = require('express');

const router = express.Router();

const rutaProductsApi = require('../../controllers/api/controladorProducts');


router.get('/', rutaProductsApi.list);

router.get('/:id', rutaProductsApi.detail);

router.get('/producto/ultimo', rutaProductsApi.ultimoProducto)

module.exports = router;