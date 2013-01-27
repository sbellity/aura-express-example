define({
  name: 'The Handle of the Bars',

  require: {
    paths:  {
      handlebars:     '/components/require-handlebars-plugin/Handlebars',
      hbs:            '/components/require-handlebars-plugin/hbs',
      i18nprecompile: '/components/require-handlebars-plugin/hbs/i18nprecompile',
      json2 :         '/components/require-handlebars-plugin/hbs/json2'
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
