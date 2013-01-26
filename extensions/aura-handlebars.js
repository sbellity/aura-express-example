define({
  name: 'The Handle of the Bars',

  require: {
    paths:  {
      handlebars:     'require-handlebars-plugin/Handlebars',
      hbs:            'require-handlebars-plugin/hbs',
      i18nprecompile: 'require-handlebars-plugin/hbs/i18nprecompile',
      json2 :         'require-handlebars-plugin/hbs/json2'
    },
    hbs: {
      disableI18n: true,
      disableHelpers: true,
      templateExtension: 'hbs'
    }
  },

  init: function(app) {
    // TODO: make it easier to inject multiple templating languages ?
    // cf. https://github.com/visionmedia/consolidate.js ?
    var Handlebars = require('handlebars');
    app.core.template.hbs = Handlebars;
  }
})
