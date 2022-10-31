const express = require ('express');

const app = express ();

const path = require ('path');

const publicpath = path.resolve (__dirname,'./Public')

const rutaIndex= require ('./src/routes/rutaIndex');

const methodOverride = require('method-override')

app.use(methodOverride('_method'));

app.use(express.static('public'))

app.use(express.static(publicpath));

app.set('view engine', 'ejs')

app.set ('views', './src/views')


app.use('/', rutaIndex);

app.use('/login', rutaIndex);

app.use('/registro', rutaIndex);

app.use('/productos', rutaIndex);

app.use('/carrito', rutaIndex);

app.use('/detalle', rutaIndex);

app.listen (3030, ()=>{
    console.log ('Servidor corriendo')
});