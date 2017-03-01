import React from 'react';
import UserInfo from '../users/userInfo';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
            </div>
        )
    }
}