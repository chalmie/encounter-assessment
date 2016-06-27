var UserMeta = require('./User.js'),
    DayMeta = require('./Day.js'),
    EntryMeta = require('./Entry.js'),
    connection = require('../sequelize.js')

var User = connection.define('users', UserMeta.attributes, UserMeta.options)
var Day = connection.define('days', DayMeta.attributes, DayMeta.options)
var Entry = connection.define('entries', EntryMeta.attributes, EntryMeta.options)



// you can define relationships here

module.exports.User = User
module.exports.Day = Day
module.exports.Entry = Entry
