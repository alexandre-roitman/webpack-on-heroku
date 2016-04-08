'use strict';

import React from 'react';

export default React.createClass({
    displayName: 'Form',

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="title" />
                    <input type="text" placeholder="source1" />
                    <input type="text" placeholder="source2" />
                </form>
            </div>
        );
    }
});