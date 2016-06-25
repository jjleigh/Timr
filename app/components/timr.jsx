import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Timr extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      paused: true,
      minute: this.props.minute,
      second: this.props.second
    }

  }

  incrementMinute() {
    if(this.state.second == 0) {
      this.setState({minute: this.state.minute + 1 });
    }   
  }

  incrementSecond() {
    if(this.state.second < 59 ) {
      this.setState({second: this.state.second + 1 })
    } else {
      this.incrementMinute()
      this.setState({second: 0 });
    }

  }

  changePauseState() {
    if(this.state.paused == true) {
      this.setState({ paused: false })
    } else { 
      this.setState({ paused: true })
    }
  } 



  AddNewTimr() {

  }

  render () {
    return (
      <div id="timr-container">
        <div className="inner">
          <span className="min-container common">
            { this.state.minute }
          </span>
          <span className="separator common"> : </span>
          <span className="sec-container common">
            { this.state.second }
          </span>
        </div>
        <i  className={ `${ this.state.paused == false ? 'hidden-icon ': '' }fa fa-pause icons` } 
            aria-hidden="true" 
            onClick={ () => this.changePauseState() } >
        </i>
        <i className={ `${ this.state.paused == true ? 'hidden-icon ': '' }fa fa-play icons` } aria-hidden="true" onClick={ () => this.changePauseState() }></i>
      </div>
    )
  }
}

export default Timr;
