import React from 'react';
import ReactDOM from 'react-dom';
import Belgrade from "./belgrade";
import './../styles/main.scss';

const data = {test: "Test"};
 
document.addEventListener('DOMContentLoaded', function() {
  	ReactDOM.render(
  		<Belgrade data={data}/>,
    	document.getElementById('page')
  	);
});