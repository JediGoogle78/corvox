import React from 'react';
import ReactDOM from 'react-dom';
import {FormattedDate} from '../../helpers/dateHelper';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1 onClick={(e) => {
                    console.log('React click event is ', e);
                    e.persist();
                    const event = e;

                    setTimeout(() => {
                        /*
                            in asynchronous code event's properties will be nullified!
                            instead if you use e.persist(); to save and not nullify the event
                          */
                        console.log('after one second React event is ', e);
                        console.log('but saved in constant field ', event);
                    }, 1000)

                }}>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }

    /*
     these 2 methods above are 'lifecycles hooks'

     1.  The componentDidMount() hook runs after
     the component output has been rendered to the DOM. This is a good place to set up a timer.

     2.  And in componentWillUnmount() we just will tear
     down the timer
     */
    componentDidMount() {
        this.timerID = setInterval(
                () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    // other variant of tick() (with dynamic values):
    /*tick() {
     this function recieves two argument:
     1. previous state
     2. props of the component
     this.setState((prevState, props) => ({
     date: prevState.counter + props.increment
     }));
     }*/

    /*
     if you will define some new field in setState, React will merge the previous state's
     object and current, and will not replace unrequested fields
     componentDidMount() {
     fetchPosts().then(response = > {
       this.setState({
         posts: response.posts
       });
     });

     fetchComments().then(response = > {
     // here comment will not override post from above
       this.setState({
         comments: response.comments
       });
     });
     }*/
}