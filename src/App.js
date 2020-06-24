import React, {Component} from 'react';
import './styles/App.css';
import CustomizedTimeline from './components/CustomizedTimeline'
import Jumbotron from './components/Jumbotron'
import HorizontalTimeline from './components/HorizontalTimeline'
import Table from './components/Table'
import Footer from './components/Footer'

class App extends Component {
	render() {
	  return (
		<div className="App">
			<Jumbotron title={'예발자닷컴'} content={'예비개발자를 위한 무료 코스를 한 눈에 비교하세요.'}></Jumbotron>
			{/* <CustomizedTimeline></CustomizedTimeline> */}
			<HorizontalTimeline></HorizontalTimeline>
			<Table></Table>
			<Footer></Footer>
		</div>
	  );
	}
  }

  export default App;
