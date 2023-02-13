// requerimiento de modulos
const express = require ('express');
const app = express ();
const path = require ('path');
const methodOverride = require('method-override');
const publicpath = path.resolve (__dirname,'./Public');
const session = require('express-session');
const cookies = require ('cookie-parser')

// middlewares
const usuarioLoggedMid = require ('./src/middlewares/usuarioLoggedMid')
const adminMid = require ('./src/middlewares/adminMid')

// rutas
const rutaIndex= require ('./src/routes/rutaIndex.js');
const rutaProductos= require ('./src/routes/rutaProductos.js');
const rutaCarrito= require ('./src/routes/rutaCarrito.js');
const rutaUsers= require ('./src/routes/rutaUsers.js');
const rutaUsersApi = require("./src/routes/api/rutaUsersApi")
const rutaProductsApi = require("./src/routes/api/rutaProductsApi")

// seteos
app.use(methodOverride('_method'));

app.use(express.static('public'))

app.use(express.static(publicpath));

app.set('view engine', 'ejs');

app.set ('views', './src/views');

app.use (session({
    secret:'medialuna',
    resave: false,
    saveUninitialized: false,
}));

app.use (cookies());

app.use (express.urlencoded({extended: false}));

app.use (usuarioLoggedMid);

app.use (adminMid);

// ruteo de las vistas
app.use('/', rutaIndex);

app.use('/productos', rutaProductos);

app.use('/carrito', rutaCarrito);

app.use('/user', rutaUsers);

app.use('/api', rutaUsersApi)

app.use('/api', rutaProductsApi)

// corre el servidor
app.listen (3030, ()=>{
    console.log ('Servidor corriendo en el 3030')
});