const path = require ('path');
const { Sequelize } = require('../database/models');

const db = require ('../database/models');
const Op = Sequelize.Op;
module.exports= {
    productos: function (req, res){
        db.Product.findAll()
        .then (function(productos){
            return res.render (path.join('../views/index.ejs'),{productos})
        })
    } 
}
