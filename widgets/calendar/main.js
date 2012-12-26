define(['sandbox', './views/app', './collections/events', './fullcalendar/fullcalendar'], function(sandbox, AppView, Events) {

  return function() {
    var events = new Events();

    new AppView({
      el: this.$el,
      collection: events
    }).render();

    events.fetch();

    sandbox.on('bootstrap', function(from, data) {
      sandbox.log('Calendar-bootstrap message from: ' + from);
      sandbox.log('Additional data:', data);
      sandbox.emit('*','controls');
    });

    sandbox.emit('bootstrap', 'calendar');
    sandbox.emit('*', 'calendar', 'bubblegum');
  }

});
