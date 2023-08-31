const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
sequelize.define('Activities', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    duration: DataTypes.DECIMAL(5, 2),
    season: {
        type: DataTypes.STRING,
        allowNull: false,
    },},
    {timestamps:false}
);
};