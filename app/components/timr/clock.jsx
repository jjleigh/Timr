import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {

  render() {
    return(
      <div className="clock-outer-container">
        <div id="clock-inner-container">
          <div className={ `${ this.props.hidden == true ? 'hidden ': '' }inner` }>
            <span className="min-container common" onClick={ this.props.typingCallback }>
              { this.props.minute.toString().length == 1 ? "0" + this.props.minute : this.props.minute }
            </span>
            <span className="separator common"> : </span>
            <span className="sec-container common" onClick={ this.props.typingCallback }>
              { this.props.second.toString().length == 1 ? "0" + this.props.second : this.props.second }
            </span>
          </div>
          <i className={ `${ this.props.paused == true ? 'hidden-icon ': '' }fa fa-pause icons` } 
             aria-hidden="true" 
             onClick={ this.props.pauseCallback  } ></i>
          <i className={ `${ this.props.paused == false ? 'hidden-icon ': '' }fa fa-play icons` } 
             aria-hidden="true" 
             onClick={ this.props.pauseCallback }></i>
        </div>
      </div>  
    )
  }   
}

export default Clock;