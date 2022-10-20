const express = require ('express');

const app = express ();

const path = require ('path');

const publicpath = path.resolve (__dirname,'./Public')

const rutaIndex= require ('./src/routes/rutaIndex');

app.use('/', rutaIndex);

app.use('/login', rutaIndex);

app.use(express.static('public'))

app.use(express.static(publicpath));

app.listen (3030, ()=>{
    console.log ('Servidor corriendo')
});

app.get ('/', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/index.ejs'))
});

app.get ('/carrito', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/products/carrito.ejs'))
});

app.get ('/productos', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/products/productos.ejs'))
});

app.get ('/registro', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/users/registro.ejs'))
});

app.get ('/logIn', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/users/login.ejs'))
});
app.get ('/detalle', (req,res)=>{
    res.sendFile (path.join(__dirname, '.src/views/products/detalle.ejs'))
});

app.set('view engine', 'ejs')

app.set ('views', './src/views')
