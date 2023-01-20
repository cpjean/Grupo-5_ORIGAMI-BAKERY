module.exports = function (sequelize, dataType) {

    let alias = 'Carrito';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: {
            type: dataType.INTEGER,
        }
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let Carrito = sequelize.define(alias, cols, config);

    return Carrito;
}