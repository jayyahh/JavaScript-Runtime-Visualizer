import React, { Component } from 'react';
import './styles.css';

class ClickToSeeGraphInstruction extends Component {
    render() {
        return(
            <div className="clickToSeeGraph" id="clickToSeeGraphId" style={{display:"none"}}>
                <text>Click any shape to see its function breakdown</text>
            </div>
        )
    }
}
export default ClickToSeeGraphInstruction;