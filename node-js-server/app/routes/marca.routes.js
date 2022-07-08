module.exports = app => {
  const marcas = require("../controllers/marca.controller.js");

  var router = require("express").Router();

  // Retrieve all marcas
  router.get("/", marcas.findAll);

  // Retrieve a single marca with id
  router.get("/:id", marcas.findOne);
  
  // ventas marca producto
  router.get("/ventasmp/:pid/:mid", marcas.findVentasMP);
  
  
  app.use("/api/marcas", router);
};
