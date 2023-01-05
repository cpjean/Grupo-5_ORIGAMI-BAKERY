const { validationResult } = require('express-validator');
const fs = require ('fs');
const path = require ('path');
const { receiveMessageOnPort } = require('worker_threads');
const User = require ('../models/User')
const bcryptjs = require('bcryptjs')

let users = fs.readFileSync(path.resolve('src/data/users.json'),{encoding: 'utf-8'});
users= JSON.parse(users);

let controladorUsers = {

    registro: function (req, res){
        res.render ('./users/registro.ejs')
    },
    processRegistro: (req, res) => {
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0){
            return res.render ('./users/registro.ejs', {
                errors: resultadoValidacion.mapped(),
                oldData: req.body
            });
        }
      let userToCreate = {
        ...req.body,
        password: bcryptjs.hashSync(req.body.password,10),
        avatar: req.file.filename
      } 
        User.create(userToCreate)
        return res.redirect ('/');
    },
    ingreso: function (req, res){
        res.render ('./users/login.ejs')
    },
    processLogin: function (req, res){
        let errors = validationResult(req)
        if (errors.isEmpty()){
            if (users == ''){
                users = [];
            }
            else {
                users = JSON.parse(users)
            }

            for ( let i = 0; i< users.length; i++){
                if (users[i].email==req.body.email){
                    if (bcrypt.compareSync(req.body.password, users[i].contraseña)){
                        let usuarioALoguearse = users[i];
                        break;
                    }

                }
            }
            if (usuarioALoguearse == undefined){
                return res.render('login', {errors:[{msg: 'Usuario invalido'}]})
            } else {
            req.session.usuarioLogueado = usuarioALoguearse;
            res.redirect ('/')};
        }
        else {
            return res.render('/login', {errors:errors.errors})
        }
    }
};

module.exports = controladorUsers