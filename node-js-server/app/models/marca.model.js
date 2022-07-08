module.exports = (sequelize, DataTypes) => {
  const Marca = sequelize.define("marca", {
    nombre: {
      type: DataTypes.STRING
    }
  });

  return Marca;
};
