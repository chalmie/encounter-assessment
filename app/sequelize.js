var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://localhost/example')

module.exports = sequelize
