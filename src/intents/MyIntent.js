var Rx = require('rx');
var intentSubject = new Rx.ReplaySubject(1);
var update = require('react/lib/update');

module.exports = {
  subject: intentSubject,

  incrementCounter: function () {
    intentSubject.onNext();
  }
};