var ehandlebars = require('express-handlebars'),
    moment = require('moment')

module.exports = function(app) {
  var hbs = ehandlebars.create({
    defaultLayout: 'app',
    helpers: {
      formatDate: function (date, format) {
            return moment(date).format(format);
        },
      listEntries: function (entries) {
        var unique = {};
        var distinct = [];
        for( var i in entries ){
         if( typeof(unique[entries[i].day]) == "undefined"){
          distinct.push(entries[i].day);
         }
         unique[entries[i].day] = 0;
        }

        var out = "<ul>";
        for(var j=0, l=distinct.length; j<l; j++) {
          out = out + "<li><a href='#'>" + moment(distinct[j]).format("MMM Do YYYY") + "</a></li>";
        }
        return out + "</ul>";
      },
      section: function(name, options) {
        if (!this._sections) this._sections = {}
        this._sections[name] = options.fn(this)
        return null
      }
    }
  })

  app.engine('handlebars', hbs.engine)
  app.set('view engine', 'handlebars')
}
