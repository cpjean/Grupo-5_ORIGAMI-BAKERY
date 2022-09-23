const express = require ('express');

const app = express ();

const path = require ('path');

const publicpath = path.resolve (__dirname,'./Public')

app.use(express.static(publicpath));

app.listen (3030, ()=>{
    console.log ('Servidor corriendo')
});

app.get ('/', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/Index.html'))
});

app.get ('/Carrito', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/Carrito.html'))
});

app.get ('/Productos', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/Productos.html'))
});

app.get ('/Registro', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/Registro.html'))
});

app.get ('/LogIn', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/Login.html'))
});