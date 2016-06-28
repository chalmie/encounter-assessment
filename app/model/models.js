var UserMeta = require('./User.js'),
    EntryMeta = require('./Entry.js'),
    connection = require('../sequelize.js')

var User = connection.define('users', UserMeta.attributes, UserMeta.options)
var Entry = connection.define('entries', EntryMeta.attributes, EntryMeta.options)

User.hasMany(Entry, {as: 'Entries'})

module.exports.User = User
module.exports.Entry = Entry
