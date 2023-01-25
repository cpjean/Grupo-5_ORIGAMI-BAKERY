module.exports = function (sequelize, dataType) {

    let alias = 'Product';

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
    };

    let config = {
        tableName: 'product',
        timestamps: false
    };

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo (models.Type, {
        as: 'type',
        foreignkey: 'id_type'
    });
        Product.belongsTo (models.Lot, {
        as: 'lot',
        foreignkey: 'id_lot'
    });
}

    return Product;
}