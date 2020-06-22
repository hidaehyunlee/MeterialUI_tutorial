import React, {Component} from 'react';
import CustomizedTimeline from './components/CustomizedTimeline'
import './App.css';

class App extends Component {
	render() {
	  return (
		<div className="App">
		  <CustomizedTimeline></CustomizedTimeline>
		</div>
	  );
	}
  }

  export default App;
