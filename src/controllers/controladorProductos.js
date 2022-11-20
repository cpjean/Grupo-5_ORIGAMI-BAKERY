const fs = require ('fs');
const path = require ('path');

let productos = fs.readFileSync(path.resolve('Public/Data/productos.json'),{encoding: 'utf-8'});
productos= JSON.parse(productos);

let controladorProductos = {

    productos: function (req, res){
        res.render ('../views/products/productos.ejs',{productos})
    },
    creacion: function (req, res){
        res.render ('../views/products/creacion.ejs')
    },  
    detalle: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = productos.find(producto=> producto.id == idEdit);
        res.render ('../views/products/detalle.ejs',{ producto })
    }, 
    edicion: function (req, res){
        let idEdit = Number(req.params.id);
        let producto = productos.find(producto=> producto.id == idEdit)
        res.render ('../views/products/edicion.ejs',{producto})
    },    
    destroy: function (req, res){
            let idEdit = Number(req.params.id);
            productos = productos.filter(producto => producto.id !== idEdit);
            fs.writeFileSync(path.resolve('Public/Data/productos.json'), JSON.stringify(productos, null, ' '));
            res.redirect('/productos');
    }
};

module.exports = controladorProductos
