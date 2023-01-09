const fs = require ('fs');
const path = require ('path');


let controladorViews = {
    // renderizo el index
    index: function (req, res){
        res.render (path.join('../views/index.ejs'));
    },
    // renderizo la pagina de "nosotros" (EDITAR LA PAGINA PARA QUE SEA FUNCIONAL)
    nosotros: function (req, res){
        res.render (path.join('../views/nosotros.ejs'));
    },
};

module.exports = controladorViews
