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

  propTypes: {
    minute: React.PropTypes.object.number,
    second: React.PropTypes.object.number,
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
    if( this.state.paused == true && this.timeGreaterThanZero() ) {
      this.setState({ paused: false , typing: false });
      let id = setInterval( () => { this.decrementSecond() }, 1000);
      this.setState({intervalId: id });
    } else {
      this.setState({ paused: true });
    }
  }

  updateTime(e) {
    if ( this.state.paused == true ) {
      let name = e.target.name;
      let value = parseInt(e.target.value);
      this.setState({[name]: value});
    }
  }

  changeTypingState() {
    if ( this.state.paused == true ) {
      this.setState({typing: true});
    }
  }

  timeGreaterThanZero() {
    return( this.state.second > 0 || this.state.minute > 0)
  }

  render () {
    return (
      <div id="timr-container">      
        <ProgressBar second={ this.state.second } />
        <Clock second={ this.state.second } 
               minute={ this.state.minute } 
               paused={ this.state.paused }
               hidden={ this.state.typing }
               typingCallback={ () => this.changeTypingState() }
               pauseCallback={ () => this.changePauseState() }/> 
        <ClockInput updateCallback={ (e) => this.updateTime(e) } 
                    paused={ this.state.paused } 
                    visible={ this.state.typing } />       
      </div>
    )
  }
}

export default Timr;
