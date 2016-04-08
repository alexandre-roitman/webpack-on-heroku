'use strict';

import React from 'react';
import Form from './Form.jsx';
import Intent from '../intents/MyIntent';


export default React.createClass({
    displayName: 'App',
    handleClick() {
        console.log('click');
        Intent.incrementCounter();
    },
    render() {
        return (
            <div>
                <div onClick={this.handleClick}>Click</div>
                <div>Counter: {this.props.counter}</div>
                <Form />
            </div>
        );
    }
});