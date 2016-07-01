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
