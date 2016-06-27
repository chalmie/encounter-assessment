var Sequelize = require('sequelize')


var attributes = {
  day: {
    type: Sequelize.DATE
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options
