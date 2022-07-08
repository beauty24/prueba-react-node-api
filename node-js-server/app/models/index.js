const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.categorias = require("./categoria.model.js")(sequelize, Sequelize);
db.marcas = require("./marca.model.js")(sequelize, Sequelize);
db.productos = require("./producto.model.js")(sequelize, Sequelize);
db.ventas = require("./venta.model.js")(sequelize, Sequelize);
db.productomarca = require("./productomarca.model.js")(sequelize, Sequelize);

db.categorias.hasMany(db.productos, { as: "productos" });
db.productos.belongsTo(db.categorias, {
  foreignKey: "categoriaId",
  as: "categoria",
});


db.productos.hasMany(db.productomarca, { as: "productomarcas" });
db.productomarca.belongsTo(db.productos, {
  foreignKey: "productoId",
  as: "producto",
});

db.marcas.hasMany(db.productomarca, { as: "productomarcas" });
db.productomarca.belongsTo(db.marcas, {
  foreignKey: "marcaId",
  as: "marca",
});

db.productomarca.hasMany(db.ventas, { as: "ventas" });
db.ventas.belongsTo(db.productomarca, {
  foreignKey: "productomarcaId",
  as: "productomarca",
});


module.exports = db;
