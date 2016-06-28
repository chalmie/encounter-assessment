var Sequelize = require('sequelize')

var attributes = {
  day: {
    type: Sequelize.DATE
  },
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
  },
  userId: {
    type: Sequelize.INTEGER
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options
