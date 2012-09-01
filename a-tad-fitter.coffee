if Meteor.is_client
  Template.hello.greeting = -> 
    return "Well, you could be a tad fitter..."

  Template.hello.events = 
    'click input': ->
      console.log("You pressed the button") if console?

if Meteor.is_server
  Meteor.startup ->
    console.log('starting up...')
