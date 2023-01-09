const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

// requerimiento de middlewares
const multerMid = require('../middlewares/multerMid');
const validarMid = require('../middlewares/validacionRegMid');
const logMid = require('../middlewares/logueadoMid');
const authMid = require('../middlewares/authMid');

/* requerimos el controlador de Users */
const rutaUsers = require ('../controllers/controladorUsers');

// ruta de login
router.get('/login', logMid, rutaUsers.ingreso);
router.post('/login', validarMid, rutaUsers.processLogin);

// ruta de registro
router.get('/registro', logMid, rutaUsers.registro);
router.post('/registro', multerMid.single('avatar'), validarMid, rutaUsers.processRegistro);

// ruta de perfil
router.get('/perfil', authMid, rutaUsers.perfil);

// ruta logout
router.get('/logout', rutaUsers.logout);

module.exports = router;