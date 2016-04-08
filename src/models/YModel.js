var Rx = require('rx');
var update = require('react/lib/update');

var subject = new Rx.ReplaySubject(1);

function switchGreeting() {
  state = update(state, {
    $merge: {
      greeting: state.greeting === yahharo ? haroharo : yahharo
    }
  });
  subject.onNext(state);
}

YahharoIntent.subject.subscribe(function (payload) {
  switch(payload.key) {
    case YahharoKeys.SWITCH_GREETING:
      switchGreeting();
      break;
    default:
      console.warn(`${payload.key} not recognized in model.`);
  }
});

subject.onNext(state);

module.exports = {
  subject: subject
};