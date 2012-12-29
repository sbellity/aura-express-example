(function() {
  var historyStarted = false;
  define({
    name: "The Back of the Bone",
    config: {
      require: {
        paths:  { backbone: 'backbone/backbone' },
        shim:   { backbone: { exports: 'Backbone', deps: ['underscore', 'jquery'] } }
      }
    },

    init: function(env) {
      var Backbone = require('backbone');
      env.core.mvc =  Backbone;
      env.core.Widgets.Backbone = Backbone.View;
      env.sandbox.mvc = {
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

    afterAppStart: function(env) {
      if (!historyStarted) {
        env.core.mvc.history.start();
        historyStarted = true;
      }
    },

  })
})();
