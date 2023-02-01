const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("temperament", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
