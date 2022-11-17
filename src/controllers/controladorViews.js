const fs = require ('fs');
const path = require ('path');


let controladorViews = {
    
    index: function (req, res){
        res.render (path.join('../views/index.ejs'));
    },
    ingreso: function (req, res){
        res.render ('./users/login.ejs')
    },
    registro: function (req, res){
        res.render ('./users/registro.ejs')
    },
};

module.exports = controladorViews
