(function() {

  if (Meteor.is_client) {
    Template.hello.greeting = function() {
      return "Well, you could be a tad fitter...";
    };
    Template.hello.events = {
      'click input': function() {
        if (typeof console !== "undefined" && console !== null) {
          return console.log("You pressed the button");
        }
      }
    };
  }

  if (Meteor.is_server) {
    Meteor.startup(function() {
      return console.log('starting up...');
    });
  }

}).call(this);
