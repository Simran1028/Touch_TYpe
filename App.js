import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

// import Typing from './Components/Typing';
import {Scorecard} from './Components/Scorecard';
// import Typingchallenge from './Components/Typingchallenge';
import Container from './Components/Container';

const defaultState={
	timestart: false,
	time: 30,
	details:{
		words:0,
		characters:0,
		mistakes:0
	}
}
class App extends React.Component {
	constructor() {
		super();

		this.state = defaultState
	}
	handleOnType = (inputValue) => {
		
		if(!this.state.timestart)this.startTime();

		// this.setState({details:testDetailsCalculator(this.state.paragraph.value,inputValue)})
	}

	triggerTryAgain=()=>this.setState(defaultState)
	
    startTime=()=>{
		this.setState({
			timestart:true
		})
		const timer=setInterval(()=>{
      if(this.state.time>0){
		this.setState({time:this.state.time-1})
	  }else{
		clearInterval(timer);
	  }
		},1000)
	}
	render() {
		return (
<>
			 

			<div className="app-container" style={{ display: 'flex', height: '10vh', background: 'lightcyan' }}>
				<h1 style={{ padding: '0.01rem', margin: '1rem' }}>Touch Typing</h1>

				<div className="test-container-main">
					
					<Container
					timestart={this.state.timestart}
					time={this.state.time}
					handleOnType={this.handleOnType}
					triggerTryAgain={this.triggerTryAgain}
					words={this.state.details.words}
					characters={this.state.details.characters}
					mistakes={this.state.details.mistakes}
					/>
					{/* <Scorecard
					words={this.state.details.words}
					characters={this.state.details.characters}
					mistakes={this.state.details.mistakes}
					/> */}
				</div>
			</div>
			</>
			
			
		)
	}
}


 export default App;

