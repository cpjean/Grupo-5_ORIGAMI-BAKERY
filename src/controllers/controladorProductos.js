const { validationResult } = require('express-validator');
const path = require ('path');
const { Sequelize } = require('../database/models');

const db = require ('../database/models');
const Op = Sequelize.Op;

let controladorProductos = {
    // renderizo la pagina de "productos"
    productos: function (req, res){
        db.Product.findAll()
        .then (function(productos){
            return res.render ('../views/products/productos.ejs',{productos})
        })        
    },
    // renderizo la pagina de "productos" de algun tipo
      productosEspecificos: function (req, res){
        let typeEdit = req.params.producto;
        db.Type.findOne({
            where: {
                name: typeEdit
            }
        }).then((type)=>{
            db.Product.findAll({
                where:{
                    id_type: `${type.id}`
                }
            }).then (function(productos){
                return res.render ('../views/products/productos.ejs',{productos})
            })
        })          
    },
    // renderizo la pagina de detalle de un producto segun el id
    detalle: function (req, res){
        let idProduct = Number(req.params.id);
        db.Product.findOne({
            where: {
                id: idProduct
            }
        }).then (function(producto){ 
            return res.render ('../views/products/detalle.ejs',{producto})
        })
    },
      
    // renderizo la pagina de "creacion" mediante una promesa que me devuelve los tipos y las cantidades
    creacion: function (req, res){
       let types =  db.Type.findAll();
       let lots = db.Lot.findAll();
       Promise
       .all([types, lots]) 
       .then (([allTypes, allLots])=>{
            return res.render ('../views/products/creacion.ejs',{allTypes , allLots})
        })
    },


   

    // uso los datos obtenidos para crear un producto
    create: function (req, res){
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0){
            return res.render ('../views/products/creacion.ejs', {
                errors: resultadoValidacion.mapped(),
                oldData: req.body
            });
        } 
         db.Product.findOne({ 
            where:{
                name: req.body.name
            }
        })

        .then(
            productName => {
                if ( productName ) {
                    return res.render ('../views/products/creacion.ejs',{errors: {
                        name: {msg: "Este producto ya existe"}
                    }, oldData: req.body
                })
                } else {
                    db.Product.create({
                        name: req.body.name,
                        description: req.body.description,
                        price: req.body.price,
                        img: req.file.filename,
                        id_type: req.body.type,
                        id_lot: req.body.lot,
                    }). then (()=>{
                    res.redirect ('/productos')})
                }
                })
            },

    // renderizo la pagina de edicion de un producto segun el id
    edicion: function (req, res){
        let idEdit = Number(req.params.id);
        let types =  db.Type.findAll();
        let lots = db.Lot.findAll();
        let productEdit = db.Product.findByPk (idEdit,{include:['lots', 'types']});
        Promise
        .all([types, lots, productEdit])
        .then (([allTypes,allLots, productEdit]) =>{
           return res.render ('../views/products/edicion.ejs',{allTypes,allLots, productEdit})
        })    
    }, 
    
    // edito un producto
    update:  function (req, res){ 
        let idEdit = Number(req.params.id);
        db.Product.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            img: req.file.filename,
            id_type: req.body.type,
            id_lot: req.body.lot,
        },
        {
            where: { id: idEdit}
        }). then (()=>{
        res.redirect ('/productos')})
    },

        
    // borro un producto
    destroy: function (req, res){
            let idEdit = Number(req.params.id);
            db.Product.destroy({
                where: {
                    id: idEdit},
                    force: true
            })
            .then (() => {
                return res.redirect ('/productos')
            })
    }
};

module.exports = controladorProductos
