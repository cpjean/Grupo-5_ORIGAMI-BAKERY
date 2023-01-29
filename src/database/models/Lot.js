module.exports = function (sequelize, dataType) {

    let alias = 'Lot';

    let cols = {

        id: {
            type: dataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataType.STRING,
        }
    };

    let config = {
        tableName: 'lot_product',
        timestamps: false,
        underscore: true
    };

    const Lot = sequelize.define(alias, cols, config);

    
    Lot.associate = function (models) {
        Lot.hasMany(models.Product, {
            as: 'Products',
            foreignKey: 'id_lot'
        });
    };

    return Lot;
}