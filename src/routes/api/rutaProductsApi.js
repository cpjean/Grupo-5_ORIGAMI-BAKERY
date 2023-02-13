const express = require('express');

const router = express.Router();

const rutaProductsApi = require('../../controllers/api/controladorProducts');

router.get('/users', rutaProductsApi.list);

router.get('/users/:id', rutaProductsApi.detail);

module.exports = router;