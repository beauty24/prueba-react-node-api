const db = require("../models");
const Categoria = db.categorias;
const Op = db.Sequelize.Op;


// Retrieve all Categorias from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.iLike]: `%${title}%` } } : null;

  Categoria.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categorias."
      });
    });
};

// Find a single Categoria with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Categoria.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Categoria with id=" + id
      });
    });
};


