module.exports = app => {
  const categorias = require("../controllers/categoria.controller.js");

  var router = require("express").Router();

  // Retrieve all categorias
  router.get("/", categorias.findAll);

  // Retrieve a single categoria with id
  router.get("/:id", categorias.findOne);


  app.use("/api/categorias", router);
};
