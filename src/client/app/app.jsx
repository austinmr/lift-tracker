import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
    	<div> 
    		<h3> Welcome to the React Stack Starter Kit </h3>
    		<p> Begin your project here </p>
    	</div>
    ); 
  }
}

render(<App/>, document.getElementById('app'));