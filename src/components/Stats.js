import React, { Component } from 'react';
import './styles.css';

class Stats extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stats">
				<div id="totalRuntime" style={{ display: "none" }}>
					<text>Total Runtime: {this.props.runtime} ms</text>
				</div>
				<div id="totalLineNumber" style={{ display: "none" }}>
					<text>Total # of lines: {this.props.lineNum} </text>
				</div>
			</div>
		);
	}
}

export default Stats;
