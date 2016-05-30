import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/timr';

class Timr extends React {

  constructor(props) {
    super(props)

    this.state = {
      minute: 0,
      second: 0
    }
  }

  IncrementMinute() {
    setInterval( this.setState({minute: this.state.minute + 1 }), 60000);
  }

  IncrementSecond() {
    setInterval( this.setState({second: this.state.second + 1 }), 1000);
  }

  AddNewTimr() {

  }

  render () {
    return (
      <div id="timr-container">
        
        <div className="min-container">
          { this.state.minute }
        </div>
        <div className="sec-container">
          { this.state.second }
        </div>

        <div className="add-timr" onClick="">
          +
        </div>
      </div>
    )
  }
}

export default Timr;
