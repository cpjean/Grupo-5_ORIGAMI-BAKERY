module.exports = function (sequelize, dataType) {

    let alias = 'Lot';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Lot: {
            type: dataType.STRING,
        }
    };

    let config = {
        tableName: 'lot_product',
        timestamps: false
    };

    let Lot = sequelize.define(alias, cols, config);

    
    Lot.associate = function (models) {
        Lot.hasMany (models.Product, {
            as: 'Product',
            foreignkey: 'id_lot'
        });
    };

    return Lot;
}