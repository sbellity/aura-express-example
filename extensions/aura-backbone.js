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

    init: function(core) {
      var Backbone = require('backbone');
      core.mvc =  Backbone;
      core.Widgets.Backbone = Backbone.View;
    },

    afterAppStart: function(core) {
      if (!historyStarted) {
        core.mvc.history.start();
        historyStarted = true;
      }
    },

    sandbox: function(sandbox, core) {
      sandbox.mvc = {};
      sandbox.mvc.View = function(view) {
        return core.mvc.View.extend(view);
      },
      sandbox.mvc.Model = function(model) {
        return core.mvc.Model.extend(model);
      },
      sandbox.mvc.Collection = function(collection) {
        return core.mvc.Collection.extend(collection);
      }
    }
  })
})();
