import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ClockInput extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      minute: 0, 
      second: 0,
      paused: props.paused
    }
  }

  handleChange(event,field) {

    if ( this.props.paused == true ){
      let ref = this.refs[field]
      this.setState({[field]: event.target.value })
    }
  }

  render() {
    return(
      <div className="clock-input-container">
        <input className="clock-input minute" 
               onKeyUp={ () => this.props.callback(this.state.minute, this.state.second)} 
               type="minute"
               name="minute"
               ref="minute"
               value={ this.state.minute }
               onChange={ (e) => this.handleChange(e,'minute') }
        />
        <input className="clock-input second" 
               onKeyUp={ () => this.props.callback(this.state.minute, this.state.second)} 
               type="second"
               name="second"
               ref="second"
               value={ this.state.second }
               onChange={ (e) => this.handleChange(e,'second') }
        />
      </div>
    )  
  }
}

export default ClockInput;

// <input className="clock-input second" 
//                onSubmit={ () => this.props.callback(this.state.min, this.state.sec)} 
//                name="second"
//                value={ this.state.value }
//                onChange={ () => this.handleChange('sec') }
//            />