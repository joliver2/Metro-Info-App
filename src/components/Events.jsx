import React, {Component} from 'react';
import Toolbar from './Navigation/Toolbar/Toolbar';
import classes from './Events.css';

class Events extends Component {
    render() {
        return(
          <div className={classes.background}>
            <Toolbar />
            <div className={classes.header}>
              <h1>Events</h1>
              <br></br>
            </div>
          </div>

        )
      }
    }
export default Events
