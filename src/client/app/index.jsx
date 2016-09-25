// React + React-Router Dependencies
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

// Importing the React components from components folder
import App from './components/App.jsx'

render((
	<Router history={browserHistory}> 
	  <Route path="/" component={App} />
	</Router>
), document.getElementById('app')); 

