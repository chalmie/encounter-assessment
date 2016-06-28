var Model = require('../../app/model/models.js')

module.exports = function(callback) {
  // recreate User table
  Model.User.sync({ force: true }).then(function() {
    // create username with username: user and
    // password: user
    Model.User.create({
      username: 'user',
      password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
    }).then(callback)
  })

  Model.Entry.sync({ force: true }).then(function() {
    Model.Entry.create({
      day: '2012-06-27',
      time: '00:15',
      patient: 'John Smith',
      care: 'Physical Rehab',
      note: 'Steady Improvement',
      userId: 1
    }).then(callback)
  })
}
