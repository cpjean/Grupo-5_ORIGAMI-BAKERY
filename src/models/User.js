const fs = require ('fs');
const path = require ('path');
const multer = require('multer');

// creo metodos para usar en los controles de usuarios
const User = {
    // llamo y paso a un array de objetos a la data de usuarios
    getData: function (){
        return JSON.parse(fs.readFileSync(path.resolve('src/data/users.json'), 'utf-8'));
    },
    // genero el id en base al ultimo id de usuarios, si no hay genero el 1
    generateId: function (){
        let allUsers = this.findAll();
        let last = allUsers.pop();
        if (last){
            return last.id + 1;            
        }
        return 1;
    },
    // retorno todos los usuarios
    findAll: function (){
        return this.getData();
    },
    // busco un usuario especifico 
    findByField: function (field, contenido){
        let allUsers = this.findAll();
        let user = allUsers.find(usuario => usuario[field] === contenido);
        return user;
    },
    // creo un usuario nuevo
    create: function (userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            avatar: userData.avatar,
            name: userData.name,
            category: "user",
            email: userData.email,
            password: userData.password
        }
        allUsers.push(newUser);
        fs.writeFileSync(path.resolve('src/data/users.json'), JSON.stringify(allUsers, null, ' '));
        return newUser;
    },
    // borro un usuario (arreglar la pagina de perfil)
    delete: function (id) {
        let allUsers = this.findAll();
        let newAllUsers = allUsers.filter(usuarios => usuarios.id !== id)
        fs.writeFileSync(path.resolve('src/data/users.json'), JSON.stringify(newAllUsers, null, ' '));
        return true
    }
}
module.exports= User