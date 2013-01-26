(function() {
  var historyStarted = false;
  define({
    name: "The Back of the Bone",

    require: {
      paths:  { backbone: 'backbone/backbone' },
      shim:   { backbone: { exports: 'Backbone', deps: ['underscore', 'jquery'] } }
    },

    init: function(app) {
      var Backbone = require('backbone');
      app.core.mvc =  Backbone;
      // env.core.Widgets.Backbone = Backbone.View;
      app.core.registerWidgetType('Backbone', Backbone.View.prototype);
      app.sandbox.mvc = {
        View: function(o) {
          return Backbone.View.extend(o);
        },
        Model: function(o) {
          return Backbone.Model.extend(o);
        },
        Collection: function(o) {
          return Backbone.Collection.extend(o);
        }
      };
    },

    afterAppStart: function(app) {
      if (!historyStarted) {
        app.core.mvc.history.start();
        historyStarted = true;
      }
    },

  })
})();
