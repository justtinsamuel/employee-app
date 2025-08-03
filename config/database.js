const { sequelize } = require("sequelize");
const { Sequelize } = require("../models");

const sequelize = new Sequelize("HR_management", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});
