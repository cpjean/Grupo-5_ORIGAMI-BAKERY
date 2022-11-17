const fs = require ('fs');
const path = require ('path');

let productos = fs.readFileSync(path.resolve('Public/Data/productos.json'),{encoding: 'utf-8'});
productos= JSON.parse(productos);

let controladorProductos = {

    productos: function (req, res){
        res.render ('./products/productos.ejs',{productos})
    },
    creacion: function (req, res){
        res.render ('./products/creacion.ejs')
    },  
    detalle: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = productos.find(producto=> producto.id == idEdit)
        res.render ('./products/detalle.ejs',{producto})
    }, 
    edicion: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = productos.find(producto=> producto.id == idEdit)
        res.render ('./products/edicion.ejs',{producto})
    },    
    destroy: function (req, res){
            let idEdit = Number(req.params.id);
            productos = productos.filter(producto => producto.id !== idEdit);
            res.send("Eliminado"),{productos:productos};
    }
};

module.exports = controladorProductos
