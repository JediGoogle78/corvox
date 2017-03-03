'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/socials/comment';
import Clock from './components/misc/clock';

const appContainer = document.getElementById('app');
// var shonie = {
//     name: 'shonie',
//     avatarUrl: "https://pp.userapi.com/c636030/v636030141/27878/hT9-SyOR5bk.jpg"
// };
//
// var comment = {
//     author: shonie,
//     date: (new Date()).toLocaleTimeString(),
//     text: 'Hello, Gegos'
// };
//
// ReactDOM.render(
//     <Comment author={comment.author} text={comment.text} date={comment.date} />,
//     document.getElementById('app')
// );

ReactDOM.render(
    <Clock />,
    appContainer
);

/*
    and just poetry...

 If you imagine a component tree as a waterfall of props, each component's state
 is like an additional water source that joins it at an arbitrary point but also flows down.

 */