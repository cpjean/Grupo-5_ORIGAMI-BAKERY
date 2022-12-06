const { validationResult } = require('express-validator');
const fs = require ('fs');
const path = require ('path');
const { receiveMessageOnPort } = require('worker_threads');

let users = fs.readFileSync(path.resolve('src/Data/users.json'),{encoding: 'utf-8'});
users= JSON.parse(users);

let controladorUsers = {
    
    ingreso: function (req, res){
        res.render ('./users/login.ejs')
    },
    registro: function (req, res){
        res.render ('./users/registro.ejs')
    },
    processLogin: function (req, res){
        let errors = validationResult(req)
        if (errors.isEmpty()){
            if (users == ''){
                users = [];
            }
            else {
            
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
            }
            req.session.usuarioLoguiado = usuarioALoguearse;
            res.render ('exito')
        }
        else {
            return res.render('/login', {errors:errors.errors})
        }
    }
};

module.exports = controladorUsers