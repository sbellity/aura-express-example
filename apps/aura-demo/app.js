define(['../../components/aura-express/lib/aura'], function(Aura) {

  var superExt = function(core) {
    core.super = "YEAH !";
  };

  var app = Aura({ name: "super app " });
  app
    .use(superExt)
    .use('extensions/aura-i18n')
    .use('extensions/aura-handlebars')
    .use('extensions/aura-backbone')
    .use('extensions/aura-backbone-localstorage')
    .use('extensions/aura-jquery-ui')
    .start()
    .done(function() {
      console.warn("App Started ok !");
    });

  window.app = app;

});
