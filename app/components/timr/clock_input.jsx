import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ClockInput extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      minute: '', 
      second: '',
      paused: props.paused
    }
  }

  handleChange(event, field) {
    if ( this.props.paused == true ){
      this.filterChange(event, field);
    }
  }

  filterChange(event, field) {
    let change = parseInt(event.target.value);
    let type = typeof(parseInt(event.target.value));
    
    if( isNaN(change) != true && type == "number" ) {
      let ref = this.refs[field];
      this.setState({[field]: event.target.value });
    } 
  }

  render() {
    return(
      <div className={ `${ this.props.visible == true ? '': 'hidden ' }clock-input-container` }>
        <input className="clock-input minute" 
               onKeyUp={ (e) => this.props.updateCallback(e)} 
               type="minute"
               name="minute"
               ref="minute"
               value={ this.state.minute }
               onChange={ (e) => this.handleChange(e,'minute') }
        />
        <span id="separator">:</span>
        <input className="clock-input second" 
               onKeyUp={ (e) => this.props.updateCallback(e)} 
               type="second"
               name="second"
               ref="second"
               value={ this.state.second }
               onChange={ (e) => this.handleChange(e, 'second') }
        />
      </div>
    )  
  }
}

export default ClockInput;
