define({
  name: "Backbone LocalStorage",

  require: {
    paths: {
      'backbone.localStorage' : 'backbone.localStorage/backbone.localStorage'
    }
  },

  init: function(env) {
    env.sandbox.data.Store = require('backbone').LocalStorage;
  }

})
