define({
  name: "Backbone LocalStorage",

  config: {
    require: {
      paths: {
        'backbone.localStorage' : 'backbone.localStorage/backbone.localStorage'
      }
    }
  },
  init: function(core) {
    console.warn("Loading Backbone LocalStorage extension...");
  },

  sandbox: function(sandbox, core) {
    var Store = require('backbone').LocalStorage;
    sandbox.data.Store = Store;
  }

})
