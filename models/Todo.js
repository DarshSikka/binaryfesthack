require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
dialect: process.env.DB_DIALECT,
 port: process.env.PORT
})
const Todo = sequelize.define(
  "Todo",
  {
    todoid: Sequelize.DataTypes.STRING,
    todopassword: Sequelize.DataTypes.STRING,
    todoname: Sequelize.DataTypes.STRING,
    contents: JSON.stringify([])
  },
  {
    timestamps: true,
  }
);
module.exports = Todo;