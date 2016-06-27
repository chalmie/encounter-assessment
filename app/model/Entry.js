var Sequelize = require('sequelize')

var attributes = {
  time: {
    type: Sequelize.STRING,
  },
  patient: {
    type: Sequelize.STRING,
  },
  care: {
    type: Sequelize.STRING,
  },
  note: {
    type: Sequelize.STRING,
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options
