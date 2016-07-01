import React from 'react';
import ReactDOM from 'react-dom';
import Stopr from './components/stopr.jsx';

var less = require('less');

ReactDOM.render(
    <Stopr minute={ 0 } second={ 0 }/>,
    document.getElementById('stopr')
);
