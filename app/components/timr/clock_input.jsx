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
    if(this.props.paused == true ){  
      this.filterChange(event, field);
    }
  }

  filterChange(event, field) {
    let value = event.target.value
    let change = parseInt(value);
    let type = typeof(change); 
    this.shouldUpdate(change, type, value) ? this.updateField(field, value) : this.resetField(field)
  }

  updateField(field, value) {
    let ref = this.refs[field];
    
    if (value == "" && this.state[field] != "") {
      let currentValue = this.state[field].toString();
      let newValue = parseInt(currentValue.slice(0, -1));
      this.setState({[field]: newValue });
    } else {
      this.setState({[field]: value });
    }
  }

  resetField(field) {
    field == 'minute' ? this.setState({[field]: 99 }) : this.setState({[field]: 60 })
  }

  shouldUpdate(change, type, value, field) {
    return this.emptyOrNum(change, value, type, field);
  }

  numWithinValidRange(field, change){
    return field == 'minute' ? change <= 99 : change <= 60 
  }

  emptyOrNum(change, value, type, field) {
    return this.emptyValue(change, value) || this.isValidNumber(type, change, field)
  }

  emptyValue(change, value) {
    return isNaN(change) == true && value.length == 0 
  }

  isValidNumber(type, change, field) {
    return type == "number" && isNaN(change) != true && this.numWithinValidRange(field, change)
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
