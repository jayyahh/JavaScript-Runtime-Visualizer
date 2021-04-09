import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'react-tree-graph/dist/style.css'
import './styles.css';
import pageManager from '../controllers/pageManager';
import Treemap from 'treemap-chart';
import runtimeAnalyzer from '../controllers/runtimeAnalyzer';
import astParser from '../controllers/astParser';

class UploadButton extends Component {
	constructor(props){
		super(props);
	}

	state = {
		code: ''
	}

	onFileUpload = (e) => {
		let file = e.target.files[0];

		let reader = new FileReader();
		if (file) {
			reader.readAsText(file);
			reader.onload = (e) => {
				this.setState({ code: e.target.result });
			}
		}
	}

	onSubmit = (e) => {
		if (this.state.code === '') {
			return;
		}
		pageManager.setTotalRuntimeDisplay(true);
		pageManager.clearOldUpload();

		this.buildShapeGraphs(this.state.code);
		pageManager.setClickToSeeInstructionDisplay(true);
		pageManager.setRuntimeGraphDisplay(true);
		pageManager.setSizeGraphGraphDisplay(false);
		pageManager.setTotalRuntimeDisplay(true);
		pageManager.setTotalLinesDisplay(false);
	}

	buildShapeGraphs(code) {
		let d3 = require("d3");
		const color = d3.scaleOrdinal(d3.schemePaired);
		
		const runtimeData = runtimeAnalyzer.buildRuntimeVisualizationData(code);
		const lineNumberData = runtimeAnalyzer.buildLineNumberVisualizationData(code);
		this.props.setRuntime(runtimeData.totalRuntime);
		this.props.setLines(lineNumberData.totalLines);
		this.buildRuntimeShapeGraph(runtimeData.toVisualizeRuntimeData, color);
		this.buildLineNumberShapeGraph(lineNumberData.toVisualizeLines, color);
	}

	buildRuntimeShapeGraph(runtimeData, color) {
		const treeMap = new Treemap();
		treeMap.data(runtimeData).excludeRoot(true).width(window.innerWidth * 0.9).height(window.innerHeight * 0.55).tooltipContent(node => 'Runtime: ' + Number.parseFloat(node.value).toPrecision(4) + ' ms').color(d => color(d.name)).onClick((e) => {
			const funcName = e.name;
			this.props.setFuncBreakdownData(astParser.startTraverseAST(this.state.code, funcName));
			this.props.setOnClickFunc(funcName);
			pageManager.setAstTreeGraphDisplay(true);
			pageManager.setAstTreeGraphFuncNameDisplay(true);
		})(document.getElementById("visualizerRuntime"));
	}

	buildLineNumberShapeGraph(lineNumberData, color) {
		const treeMap = new Treemap();
		treeMap.data(lineNumberData).excludeRoot(true).width(window.innerWidth * 0.9).height(window.innerHeight * 0.55).tooltipContent(node => '# of lines: ' + node.value).color(d => color(d.name)).onClick((e) => {
 			const funcName = e.name;
			this.props.setFuncBreakdownData(astParser.startTraverseAST(this.state.code, funcName));
			this.props.setOnClickFunc(funcName);
			pageManager.setAstTreeGraphDisplay(true);
			pageManager.setAstTreeGraphFuncNameDisplay(true); 
		})(document.getElementById("visualizerSize"));
	}

	render() {
		return (
			<div className="uploadFile">
				<form>
					<input className="uploadFileInput" type="file" id="userJs" onClick={pageManager.clearOldUpload} onChange={this.onFileUpload} />
				</form>
				<Button className="uploadFileSubmit" variant="dark" onClick={this.onSubmit}>Analyze</Button>
			</div>
		)
	}
}


export default UploadButton;
