var Model = require('../model/models.js'),
    moment = require('moment')

// var now = moment(new Date()).format("YYYY-MM-DD")

module.exports.createDay = function(req, res) {
  var now = moment(new Date()).format("YYYY-MM-DD")

  var newDay = {
  day: now,
  }

  // var reqEntries = req.body.entries
  // var entries = reqEntries[0]
  var entries = req.body
  var entryArray = []

  res.send(entries);


  Model.Day.create(newDay)


}
