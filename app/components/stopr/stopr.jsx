import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'
import ProgressBar from './progress_bar.jsx'

class Stopr extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      paused: true,
      minute: this.props.minute,
      second: this.props.second,
      intervalId: 0
    }
  }

  incrementMinute() {
    if( this.state.paused == false && this.state.second == 0 ) {
      this.setState({minute: this.state.minute + 1 });
    }   
  }

  incrementSecond() {
    if (this.state.paused == false) {
      if(this.state.second < 59 ) {
        this.setState({second: this.state.second + 1 });
      } else {
        this.setState({second: 0 });
        this.incrementMinute()
      }
    } 
  }

  changePauseState() {
    if(this.state.paused == true) {
      this.setState({ paused: false });
      let id = setInterval( () => { this.incrementSecond() }, 1000);
      this.setState({intervalId: id });
    } else { 
      this.setState({ paused: true });
      clearInterval( this.state.intervalId );
    }
  } 

  render () {
    return (
      <div id="stopr-container">      
        <ProgressBar second={ this.state.second } />
        <Clock second={ this.state.second } 
               minute={ this.state.minute } 
               paused={ this.state.paused } 
               callback={ () => this.changePauseState() }/>
      </div>
    )
  }
}

export default Stopr;
