const fs = require ('fs');
const path = require ('path');
const multer = require('multer');

const User = {
    getData: function (){
        return JSON.parse(fs.readFileSync(path.resolve('src/data/users.json'), 'utf-8'));
    },
    generateId: function (){
        let allUsers = this.findAll();
        let last = allUsers.pop();
        if (last){
            return last.id + 1;            
        }
        return 1;
    },
    findAll: function (){
        return this.getData();
    },
    findByField: function (field, contenido){
        let allUsers = this.findAll();
        let user = allUsers.find(usuario => usuario[field] === contenido);
        return user;
    },
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
    delete: function (id) {
        let allUsers = this.findAll();
        let newAllUsers = allUsers.filter(usuarios = usuarios.id !== id)
        fs.writeFileSync(path.resolve('src/data/users.json'), JSON.stringify(newAllUsers, null, ' '));
        return true
    }
}
module.exports= User