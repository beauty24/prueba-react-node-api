module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "passwordDB",
  DB: "nueva",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
