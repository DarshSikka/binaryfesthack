require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DATABASE_URL);
const User = sequelize.define(
    "user", 
    {
        id: sequelize.DataTypes.STRING,
        user_password: sequelize.DataTypes.STRING,
        username: sequelize.DataTypes.STRING,
        email: sequelize.DataTypes.STRING,
        number: sequelize.DataTypes.STRING
    }
)