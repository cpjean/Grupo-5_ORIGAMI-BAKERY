module.exports = function (sequelize, dataType) {

    let alias = 'Compra';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataType.STRING,
        },
        date: {
            type: dataType.INTEGER
        },
        total: {
            type: dataType.INTEGER
        },
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let Compra = sequelize.define(alias, cols, config);

    Compra.associate = function (models) {
        Compra.hasMany (models.Usuario, {
            as: 'users',
            foreigkey: 'id_cliente'
        });

        Compra.belongsTo (models.Medio_de_pago, {
            as: 'medio de pago',
            foreigkey: 'id_medio_de_pago'           
        });

        Compra.belongsToMany (models.Carrito), {
            as: 'carritos',
            through: 'carrito',
            foreigkey: 'id_compra',
            otherKey: 'id_producto',
            timestamps: false
        }
    }

    return Compra;
}