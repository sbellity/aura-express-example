define({
  name: 'The Handle of the Bars',
  config: {
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
    }
  },

  init: function(core) {
    // TODO: make it easier to inject multiple templating languages ?
    // cf. https://github.com/visionmedia/consolidate.js ?
    var Handlebars = require('handlebars');
    core.template.hbs = Handlebars;
  }
})
