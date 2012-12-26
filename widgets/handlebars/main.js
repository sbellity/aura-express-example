define(['hbs!./template/hello'], function(tpl) {
  return function() {
    this.html(tpl({ name: "Bob" }));
  }
})
