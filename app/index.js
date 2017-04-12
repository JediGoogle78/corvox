"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
const appContainer = document.getElementById('app');

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='incredibleClassName'>
                hello world <br></br>
                <input type="password"></input>
                <input type="text"></input>
            </div>
        )
    }
}

// TODO figure out what to do with FOUC (Flash Of Unstyled Content)
if (process.env.NODE_ENV !== 'production') {
    import('./stylesheets/index.scss')
        .then(() => {
            ReactDOM.render(
                <App />,
                appContainer
            );
        });
}