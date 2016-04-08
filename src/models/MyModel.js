var Rx = require('rx');
var update = require('react/lib/update');
var Intent = require('../intents/MyIntent');

var subject = new Rx.ReplaySubject(1);

var state = {
  counter: 0
};

function incrementCounter() {
  state = update(state, {
    $merge: {
      counter: state.counter + 1
    }
  });
  subject.onNext(state);
}

Intent.subject.subscribe(incrementCounter);
subject.onNext(state);

module.exports = {
  subject: subject
};