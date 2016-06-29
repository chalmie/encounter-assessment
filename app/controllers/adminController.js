var Model = require('../model/models.js'),
    moment = require('moment')mo

module.exports.displayUsers = function(req,res) {
  User.findAll({
    attributes: [username]
  });
}
