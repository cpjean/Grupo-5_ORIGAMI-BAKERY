const express = require('express');

const router = express.Router();

const rutaUsersApi = require('../../controllers/api/controladorUsers');

router.get('/', rutaUsersApi.list);

router.get('/:id', rutaUsersApi.detail);

module.exports = router;