import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'
import ClockInput from './clock_input.jsx'
import ProgressBar from './progress_bar.jsx'

class Timr extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      paused: true,
      minute: props.minute,
      second: props.second,
      intervalId: 0,
      typing: false
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
      this.setState({ paused: false , typing: false });
      let id = setInterval( () => { this.decrementSecond() }, 1000);
      this.setState({intervalId: id });
    } else {
      this.setState({ paused: true });
    }
  }

  updateTime(min, sec) {
    if ( this.state.paused == true ) {
      this.setState({minute: min, second: sec});
    }
  }

  changeTypingState() {
    if ( this.state.paused == true ) {
      this.setState({typing: true});
    }
  }

  render () {
    return (
      <div id="timr-container">      
        <ProgressBar second={ this.state.second } />
        <Clock second={ this.state.second } 
               minute={ this.state.minute } 
               paused={ this.state.paused } 
               typingCallback={ () => this.changeTypingState() }
               pauseCallback={ () => this.changePauseState() }/> 
        <ClockInput callback={ () => this.updateTime(minute, second) } 
                    paused={ this.state.paused } 
                    visible={ this.state.typing } />       
      </div>
    )
  }
}

export default Timr;
