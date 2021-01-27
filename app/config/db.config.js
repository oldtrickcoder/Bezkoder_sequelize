module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "bezkoder_rest_api",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };