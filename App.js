const express = require ('express');

const app = express ();

const path = require ('path');

const publicpath = path.resolve (__dirname,'./Public')

app.use(express.static(publicpath));

app.listen (3030, ()=>{
    console.log ('Servidor corriendo')
});

app.get ('/', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/index.html'))
});

app.get ('/carrito', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/products/carrito.html'))
});

app.get ('/productos', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/products/productos.html'))
});

app.get ('/registro', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/users/registro.html'))
});

app.get ('/logIn', (req,res)=>{
    res.sendFile (path.join(__dirname, './src/views/users/login.html'))
});
app.get ('/detalle', (req,res)=>{
    res.sendFile (path.join(__dirname, '.src/views/products/detalle.html'))
});