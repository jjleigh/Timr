import React from 'react';
import ReactDOM from 'react-dom';
import Timr from './components/timr.jsx';

var less = require('less');

ReactDOM.render(
	<Timr minute={ 0 } second={ 0 }/>,
	document.getElementById('timr')
);
