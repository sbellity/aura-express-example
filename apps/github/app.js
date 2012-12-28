define(['../../components/aura-express/lib/aura'], function(Aura) {

  var app = Aura({
    name: "Github Stuff",
    github: { clientId: "a2efddacf68294654186" }
  });

  app
    .use('aura/ext/debug')
    .use('extensions/aura-backbone')
    .use('extensions/aura-handlebars')
    .use('apps/github/aura-github')
    .start();
  window.app = app;
});
