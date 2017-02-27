"use strict";

import React from 'react';
import ReactDOM from 'react-dom';


/*
    this is first example of working react - rendering the timer
 */
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(
//         element,
//         document.getElementById('app')
//     );
// }
// setInterval(tick, 1000);



/*
    this is an example of what the React's Components are:
 */
function ToUpperCase(props) {
    return <div>Hello, {props.name.toUpperCase()}</div>
}
// this is React Component
const App = () => {
    return(
        <div>
            <ToUpperCase name="shonie" />
            <ToUpperCase name="Julia" />
            <ToUpperCase name="vasya" />
        </div>
    )
};

// and we can render it now!!! youhow!
ReactDOM.render(<App />, document.getElementById("app"));

