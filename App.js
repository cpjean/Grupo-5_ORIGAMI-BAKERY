// requerimiento para constantes
const express = require ('express');

const app = express ();

const path = require ('path');

const methodOverride = require('method-override')

const publicpath = path.resolve (__dirname,'./Public')

// rutas
const rutaIndex= require ('./src/routes/rutaIndex.js');
const rutaProductos= require ('./src/routes/rutaProductos.js');
const rutaCarrito= require ('./src/routes/rutaCarrito.js');



// seteos
app.use(methodOverride('_method'));

app.use(express.static('public'))

app.use(express.static(publicpath));

app.set('view engine', 'ejs')

app.set ('views', './src/views')

// ruteo de las vistas
app.use('/', rutaIndex);

app.use('/productos', rutaProductos);

app.use('/carrito', rutaCarrito);

// corre el servidor
app.listen (3030, ()=>{
    console.log ('Servidor corriendo')
});