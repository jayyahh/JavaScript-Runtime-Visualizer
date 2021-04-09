import './App.css';
import UploadButton from './components/UploadButton';
import ClickToSeeGraphInstruction from './components/ClickToSeeGraphInstruction';
import ProjectInstruction from './components/ProjectInstruction';
import FunctionBreakdown from './components/FunctionBreakdown'
import Stats from './components/Stats'
import ShapeVisuals from './components/ShapeVisuals'
import ToggleGraph from './components/ToggleGraph';
import React, { Component } from 'react';

class App extends Component {
	state = {
		data: {},
		onClickFuncName: '',
		totalRuntime: 0,
		totalLines: 0
	}

	setOnClickFunc = (onClickFunc) => {
		this.setState({ onClickFuncName: onClickFunc });
	}

	setFuncBreakdownData = (funcData) => {
		this.setState({ data: funcData });
	}

	setRuntime = (time) => {
		this.setState({totalRuntime: time});
	}

	setLines = (lines) => {
		this.setState({totalLines: lines});
	}

	render() {
		return (
			<div className="App">
				<React.Fragment>
					<ProjectInstruction />
					<UploadButton setOnClickFunc={this.setOnClickFunc} setFuncBreakdownData={this.setFuncBreakdownData} setRuntime={this.setRuntime} setLines={this.setLines} />
					<ToggleGraph />
					<Stats runtime={this.state.totalRuntime} lineNum={this.state.totalLines}/>
					<ShapeVisuals />
					<ClickToSeeGraphInstruction />
					<FunctionBreakdown funcBreakdownData={this.state.data} onClickFunc={this.state.onClickFuncName} />
				</React.Fragment>
			</div>
		);
	}
}

export default App;
