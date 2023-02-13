const express = require('express');

const router = express.Router();

const rutaUsersApi = require('../../controllers/api/controladorUsers');

router.get('/products', rutaUsersApi.list);

router.get('/products/:id', rutaUsersApi.detail);

module.exports = router;