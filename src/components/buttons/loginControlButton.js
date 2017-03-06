"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greetings(props) {
    const loggedIn = props.loggedIn;
    if (loggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    <Greetings loggedIn={false} />,
    document.getElementById('app')
);

function LoginButton(props) {
    return <button className="login-button" onClick={props.clickHandler}>Please log in</button>
}
function LogoutButton(props) {
    return <button className="logout-button" onClick={props.clickHandler}>Please log out</button>
}

export default class LoginControlButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: false};
        this.loginHandler = this.loginHandler.bind(this);
        this.logoutHandler = this.logoutHandler.bind(this)
    }

    loginHandler() {
        this.setState({loggedIn: true})
    }

    logoutHandler() {
        this.setState({loggedIn: false})
    }

    render() {
        let button = null;

        if (this.state.loggedIn) {
            button = <LogoutButton clickHandler={this.logoutHandler} />
        } else {
            button =  <LoginButton clickHandler={this.loginHandler} />
        }

        return (
            <div>
                <Greetings loggedIn={this.state.loggedIn} />
                {button}
            </div>
        )
    }
}
