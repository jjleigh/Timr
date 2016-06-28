import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
            { this.state.second.toString().length == 1 ? "0" + this.state.second : this.state.second }
          </span>
        </div>
        <i  className={ `${ this.state.paused == true ? 'hidden-icon ': '' }fa fa-pause icons` } 
            aria-hidden="true" 
            onClick={ () => this.changePauseState() } >
        </i>
        <i  className={ `${ this.state.paused == false ? 'hidden-icon ': '' }fa fa-play icons` } 
            aria-hidden="true" 
            onClick={ () => this.changePauseState() }>
        </i>
      </div>
    )
  }
}

export default Timr;
