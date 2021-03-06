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
    if(this.props.paused == true ) this.filterChange(event, field);
  }

  handleBlur(event, field) {
    if(this.state[field] == '') {
      this.setState({[field]: 0}, () => this.refs[field].blur());
    }
  }

  filterChange(event, field) {
    let value = event.target.value;
    this.shouldUpdate(value) ? this.updateField(field, value) : this.resetField(field)
  }

  updateField(field, value) {
    if (this.shouldBackspace(value, field)) {
      let currentValue = this.state[field].toString();
      let newValue = parseInt(currentValue.slice(0, -1));
      this.setState({[field]: newValue });

    } else {
      this.setState({[field]: value });
    }
  }

  shouldBackspace(value, field) {
    return value == "" && this.state[field] != "" && this.state[field].toString().length > 1
  }

  resetField(field) {
    this.setState({[field]: 60 });
  }

  shouldUpdate(value) {
    return this.emptyValue(value) || this.isValidNumber(value)
  }

  emptyValue(value) {
    let change = parseInt(value);
    return isNaN(change) == true && value.length == 0 
  }

  isValidNumber(value) {
    let change = parseInt(value);
    let type = typeof(change); 
    return type == "number" && isNaN(change) != true && change <= 60 
  }

  render() {
    return(
      <div className={ `${ this.props.visible == true ? '': 'hidden ' }clock-input-container` }>
        <input className="clock-input minute" 
               onKeyUp={ (e) => this.props.updateCallback(e) }
               onChange={ (e) => this.handleChange(e,'minute') }
               onBlur={ (e) => this.handleBlur(e, 'minute') }
               type="minute"
               name="minute"
               ref="minute"
               value={ this.state.minute }
        />
        <span id="separator">:</span>
        <input className="clock-input second" 
               onKeyUp={ (e) => this.props.updateCallback(e) } 
               onChange={ (e) => this.handleChange(e, 'second') }
               onBlur={ (e) => this.handleBlur(e, 'second') }
               type="second"
               name="second"
               ref="second"
               value={ this.state.second }
        />
      </div>
    )  
  }
}

export default ClockInput;
