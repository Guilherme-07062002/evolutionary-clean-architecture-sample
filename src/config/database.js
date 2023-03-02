const Sequelize = require('sequelize')
sequelize = new Sequelize("bd", "user", "12345", {
    dialect: "sqlite",
    host: "bd.sqlite"
})
module.exports = sequelize