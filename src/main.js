'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import LoginControlButton from './components/buttons/loginControlButton';
import Warning from './components/misc/warning';

const appContainer = document.getElementById('app');

// ReactDOM.render(
//     <LoginControlButton />,
//     appContainer
// );

ReactDOM.render(
    <Warning />,
    appContainer
);
