import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProgressBar extends React.Component {

  render() {
    return(
      <div className="progress-bar" data-progress={ this.props.second }>
        <div className="progress-circle">
          <div className="progress-cover cover">
            <div className="progress-fill-layer"></div>
          </div>  
          <div className="progress-cover half-cover">
            <div className="progress-fill-layer"></div>
            <div className="progress-fill-layer progress-fix"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProgressBar;