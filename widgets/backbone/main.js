define({
  type: "Backbone",
  events: {
    click: function() {
      alert("Hello Backbone !");
    }
  },
  initialize: function() {
    this.render();
    this.sandbox.on('hello', function() { console.warn('Mon ami backbone says hello...'); });
  },
  render: function() {
    this.$el.html('Hello Backbone');
    return this;
  }
});
