module.exports = function (sequelize, dataType) {

    let alias = 'Producto';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataType.STRING,
        },
        description: {
            type: dataType.TEXT,
        },
        img: {
            type: dataType.STRING,
        },
        price: {
            type: dataType.DECIMAL,
        },
        createdAt: {
            type: dataType.INTEGER
        },
        updatedAt: {
            type: dataType.INTEGER
        }
    };

    let config = {
        tableName: '',
        timestamps: false
    };

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
    Producto.belongsTo (models.Categoria_producto, {
        as: 'category',
        foreigkey: 'id_category'
    });

    Producto.belongsTo (models.Cant_producto, {
        as: 'lot',
        foreigkey: 'id_lot'
    });

    Producto.belongsToMany (models.Carrito, {
        as: 'carrito',
        through: 'carrito',
        foreigkey: 'id_product',
        otherKey:'id_compra',
        timestamps: false
    }) 
}

    return Producto;
}