import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import './styles.css';

class FunctionBreakdown extends Component {
	render() {
		return (
			<div className="astTreeGraph">
				<div className="astTreeGraphFuncName" id="astTreeGraphFuncNameId">
					<text>{this.props.onClickFunc}</text>
				</div>
				<div className="astTreeGraphGraph" id="astTreeGraphId" style={{ display: "none" }}>
					<Tree
						className="funcElementsGraph"
						data={this.props.funcBreakdownData}
						width={500}
						height={200}
						animated={true}
						svgProps={{
							className: "customSvg"
						}} />
				</div>
			</div>
		)
	}
}

export default FunctionBreakdown;