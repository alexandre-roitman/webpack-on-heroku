'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Rx from 'rx';
import Model from './models/MyModel';

var AppObservable = Rx.Observable.combineLatest(
  Model.subject,
  function (CounterState) {
    return CounterState;
  }
);


AppObservable.subscribe((appState) => {
  ReactDOM.render(
    <App {...appState}/>,
    document.getElementById('app')
  );
});
