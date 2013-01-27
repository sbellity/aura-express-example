define({
  name: "Backbone LocalStorage",

  require: {
    paths: {
      'backbone.localStorage' : '/components/backbone.localStorage/backbone.localStorage'
    }
  },

  init: function(env) {
    env.sandbox.data.Store = require('backbone').LocalStorage;
  }

})
