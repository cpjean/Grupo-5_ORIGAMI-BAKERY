const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

// requerimiento de middlewares
const multerMid = require('../middlewares/multerMid');
const validarMid = require('../middlewares/validacionRegMid');

/* requerimos el controlador de Users */
const rutaUsers = require ('../controllers/controladorUsers');


router.get('/login', rutaUsers.ingreso)
router.post('/login', validarMid, rutaUsers.processLogin)

router.get('/registro', rutaUsers.registro)
router.post('/registro', multerMid.single('avatar'), validarMid, rutaUsers.processRegistro)

module.exports = router;