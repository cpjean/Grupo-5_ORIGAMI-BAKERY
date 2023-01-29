const { validationResult } = require('express-validator');
const path = require ('path');
const { Sequelize } = require('../database/models');

const db = require ('../database/models');
const Op = Sequelize.Op;
const bcryptjs = require('bcryptjs')

let controladorUsers = {
    // renderizado de la vista de registro
    registro: function (req, res){
        res.render ('./users/registro.ejs')
    },
    // funcion de registro
    processRegistro: (req, res) => {
      // validaciones y errores 
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0){
            return res.render ('./users/registro.ejs', {
                errors: resultadoValidacion.mapped(),
                oldData: req.body
            });
        }
      // defino si ya hay un email igual previamente registrado
      let emailReg = db.User.findOne ({
        where:{
            email: req.body.email}
        });
      //si existe mando un error
      if (emailReg) {
        return res.render ('./users/registro.ejs', {
            errors: {
                email: {
                    msg: 'Este email ya ha sido registrado'
                }
            },
            oldData: req.body
        });        
      } else {
      // definimos la info del usuario a crear
      db.User.create({
        name: req.body.name,
        email: req.body.email,
        avatar: req.file.filename,
        password: bcryptjs.hashSync(req.body.password,10),
        id_category: 2
      }). then (()=>{
        res.redirect 
      // redirigimos al index
        return res.redirect ('/')});
        }
    },
    // renderizado de la vista de login
    ingreso: function (req, res){
        res.render ('./users/login.ejs')
    },
    // funcion de login
    processLogin: function (req, res){
        //defino el usuario en base al email
        db.User.findOne ({
            where: {
                email: req.body.email}
            }).then (userLogEmail => {
        if (userLogEmail){
        // si existe comparo su contraseña del formulario con la guardada
            let userLogPassword = bcryptjs.compareSync (req.body.password, userLogEmail.password);
            if (userLogPassword) {   
        // si coincide borro la contraseña y guardo el resto de la info en session           
            delete userLogEmail.password;
            req.session.userLog = userLogEmail;
        // lo redirijo al index si no renderizo el error
                return res.redirect ('/user/perfil');
            }
            return res.render ('./users/login.ejs', {
                errors: {
                    email: {
                        msg: 'El email o la contraseña son invalidas'
                    }
                }
            })
        }
        // si no existe el email renderizo el error
        return res.render ('./users/login.ejs', {
            errors: {
                email: {
                    msg: 'El email es invalido'
                }
            }
        })
    })
    },
    // logout
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect ('/user/login')
    },
    // perfil e informacion de la sesion
    perfil: (req, res) => {
        res.render ('./users/perfil.ejs', {
            user: req.session.userLog
        })
    }
};

module.exports = controladorUsers