const Sequelize = require("sequelize");
const { STRING } = Sequelize;
const db = new Sequelize('postgres://localhost/database');    //initialize your db, don't forget to include the possible heroku database URL

moduble.exports = {db};       //export your db
