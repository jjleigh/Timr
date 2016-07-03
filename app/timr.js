import React from 'react';
import ReactDOM from 'react-dom';
import Timr from './components/timr/timr.jsx';

var less = require('less');

if (document.getElementById('timr')) {
    ReactDOM.render(<Timr minute={ 0 } second={ 0 }/>,document.getElementById('timr'));
}