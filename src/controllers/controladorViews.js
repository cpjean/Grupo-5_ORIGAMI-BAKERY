const fs = require ('fs');
const path = require ('path');


let controladorViews = {
    
    index: function (req, res){
        res.render (path.join('../views/index.ejs'));
    },
    nosotros: function (req, res){
        res.render (path.join('../views/nosotros.ejs'));
    },
};

module.exports = controladorViews
