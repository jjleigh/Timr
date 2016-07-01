import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'
import ProgressBar from './progress_bar.jsx'

class Timr extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      paused: true,
      minute: this.props.minute,
      second: this.props.second,
      intervalId: 0
    }
  }

  decrementMinute() {
    if( this.state.paused == false && this.state.second == 59 ) {
      this.setState({minute: this.state.minute - 1 });
    }   
  }

  decrementSecond() {
    if (this.state.paused == false) {
      if(this.state.second > 0) {
        this.setState({second: this.state.second - 1 });
      } else {
        this.setState({second: 59 });
        this.decrementMinute()
      }
    } 
  }

  changePauseState() {
    if( this.state.paused == true ) {
      this.setState({ paused: false });
      let id = setInterval( () => { this.decrementSecond() }, 1000);
      this.setState({intervalId: id });
    } else {
      this.setState({ paused: true });
    }
  }

  render () {
    return (
      <div id="timr-container">      
        <ProgressBar second={ this.state.second } />
        <Clock second={ this.state.second } 
               minute={ this.state.minute } 
               paused={ this.state.paused } 
               callback={ () => this.changePauseState() }/>
      </div>
    )
  }
}

export default Timr;
