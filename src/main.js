"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/socials/comment';

var shonie = {
    name: 'shonie',
    avatarUrl: "https://pp.userapi.com/c636030/v636030141/27878/hT9-SyOR5bk.jpg"
};

var comment = {
    author: shonie,
    date: (new Date()).toLocaleTimeString(),
    text: 'Hello, Gegos'
};

ReactDOM.render(
    <Comment author={comment.author} text={comment.text} date={comment.date} />,
    document.getElementById('app')
);