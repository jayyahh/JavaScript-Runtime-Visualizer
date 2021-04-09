import React, { Component } from 'react';
import './styles.css';

class ShapeVisuals extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="visualizerContainer">
				<div id="visualizerRuntime"></div>
				<div id="visualizerSize"></div>
			</div>
		);
	}
}

export default ShapeVisuals;
