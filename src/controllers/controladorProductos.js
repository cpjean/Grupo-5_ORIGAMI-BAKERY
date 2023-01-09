const fs = require ('fs');
const path = require ('path');
const Producto = require ('../models/Producto')

const productos = Producto.findAll()

let controladorProductos = {
    // renderizo la pagina de "productos"
    productos: function (req, res){
        res.render ('../views/products/productos.ejs',{productos})
    },
    // renderizo la pagina de "creacion"
    creacion: function (req, res){
        res.render ('../views/products/creacion.ejs')
    },
    // uso los datos obtenidos para crear un producto
    create: function (req, res){
        let newProducto = {
            ...req.body,
            img: req.file.filename
        }
        Producto.create (newProducto)
        res.redirect ('/')
    }, 
    // renderizo la pagina de detalle de un producto segun el id
    detalle: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = Producto.findByField ('id', idEdit);
        res.render ('../views/products/detalle.ejs',{ producto })
    }, 
    // renderizo la pagina de edicion de un producto segun el id
    edicion: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = Producto.findByField ('id', idEdit);
        res.render ('../views/products/edicion.ejs',{producto})
    },
    // edito un producto
    update:  function (req, res){
        let idEdit = Number(req.params.id);
        let editProducto = {
            ...req.body,
            id: idEdit,
            img: req.file.filename
        }
        Producto.update(editProducto)
        res.redirect('/productos');

    },
    // borro un producto
    destroy: function (req, res){
            let idEdit = Number(req.params.id);
            Producto.delete(idEdit)
            res.redirect('/productos');
    }
};

module.exports = controladorProductos
