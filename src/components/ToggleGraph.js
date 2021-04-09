import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import pageManager from '../controllers/pageManager';
import './styles.css';

class ToggleGraph extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="toggleGraph">
				<ButtonGroup aria-label="Basic example" style={{ width: window.innerWidth * 0.9 }}>
					<Button variant="secondary" onClick={pageManager.showRuntimeGraph} variant="info">Runtime Graph</Button>
					<Button variant="secondary" onClick={pageManager.showLineNumberGraph} variant="warning">Function Length Graph</Button>
				</ButtonGroup>
			</div>
		);
	}
}

export default ToggleGraph;
