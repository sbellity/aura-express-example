define({
  name: "Backbone LocalStorage",

  config: {
    require: {
      paths: {
        'backbone.localStorage' : 'backbone.localStorage/backbone.localStorage'
      }
    }
  },
  init: function(env) {
    console.warn("Loading Backbone LocalStorage extension...");
    var Store = require('backbone').LocalStorage;
    env.sandbox.data.Store = Store;
  },


})
